import fs from "fs";
import path from "path";

let botMode = "public"; // or "private"
let antibad = {}; // <-- Move this to top!
let userWarnings = {}; // <-- Same here

const config = JSON.parse(fs.readFileSync("./config/config.json", "utf-8"));
const prefix = config.prefix;
const ownerNumber = ["+254720326316@s.whatsapp.net"];
const thumbnailUrl = "https://i.postimg.cc/GhLjS8VZ/45366459a1ab66e7f41614efecabae57.jpg";

const emojis = ["😂", "🔥", "💥", "🎉", "❤️", "🤖", "🛠", "✨", "👑", "💯", "👀", "🙏", "🎬", "📱", "🧠>

export default async function caseHandler(sock, msg) {

const from = msg.key.remoteJid;
  const sender = msg.key.fromMe ? sock.user.id : msg.key.participant || from;
const connectedUser = sock.user.id; // This is the bot’s own WhatsApp ID
const isConnectedUser = sender === connectedUser;
  const isGroup = from.endsWith("@g.us");

  const groupMetadata = isGroup ? await sock.groupMetadata(from) : {};
sock.ev.on('group-participants.update', async (update) => {
  try {
    const { id: jid, participants, action } = update;
    if (action !== 'add') return;

    const newMember = participants[0];
    const metadata = await sock.groupMetadata(jid);
    const name = await sock.getName(newMember);
    const groupName = metadata.subject;

    const text = `Welcome @${newMember.split('@')[0]} to *${groupName}*!`;

    // Your welcome logic here:
    if (cfg.welcome == "text") {
      await sock.sendMessage(jid, {
        text,
        mentions: [newMember]
      }, { quoted: Data.fquoted?.welcome });
        } else if (cfg.welcome == "linkpreview") {
      let welcome = {
        text: text + "\n\nStay updated with KINGVON:\nhttps://whatsapp.com/channel/0029Vb5tbcZEKyZEHb>
        contextInfo: {
          externalAdReply: {
            title: 'KINGVON Official Channel',
            body: 'Click to join and stay updated!',
            thumbnailUrl: 'https://i.imgur.com/your-image.jpg',
            mediaType: 1,
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: 'https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y'
          }
        }
      };

      await sock.sendMessage(jid, welcome, { quoted: Data.fquoted?.welcome });
    }

  } catch (err) {
    console.error('Error in group welcome:', err);
  }
});

  const isSenderAdmin = isGroup ? groupMetadata.participants.find(p => p.id === sender && p.admin) !=>
  const channelLink = 'https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y'
  const isOwner = ownerNumber.includes(sender);
  const pushName = msg.pushName || "User";

  const body = msg.message?.conversation || msg.message?.extendedTextMessage?.text || msg.message?.im>

  const pesan = body.toLowerCase();
  if (!pesan.startsWith(prefix)) return;
  if (botMode === "private" && !isConnectedUser) return;

  const fullCmd = pesan.slice(prefix.length).trim();
  const [command, ...args] = fullCmd.split(" ");
  const text = args.join(" ");

if ((isGroup && antibad[from]) || (!isGroup && antibad["dm"])) {
  const msgText = (body || "").toLowerCase();
  const senderId = msg.key.participant || sender;
   const badWords = ["fuck", "shit", "bitch", "nigga", "asshole", "pussy"];
  const rudeReplies = [
    "⚠️ Stop using that word!",
    "Mind your language!",
    "No bad words allowed.",
    "That's your warning. Chill.",
    "Watch your mouth!"
  ];

  if (badWords.some(word => msgText.includes(word))) {
    userWarnings[senderId] = (userWarnings[senderId] || 0) + 1;

    const warnMsg = rudeReplies[Math.floor(Math.random() * rudeReplies.length)];
    await sock.sendMessage(from, { text: `${warnMsg}\nWarning ${userWarnings[senderId]}/3` }, { quote>

    if (userWarnings[senderId] >= 3) {
      if (isGroup && isBotAdmin && !isSenderAdmin) {
        await sock.groupParticipantsUpdate(from, [senderId], "remove");
        await sock.sendMessage(from, { text: "❌ Removed for repeated bad language." });
      } else {
        await sock.sendMessage(from, { text: "⚠️ You reached 3 warnings. No more bad words." });
      }
      userWarnings[senderId] = 0;
    }
  }
}

if (botMode === "private" && !isOwner) return;

function reply(captionText) {
  return sock.sendMessage(from, {
    text: captionText,
    footer: "KINGVON Official Channel",
    templateButtons: [
      {
        urlButton: {
          displayText: "View Channel",
          url: 'https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y'  // your channel link here
        }
      }
    ],
    contextInfo: {
      externalAdReply: {
        title: "Join Our Channel",
        body: "KINGVON Official Channel",
        thumbnailUrl,
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: false,
        sourceUrl: channelLink,
      }
    }
  }, { quoted: msg });
}
  async function autoReact() {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    await sock.sendMessage(from, { react: { text: emoji, key: msg.key } });
  }

  console.log(`\x1b[32m[CMD]\x1b[0m ${command} => ${sender}`);

  switch (command) {
case "menu":
  await autoReact("🤖");
  const now = new Date();
  const day = now.toLocaleDateString("en-KE", { weekday: "long", timeZone: "Africa/Nairobi" });
  const date = now.toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric", time>
  const time = now.toLocaleTimeString("en-KE", { hour: '2-digit', minute: '2-digit', second: '2-digit>

  const userName = pushName || "User";
  const commandCount = 120;
  const botVersion = "KINGVON-MD v1";
  const prefixes = `.`;

  return reply(`*╭━━━[ KINGVON-MD MENU ]━━━╮*
┃ 📆 *Date:* ${date}
┃ 📅 *Day:* ${day}
┃ ⏰ *Time:* ${time}
┃ 🙋 *User:* ${userName}
┃ 🧾 *Commands:* ${commandCount}
┃ 🧪 *Version:* ${botVersion}
┃ ☑️ *Prefix:* ${prefix}
╰────────────────────────╯
> MADE WITH LOVE BY 𝐊𝐈𝐍𝐆𝐕𝐎𝐍

╭──〔 ⚙️ UTILITY 〕───────╮
┃ • .menu
┃ • .help
┃ • .ping
┃ • .ping2
┃ • .uptime
┃ • .owner
┃ • .report <bug>
┃ • .say <text>
┃ • .weather <city>
┃ • .define <word>
┃ • .quote
┃ • .calc <math>
┃ • .short <url>
┃ • .time
┃ • .date
┃ • .fact
┃ • .quran
┃ • .bible
┃ • .readmore
┃ • .wallpaper <query>
╰────────────────────────╯

╭──〔 🤖 AI & GPT 〕──────╮
┃ • .ai <prompt>
┃ • .img <prompt>
┃ • .gptmenu
┃ • .chat <msg>
┃ • .ask <question>
┃ • .caption <image>
┃ • .summarize <text>
┃ • .translate <text>
┃ • .rewrite <text>
┃ • .fixcode <code>
┃ • .code <task>
┃ • .story <topic>
┃ • .memeidea
┃ • .ytideas
╰────────────────────────╯

╭──〔 🎬 MEDIA TOOLS 〕────╮
┃ • .sticker
┃ • .toimg
┃ • .tomp3
┃ • .download <url>
┃ • .ytmp3 <url>
┃ • .ytmp4 <url>
┃ • .play <query>
┃ • .tiktok <url>
┃ • .instagram <url>
┃ • .snap <url>
┃ • .mediafire <url>
┃ • .apk <name>
┃ • .nulis <text>
┃ • .photoox <style> <text>
╰────────────────────────╯

╭──〔 📝 TEXT & CONVERT 〕─╮
┃ • .styletext <text>
┃ • .fancy <text>
┃ • .fliptext <text>
┃ • .spam <text>
┃ • .text2img <text>
┃ • .tinyurl <link>
┃ • .url2pdf <link>
┃ • .tts <text>
┃ • .emojimix <emoji+emoji>
┃ • .ascii <text>
╰────────────────────────╯

╭──〔 📱 STATUS TOOLS 〕───╮
┃ • .autoview
┃ • .autoreactstatus
┃ • .autoreactmsg
┃ • .status
┃ • .viewonce
┃ • .vv
╰────────────────────────╯
╭──〔 🛡 GROUP TOOLS 〕────╮
┃ • .kick @user
┃ • .add <number>
┃ • .promote @user
┃ • .demote @user
┃ • .terminate
┃ • .antilink
┃ • .antibad
┃ • .group open/close
┃ • .setdesc <desc>
┃ • .setname <name>
┃ • .grouplink
┃ • .revoke
┃ • .warn @user
┃ • .warnings
┃ • .resetwarn @user
┃ • .hidetag <text>
┃ • .tagall <msg>
┃ • .poll <text>
┃ • .vote
┃ • .checkwarn @user
╰────────────────────────╯

╭──〔 🧠 AUTO & CONTROL 〕─╮
┃ • .autobio
┃ • .pair
┃ • .config
┃ • .autorestart
┃ • .self
┃ • .public
┃ • .setppbot
┃ • .mode
┃ • .setprefix <symbol>
┃ • .alive
╰────────────────────────╯

╭──〔 🔒 OWNER ONLY 〕────╮
┃ • .addnew <cmd> <res>
┃ • .broadcast <msg>
┃ • .restart
┃ • .block @user
┃ • .unblock @user
┃ • .shutdown
┃ • .pluginlist
┃ • .delplugin <name>
┃ • .getplugin <url>
┃ • .update
┃ • .userlist
┃ • .ban @user
┃ • .unban @user
╰────────────────────────╯

╭──〔 ⚒️ DEV TOOLS 〕──────╮
┃ • .eval <code>
┃ • .exec <cmd>
┃ • .getfile <path>
┃ • .runtime
┃ • .memory
┃ • .speedtest
┃ • .debug
┃ • .inspect
┃ • .whois <num>
┃ • .upt
╰────────────────────────╯

╰━[ Made with ❤️ by KINGVON ]━╯`);

await conn.sendMessage(from, {
  text: menuText,
  footer: 'Stay updated with KINGVON!',
  templateButtons: [
    {
      index: 1,
      urlButton: {
        displayText: 'View Channel',
        url: 'https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y'
      }
    }
  ]
}, { quoted: msg });

case "ping":
  await autoReact();

  try {
    const startTime = Date.now();
    const tempMsg = await sock.sendMessage(from, { text: '> *KINGVON MD SPEED TEST...*' }, { quoted: >
    const endTime = Date.now();
    const ping = endTime - startTime;

    await sock.sendMessage(from, {
      text: `╭──〔KINGVON MD PING〕───·๏
┃🛸┃• *⏳ SPEED*: ${ping}ms
┃🛸┃• *👨‍💻 CREATOR*: KINGVON
┃🛸┃• *🧬 VERSION*: V1
╰──────────────┈⊷
© KINGVON MD`
    }, { quoted: tempMsg });

  } catch (err) {
    console.error("Ping error:", err);
    await reply("An error occurred while measuring speed.");
  }

  break;

case "ping2":
  await autoReact();

  try {
    const startTime = Date.now();
    const tempMsg = await sock.sendMessage(from, { text: '> *SPEED...*' }, { quoted: msg });
    const endTime = Date.now();
    const ping = endTime - startTime;

    await sock.sendMessage(from, {
      text: `┣━━━━━━━━━━━━━━━━━━━
┃  KINGVON MD SPEED TEST: ${ping}ms
┗━━━━━━━━━━━━━━━━━━━  `
    }, { quoted: tempMsg });

  } catch (err) {
    console.error("Ping2 error:", err);
    await reply("An error occurred while measuring speed.");
  }

  break;

case "owner":
  try {
    await autoReact();

    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:KINGVON
ORG:KINGVON-MD BOT OWNER
TEL;type=CELL;type=VOICE;waid=254720326316:+254720326316
END:VCARD`;

    await sock.sendMessage(from, {
      contacts: {
        displayName: "KINGVON",
        contacts: [{ vcard }]
      }
    }, { quoted: msg });

  } catch (err) {
    console.error("OWNER CMD ERROR:", err);
    await message.reply("❌ Failed to send vCard.");
  }
  break;

    case "help":
await autoreact();
      return reply("Type `.menu` to view all commands.");

    case "info":
      await autoReact();
      return reply("KINGVON MD Bot\nVersion: 3.0\nStatus: Online");

    case "uptime":
      await autoReact();
      const uptime = process.uptime();
      const hrs = Math.floor(uptime / 3600);
      const mins = Math.floor((uptime % 3600) / 60);
      const secs = Math.floor(uptime % 60);
      return reply(`Uptime: ${hrs}h ${mins}m ${secs}s`);

   case "ai":
const axios = require('axios');
const someModule = require('some-module')
cmd({
    pattern: "ai",
    alias: ["bot", "chatgpt2", "gpt"],
    desc: "Chat with an AI model",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    await autoreact();
    try {
        if (!q) return reply("Please provide a message for the AI.\nExample: `.ai Hello`");

        const apiUrl = `https://lance-frank-asta.onrender.com/api/gpt?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.message) {
            return reply("AI failed to respond. Please try again later.");
        }
7
        await reply(`🤖 *AI Response:*\n\n${data.message}`);
    } catch (e) {
        console.error("Error in AI command:", e);
        reply("An error occurred while communicating with the AI.");
    }
});

cmd({
    pattern: "openai",
  alias: ["chatgpt", "gpt3", "open-gpt"],
    desc: "Chat with OpenAI",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a message for OpenAI.\nExample: `.openai Hello`");

        const apiUrl = `https://vapis.my.id/api/openai?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.result) {
            return reply("OpenAI failed to respond. Please try again later.");
        }

        await reply(`🧠 *OpenAI Response:*\n\n${data.result}`);
    } catch (e) {
        console.error("Error in OpenAI command:", e);
        reply("An error occurred while communicating with OpenAI.");
    }
});

cmd({
    pattern: "deepseek",
    alias: ["deep", "seekai"],
    desc: "Chat with DeepSeek AI",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a message for DeepSeek AI.\nExample: `.deepseek Hello`");

        const apiUrl = `https://api.ryzendesu.vip/api/ai/deepseek?text=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.answer) {
            return reply("DeepSeek AI failed to respond. Please try again later.");
        }
      await reply(`🧠 *DeepSeek AI Response:*\n\n${data.answer}`);
    } catch (e) {
        console.error("Error in DeepSeek AI command:", e);
        reply("An error occurred while communicating with DeepSeek AI.");
    }
});

 case "vv":
const { cmd } = require("../command");

cmd({
  pattern: "vv",
  alias: ["viewonce", "retrieve"],
  react: "👾",
  desc: "Retrieve quoted view-once image/video/audio message",
  category: "media",
  filename: __filename,
}, async (client, message, match, { from }) => {
  try {
    const quotedMsg = message.quoted;
    if (!quotedMsg || !quotedMsg.message) {
      return client.sendMessage(from, {
        text: "🍁 *Please reply to a view-once message to retrieve it!*"
      }, { quoted: message });
    }

    const buffer = await quotedMsg.download();
    const mtype = quotedMsg.mtype;
    const options = { quoted: message };
    let content = {};

    switch (mtype) {
      case "imageMessage":
        content = {
          image: buffer,
          caption: quotedMsg.text || '',
          mimetype: quotedMsg.mimetype || "image/jpeg"
        };
        break;

      case "videoMessage":
        content = {
          video: buffer,
          caption: quotedMsg.text || '',
          mimetype: quotedMsg.mimetype || "video/mp4"
        };
        break;

      case "audioMessage":
        content = {
          audio: buffer,
          mimetype: quotedMsg.mimetype || "audio/mp4",
          ptt: quotedMsg.ptt || false
        };
        break;

      default:
        return client.sendMessage(from, {
          text: "❌ *Only image, video, or audio view-once messages are supported.*"
        }, { quoted: message });
    }

    await client.sendMessage(from, content, options);
  } catch (error) {
    console.error("vv command error:", error);
    await client.sendMessage(from, {
      text: `❌ *Error retrieving view-once message:*\n${error.message}`
    }, { quoted: message });
  }
});

case "report":
  await autoReact();
  if (!args.length) return reply("Please describe the bug or issue.");
  // Here you could forward the report to owner or log it
  return reply("> `Thanks for reporting! We'll look into it.`");

case "mode":
  if (!isConnectedUser) return reply("❌ Only the connected bot user can change bot mode.");
  if (!text || (text !== "public" && text !== "private")) {
    return reply("Usage: .mode public | private");
  }
  botMode = text;
  await reply(`✅ Bot mode changed to *${botMode}*`);
  break;
        
case "say":
  await autoReact();
  if (!args.length) return reply("> Please provide text to say.");
  return sock.sendMessage(from, { text: args.join(" ") }, { quoted: msg });

case "define":
  await autoReact();
  if (!args.length) return reply("Please provide a word to define.");
  const word = args[0];
  const definition = await getDefinition(word); // Implement dictionary API call
  return reply(definition);

case "quote":
  await autoReact();
  try {
    const quotes = [
      { content: "Success is not final, failure is not fatal: It is the courage to continue that coun>
      { content: "The best way to get started is to quit talking and begin doing.", author: "Walt Dis>
      { content: "Do not watch the clock. Do what it does. Keep going.", author: "Sam Levenson" },
      { content: "Your time is limited, so don’t waste it living someone else’s life.", author: "Stev>
      { content: "Stay hungry, stay foolish.", author: "Steve Jobs" },
      { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { content: "It does not matter how slowly you go as long as you do not stop.", author: "Confuci>
      { content: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.>
      { content: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
      { content: "Everything you can imagine is real.", author: "Pablo Picasso" },
      { content: "I am not a product of my circumstances. I am a product of my decisions.", author: ">
      { content: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
      { content: "Dream big and dare to fail.", author: "Norman Vaughan" },
      { content: "Act as if what you do makes a difference. It does.", author: "William James" },
      { content: "Never give up. Great things take time.", author: "Unknown" },
      { content: "The harder you work for something, the greater you’ll feel when you achieve it.", a>
      { content: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
      { content: "Sometimes later becomes never. Do it now.", author: "Unknown" },
      { content: "Great things never come from comfort zones.", author: "Unknown" },
      { content: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
      { content: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
      // Add more if you wish
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const message = `💬 *"${randomQuote.content}"*\n- ${randomQuote.author}\n\n> *QUOTES BY KINGVON M>
    
