  GNU nano 8.4                                    bot.js
import {
  makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  jidNormalizedUser
} from "@whiskeysockets/baileys";
import pino from "pino";
import readline from "readline";
import fs from "fs";
import { EventEmitter } from "events";
import caseHandler from "./case.js";

// Increase global max listeners to prevent memory leak warning
EventEmitter.defaultMaxListeners = 50;

function question(text = "question") {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(`\x1b[32;1m?\x1b[0m \x1b[1m${text}\x1b[0m `, answer => {
      rl.close();
      resolve(answer);
    });
  });
}

async function start(usePairingCode = true) {
  const { version } = await fetchLatestBaileysVersion();
  const session = await useMultiFileAuthState("session");

  const bot = makeWASocket({
    version,
    printQRInTerminal: !usePairingCode,
    auth: session.state,
    logger: pino({ level: "silent" })
  });

  // Handle pairing code
  if (usePairingCode && !bot.authState.creds.registered) {
    const confirm = await question("Connect via pairing code? [Y/n]: ");
    if (confirm.toLowerCase() === "n") return start(false);
    
    const waNumber = await question("Enter your WhatsApp number (e.g., 2547203xxxxxx): +");
    const number = waNumber.replace(/\D/g, "");

    try {
      await new Promise(r => setTimeout(r, 1000)); // delay
      const code = await bot.requestPairingCode(number);
      console.log(`\x1b[44;1m PAIRING CODE \x1b[0m ${code}`);
    } catch (err) {
      console.error("❌ Failed to generate pairing code:", err.message);
      process.exit(1);
    }
  }

  // Connection events
  bot.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
    if (connection === "close") {
      const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== 401;
      if (shouldReconnect) {
        console.log("⚠️ Disconnected, reconnecting...");
        await start(false); // reconnect silently
      } else {
        console.log("❌ Session expired or unauthorized.");
        await fs.promises.rm("session", { recursive: true, force: true });
        await start(true); // restart with pairing
      }
    }

    if (connection === "open") {
      console.log("✅ KINGVON Connected as:", bot.user.id.split(":")[0]);
    }
  });

  // Save session
  bot.ev.on("creds.update", session.saveCreds);

  // Handle incoming messages
  bot.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    if (!msg?.message) return;

    try {
      await bot.readMessages([msg.key]);
      await caseHandler(bot, msg);
    } catch (err) {
      console.error("❗ Error handling message:", err);
    }
  });

  // Group participant update (welcome messages)
  bot.ev.on("group-participants.update", async (update) => {
    try {
      const { id: jid, participants, action } = update;
      if (action !== "add") return;

      const newMember = participants[0];
      const metadata = await bot.groupMetadata(jid);
      const groupName = metadata.subject;

      const text = `Welcome @${newMember.split('@')[0]} to *${groupName}*!`;

      await bot.sendMessage(jid, {
        text,
        mentions: [newMember]
      });

    } catch (err) {
      console.error("❗ Error in group participant update:", err);
    }
  });
}

start(); // run the bot
