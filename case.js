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
      { content: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { content: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
      { content: "Do not watch the clock. Do what it does. Keep going.", author: "Sam Levenson" },
      { content: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
      { content: "Stay hungry, stay foolish.", author: "Steve Jobs" },
      { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
      { content: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
      { content: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
      { content: "Everything you can imagine is real.", author: "Pablo Picasso" },
      { content: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
      { content: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
      { content: "Dream big and dare to fail.", author: "Norman Vaughan" },
      { content: "Act as if what you do makes a difference. It does.", author: "William James" },
      { content: "Never give up. Great things take time.", author: "Unknown" },
      { content: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
      { content: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
      { content: "Sometimes later becomes never. Do it now.", author: "Unknown" },
      { content: "Great things never come from comfort zones.", author: "Unknown" },
      { content: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
      { content: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
      // Add more if you wish
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const message = `💬 *"${randomQuote.content}"*\n- ${randomQuote.author}\n\n> *QUOTES BY KINGVON MD*`;

    await reply(message);
    return reply("> stay safe KINGVON✌️");
  } catch (error) {
    console.error("Error picking quote:", error);
    return reply("⚠️ Quote generation error, please check the code!");
  }

case "gptmenu":
  await autoReact();
  return reply("AI Commands:\n.ai <prompt>\n.img <prompt>\n.chat <msg>\n.ask <question>\n.caption <image>\n.summarize <text>\n.translate <text>\n.rewrite <text>\n.fixcode <code>\n.code <task>\n.story <topic>");

case "img":
  await autoReact();
  if (!args.length) return reply("Please provide a prompt for image generation.");
  const imgPrompt = args.join(" ");
  const imageUrl = await generateImage(imgPrompt); // Implement AI image generation
  await sock.sendMessage(from, { image: { url: imageUrl } }, { quoted: msg });
  return;

case "chat":
  await autoReact();
  if (!args.length) return reply("Please say something.");
  const chatResponse = await chatWithAI(args.join(" ")); // Implement chat AI
  return reply(chatResponse);

case "sticker":
case "s":
  await autoReact();

  // Ensure it's a reply to an image or short video
  if (!msg.quoted || !msg.quoted.message) {
    return reply("❌ Reply to an image or short video to make a sticker.");
  }

  const mime = Object.keys(msg.quoted.message)[0];

  if (mime !== "imageMessage" && mime !== "videoMessage") {
    return reply("❌ Only images or videos (under 10 seconds) can be used.");
  }

  try {
    const mediaBuffer = await msg.quoted.download();

    // Send back sticker as a reply
    await sock.sendMessage(
      msg.chat,
      {
        sticker: mediaBuffer,
        // Optional: packname & author
        // packname: "KINGVON", author: "KINGVON MD"
      },
      { quoted: msg } // Reply to the command message
    );
  } catch (err) {
    console.error("❌ Sticker error:", err);
    return reply("⚠️ Failed to make sticker. Try with a clear image or short video.");
  }
  break;

case "caption":
  await autoReact();
  if (!msg.message.imageMessage && !msg.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage) {
    return reply("Reply to an image to caption it.");
  }
  const imageMsg = msg.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage || msg.message.imageMessage;
  const captionText = args.join(" ") || "No caption provided.";
  await sock.sendMessage(from, { image: imageMsg, caption: captionText }, { quoted: msg });
  return;

case "fact":
  await autoReact();
  try {
    const facts = [
      "Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs.",
      "Octopuses have three hearts and blue blood.",
      "Bananas are berries, but strawberries aren’t.",
      "The Eiffel Tower can grow more than six inches during the summer due to heat expansion.",
      "A day on Venus is longer than a year on Venus.",
      "Sharks existed before trees.",
      "There are more stars in the universe than grains of sand on Earth.",
      "Humans share about 60% of their DNA with bananas.",
      "Wombat poop is cube-shaped.",
      "Some cats are allergic to humans.",
      "Water can boil and freeze at the same time – this is called the triple point.",
      "A group of flamingos is called a 'flamboyance'.",
      "Cows have best friends and get stressed when separated.",
      "There’s a species of jellyfish that is biologically immortal.",
      "Butterflies can taste with their feet.",
      "Sloths can hold their breath longer than dolphins.",
      "Hot water freezes faster than cold water – this is called the Mpemba effect.",
      "A shrimp's heart is in its head.",
      "Koalas have fingerprints nearly identical to humans.",
      "You can hear a blue whale’s heartbeat from more than 2 miles away.",
      "Avocados are toxic to birds.",
      "The moon has moonquakes.",
      "The human body contains enough iron to make a 3-inch nail.",
      "Tigers have striped skin, not just striped fur.",
      "You can't hum while holding your nose.",
      "The hashtag symbol is technically called an octothorpe.",
      "Banging your head against a wall burns 150 calories an hour (not recommended).",
      "There are more fake flamingos in the world than real ones.",
      "Apples float in water because they are 25% air.",
      "The longest hiccuping spree lasted 68 years.",
      "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
      "Elephants can't jump.",
      "The dot over a lowercase 'i' or 'j' is called a tittle.",
      "A sneeze travels about 100 miles per hour.",
      "Humans are the only animals that blush.",
      "The fingerprints of a koala are so close to humans' that they can taint crime scenes.",
      "Most wasabi served at sushi restaurants is not real wasabi.",
      "The unicorn is the national animal of Scotland.",
      "Mantis shrimp can punch with the speed of a bullet.",
      "There are more trees on Earth than stars in the Milky Way.",
      "A day on Mercury lasts about 1,408 hours.",
      "Spiders can’t fly, but some can glide through the air on silk threads.",
      "Coca-Cola would be green if coloring weren’t added.",
      "Goats have rectangular pupils.",
      "Octopuses have nine brains.",
      "Pineapples take about two years to grow.",
      "Some turtles can breathe through their butts.",
      "Humans glow in the dark — just not visible to the naked eye.",
      "Mosquitoes are the deadliest animals in the world.",
      "Snails can sleep for up to 3 years.",
      "The smell of freshly cut grass is actually a plant distress call.",
      // Add more if you'd like
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const message = `🧠 *DID YOU KNOW?*\n> ${randomFact}\n\n> *FACTS BY KINGVON MD*`;

    await reply(message);
    return reply("> stay curious KINGVON✌️");
  } catch (error) {
    console.error("Error picking fact:", error);
    return reply("⚠️ Fact generation error, please check the code!");
  }

case "toimg":
  await autoReact();
  const stickerMsg = msg.message.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;
  if (!stickerMsg) return reply("Reply to a sticker to convert to image.");
  const imgBuffer = await stickerToImage(stickerMsg); // Implement sticker to image converter
  await sock.sendMessage(from, { image: imgBuffer }, { quoted: msg });
  return;

case "tomp3":
  await autoReact();
  const videoMsg = msg.message.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage;
  if (!videoMsg) return reply("Reply to a video to convert to mp3.");
  const audioBuffer = await videoToAudio(videoMsg); // Implement video to mp3 conversion
  await sock.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg' }, { quoted: msg });
  return;

case "promote":
  await autoReact();
  if (!isGroup) return reply("This command is for groups only.");
  if (!isBotAdmin) return reply("I must be admin to promote.");
  if (!isUserAdmin) return reply("You must be admin.");
  const promoteUsers = msg.message.extendedTextMessage?.contextInfo?.mentionedJid;
  if (!promoteUsers || promoteUsers.length === 0) return reply("Tag user(s) to promote.");
  await sock.groupMakeAdmin(from, promoteUsers);
  return reply("User(s) promoted.");

case "demote":
  await autoReact();
  if (!isGroup) return reply("This command is for groups only.");
  if (!isBotAdmin) return reply("I must be admin to demote.");
  if (!isUserAdmin) return reply("You must be admin.");
  const demoteUsers = msg.message.extendedTextMessage?.contextInfo?.mentionedJid;
  if (!demoteUsers || demoteUsers.length === 0) return reply("Tag user(s) to demote.");
  await sock.groupDemoteAdmin(from, demoteUsers);
  return reply("User(s) demoted.");

case "group":
  await autoReact();
  if (!isGroup) return reply("This command is for groups only.");
  if (!isBotAdmin) return reply("I must be admin to change group settings.");
  if (!isUserAdmin) return reply("You must be admin.");
  const mode = args[0];
  if (!mode || (mode !== "open" && mode !== "close")) return reply("Use: .group open/close");
  await sock.groupSettingUpdate(from, mode === "close");
  return reply(`Group is now ${mode === "open" ? "open" : "closed"}.`);

case "setdesc":
  await autoReact();
  if (!isGroup) return reply("This command is for groups only.");
  if (!isBotAdmin) return reply("I must be admin to change description.");
  if (!isUserAdmin) return reply("You must be admin.");
  if (!args.length) return reply("Provide a new description.");
  await sock.groupUpdateDescription(from, args.join(" "));
  return reply("Group description updated.");

case "setname":
  await autoReact();
  if (!isGroup) return reply("This command is for groups only.");
  if (!isBotAdmin) return reply("I must be admin to change name.");
  if (!isUserAdmin) return reply("You must be admin.");
  if (!args.length) return reply("Provide a new group name.");
  await sock.groupUpdateSubject(from, args.join(" "));
  return reply("Group name updated.");

case "styletext":
  await autoReact();
  if (!args.length) return reply("Please provide text to style.");
  const styled = styleText(args.join(" ")); // Implement styleText function for fancy fonts
  return reply(styled);

case "fancy":
  await autoReact();
  if (!args.length) return reply("Please provide text to fancy.");
  const fancyText = toFancyText(args.join(" ")); // Implement fancy text converter
  return reply(fancyText);

case "fliptext":
  await autoReact();
  if (!args.length) return reply("Please provide text to flip.");
  const flipped = flipText(args.join(" ")); // Implement flipText function (mirror letters)
  return reply(flipped);

case "spam":
  await autoReact();
  if (!args.length) return reply("Provide text to spam.");
  const spamCount = parseInt(args[0]) || 5;
  const spamText = args.slice(1).join(" ");
  if (spamCount > 20) return reply("Spam count limit is 20.");
  for (let i = 0; i < spamCount; i++) {
    await sock.sendMessage(from, { text: spamText });
  }
  return;

case "text2img":
  await autoReact();
  if (!args.length) return reply("Provide text to convert to image.");
  const textImgUrl = await generateTextImage(args.join(" ")); // Implement text to image API
  await sock.sendMessage(from, { image: { url: textImgUrl } }, { quoted: msg });
  return;

case "tinyurl":
  await autoReact();
  if (!args.length) return reply("Provide a link to shorten.");
  const shortUrl = await shortenURL(args[0]); // Implement tinyurl API call
  return reply(`Shortened URL: ${shortUrl}`);

case "url2pdf":
  await autoReact();
  if (!args.length) return reply("Provide a URL to convert to PDF.");
  const pdfBuffer = await urlToPDF(args[0]); // Implement URL to PDF conversion
  await sock.sendMessage(from, { document: pdfBuffer, mimetype: "application/pdf", fileName: "converted.pdf" }, { quoted: msg });
  return;

case "emojimix":
  await autoReact();
  if (!args.length) return reply("Provide two emojis separated by +.");
  const [emoji1, emoji2] = args.join("").split("+");
  if (!emoji1 || !emoji2) return reply("Use format: .emojimix emoji1+emoji2");
  const mixedEmoji = await mixEmojis(emoji1, emoji2); // Implement emoji mix API
  await sock.sendMessage(from, { sticker: mixedEmoji }, { quoted: msg });
  return;

case "ascii":
  await autoReact();
  if (!args.length) return reply("Provide text for ASCII art.");
  const asciiArt = generateAsciiArt(args.join(" ")); // Implement ASCII art generator
  return reply(asciiArt);

case "autoview":
  await autoReact();

  if (!global.autoViewUsers) global.autoViewUsers = new Set();

  if (global.autoViewUsers.has(sender)) {
    global.autoViewUsers.delete(sender);
    return reply("✅ Auto-view status turned *off*.");
  } else {
    global.autoViewUsers.add(sender);
    return reply("✅ Auto-view status turned *on*. Will auto-view new statuses.");
  }

case "autoreactstatus":
  await autoReact();
  // Toggle auto react to status
  toggleAutoReactStatus(from);
  return reply("Auto-react status toggled.");

case "autoreactmsg":
  await autoReact();
  // Toggle auto react to messages
  toggleAutoReactMsg(from);
  return reply("Auto-react message toggled.");

case "status":
  await autoReact();
  const userStatus = await getStatus(from); // Implement status fetcher
  return reply(userStatus);

case "addnew":
  await autoReact();
  if (from !== ownerNumber) return reply("You are not authorized.");
  if (args.length < 2) return reply("Usage: .addnew <cmd> <response>");
  const newCmd = args[0].toLowerCase();
  const newResponse = args.slice(1).join(" ");
  addCommandToDatabase(newCmd, newResponse); // Implement persistent storage
  return reply(`Command .${newCmd} added successfully!`);

case "broadcast":
  await autoReact();
  if (from !== ownerNumber) return reply("You are not authorized.");
  if (!args.length) return reply("Provide a message to broadcast.");
  broadcastMessage(args.join(" ")); // Implement broadcast to all users
  return reply("Broadcast sent.");

case "restart":
  await autoReact();
  if (from !== ownerNumber) return reply("You are not authorized.");
  reply("Restarting bot...");
  process.exit(1); // Or your restart logic
  break;

case "block":
    await autoReact();
    if (m.sender !== "254720326316@s.whatsapp.net") return reply("Only KINGVON is authorized to use this command.");

    let blockJid;
    if (m.quoted) {
        blockJid = m.quoted.sender;
    } else if (m.mentionedJid?.length) {
        blockJid = m.mentionedJid[0];
    } else if (q && q.includes("@")) {
        blockJid = q.replace(/[@\s]/g, '') + "@s.whatsapp.net";
    } else {
        return reply("Mention a user or reply to their message.");
    }

    try {
        await sock.updateBlockStatus(blockJid, "block");
        reply(`Successfully blocked @${blockJid.split("@")[0]}`, { mentions: [blockJid] });
    } catch (e) {
        console.error("Block command error:", e);
        reply("Failed to block the user.");
    }
    break;

case "unblock":
    await autoReact();
    if (m.sender !== "254720326316@s.whatsapp.net") return reply("Only KINGVON is authorized to use this command.");

    let unblockJid;
    if (m.quoted) {
        unblockJid = m.quoted.sender;
    } else if (m.mentionedJid?.length) {
        unblockJid = m.mentionedJid[0];
    } else if (q && q.includes("@")) {
        unblockJid = q.replace(/[@\s]/g, '') + "@s.whatsapp.net";
    } else {
        return reply("Mention a user or reply to their message.");
    }

    try {
        await sock.updateBlockStatus(unblockJid, "unblock");
        reply(`Successfully unblocked @${unblockJid.split("@")[0]}`, { mentions: [unblockJid] });
    } catch (e) {
        console.error("Unblock command error:", e);
        reply("Failed to unblock the user.");
    }
    break;

case "shutdown":
  await autoReact();
  if (from !== ownerNumber) return reply("You are not authorized.");
  reply("Shutting down...");
  process.exit(0); // Proper shutdown

  case "pluginlist":
  await autoReact();
  if (from !== ownerNumber) return reply("You are not authorized.");
  const plugins = listPlugins(); // Implement function that lists loaded plugins
  return reply(`Loaded Plugins:\n${plugins.join("\n")}`);

case "delplugin":
  await autoReact();
  if (from !== ownerNumber) return reply("You are not authorized.");
  if (!args.length) return reply("Provide plugin name to delete.");
  const pluginToDelete = args[0];
  const result = deletePlugin(pluginToDelete); // Implement plugin delete logic
  return reply(result ? `Plugin ${pluginToDelete} deleted.` : "Plugin not found.");

case "update":
  await autoReact();
  if (from !== ownerNumber) return reply("You are not authorized.");
  reply("Updating bot...");
  await updateBot(); // Implement git pull or update logic
  return reply("Bot updated. Restarting...");
  process.exit(1);

case "userlist":
  await autoReact();
  if (from !== ownerNumber) return reply("You are not authorized.");
  const users = getUserList(); // Implement fetching users database
  return reply(`Registered users:\n${users.join("\n")}`);

case "ban":
  await autoReact();
  if (from !== ownerNumber) return reply("You are not authorized.");
  if (!msg.message.extendedTextMessage?.contextInfo?.mentionedJid) return reply("Tag a user to ban.");
  const toBan = msg.message.extendedTextMessage.contextInfo.mentionedJid[0];
  banUser(toBan); // Implement banning user logic
  return reply("User banned.");

case "unban":
  await autoReact();
  if (from !== ownerNumber) return reply("You are not authorized.");
  if (!msg.message.extendedTextMessage?.contextInfo?.mentionedJid) return reply("Tag a user to unban.");
  const toUnban = msg.message.extendedTextMessage.contextInfo.mentionedJid[0];
  unbanUser(toUnban); // Implement unban logic
  return reply("User unbanned.");

case "autobio":
  await autoReact();
  // Toggle auto bio update feature
  const autoBioStatus = toggleAutoBio(from); // Implement toggle function per chat or globally
  return reply(`Auto bio is now ${autoBioStatus ? "enabled" : "disabled"}.`);

case "pair":
  await autoReact();
  // Send pairing code or link
  const pairingCode = generatePairingCode(); // Implement generation logic
  return reply(`Your pairing code is:\n${pairingCode}`);

case "config":
  await autoReact();
  // Show or update bot config
  if (args.length === 0) {
    const config = getBotConfig(); // Implement retrieval
    return reply(`Current config:\n${JSON.stringify(config, null, 2)}`);
  } else {
    const success = updateBotConfig(args.join(" ")); // Implement update parsing
    return reply(success ? "Config updated." : "Failed to update config.");
  }

case "bible":
  await autoReact();
  if (!args.length) {
    return reply(`⚠️ *Please provide a Bible reference.*\n\n📝 *Example:*\n.bible John 1:1`);
  }

  try {
    const axios = require("axios");
    const reference = args.join(" ");
    const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
    const response = await axios.get(apiUrl);

    if (response.status === 200 && response.data.text) {
      const { reference: ref, text, translation_name } = response.data;

      return reply(
        `📜 *Bible Verse Found!*\n\n` +
        `📖 *Reference:* ${ref}\n` +
        `📚 *Text:* ${text.trim()}\n\n` +
        `🗂️ *Translation:* ${translation_name}\n\n© KINGVON MD BIBLE`
      );
    } else {
      return reply("❌ *Verse not found.* Please check the reference and try again.");
    }
  } catch (error) {
    console.error("Bible command error:", error);
    return reply("⚠️ *An error occurred while fetching the Bible verse.* Please try again.");
  }

case "autorestart":
  await autoReact();
  // Toggle autorestart feature
  const autoRestartStatus = toggleAutoRestart();
  return reply(`Auto restart is now ${autoRestartStatus ? "enabled" : "disabled"}.`);

case "self":
  await autoReact();
  // Set bot mode to self (only owner can use)
  setBotMode("self"); // Implement mode switch
  return reply("Bot is now in self mode.");

case "public":
  await autoReact();
  // Set bot mode to public (all users can use)
  setBotMode("public");
  return reply("Bot is now in public mode.");

case "setppbot":
  await autoReact();
  // Change bot profile picture to the image replied
  const mediaset = await downloadMediasetFromMessage(msg); // Implement media downloader
  if (!media) return reply("Reply to an image to set as profile picture.");
  const setPicResult = await setBotProfilePicture(media); // Implement picture set logic
  return reply(setPicResult ? "Profile picture updated." : "Failed to update profile picture.");

case "mode":
  await autoReact();
  if (!args.length) return reply("Usage: .mode ai/code");
  const modeArg = args[0].toLowerCase();
  if (modeArg !== "ai" && modeArg !== "code") return reply("Invalid mode. Choose 'ai' or 'code'.");
  setBotSubMode(modeArg); // Implement submode switch
  return reply(`Bot mode set to ${modeArg}.`);

case "eval":
  await autoReact();
  if (!isOwner(from)) return reply("You are not authorized to use this command.");
  try {
    const code = args.join(" ");
    let evaled = eval(code);
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
    return reply(`Result:\n${evaled}`);
  } catch (err) {
    return reply(`Error:\n${err.message}`);
  }

case "exec":
  await autoReact();
  if (!isOwner(from)) return reply("You are not authorized to use this command.");
  const exec = require("child_process").exec;
  const userCmd = args.join(" ");
  exec(cmd, (error, stdout, stderr) => {
    if (error) return reply(`Error: ${error.message}`);
    if (stderr) return reply(`Stderr: ${stderr}`);
    reply(`Output:\n${stdout}`);
  });
  break;

case "getfile":
  await autoReact();
  if (!isOwner(from)) return reply("You are not authorized to use this command.");
  const fs = require("fs");
  const filePath = args[0];
  if (!filePath) return reply("Please provide the file path.");
  if (!fs.existsSync(filePath)) return reply("File not found.");
  await sock.sendMessage(from, { document: fs.readFileSync(filePath), fileName: filePath.split("/").pop() }, { quoted: msg });
  break;

case "memory":
  await autoReact();
  const mem = process.memoryUsage();
  const memUsage = `RSS: ${(mem.rss / 1024 / 1024).toFixed(2)} MB\nHeap Total: ${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB\nHeap Used: ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB`;
  return reply(`Memory Usage:\n${memUsage}`);

case "speedtest":
  await autoReact();
  // Here you can implement a real speed test or just reply a dummy message
  return reply("Speedtest feature is under development.");

case "debug":
  await autoReact();
  // Provide debug info, logs or similar
  return reply("Debug info:\nNo issues detected.");

case "inspect":
  await autoReact();
  const inspectArg = args.join(" ");
  try {
    const inspected = require("util").inspect(eval(inspectArg));
    return reply(`Inspect result:\n${inspected}`);
  } catch (e) {
    return reply(`Inspect error:\n${e.message}`);
  }

case "antibad":
  await autoReact();
  try {
    if (args[0] === "on") {
      if (isGroup) {
        antibad[from] = true;
        await reply("✅ Antibad feature enabled in this group.");
      } else {
        antibad["dm"] = true;
        await reply("✅ Antibad feature enabled in DMs.");
      }
    } else if (args[0] === "off") {
      if (isGroup) {
        delete antibad[from];
        await reply("❌ Antibad feature disabled in this group.");
      } else {
        delete antibad["dm"];
        await reply("❌ Antibad feature disabled in DMs.");
      }
    } else {
      await reply("Please use `.antibad on` or `.antibad off`");
    }
  } catch (e) {
    console.log("Error in antibad command:", e);
  }
  break;

case "whois":
  await autoReact();
  const number = args[0];
  if (!number) return reply("Please provide a phone number.");
  // Example: format number or fetch from contacts (implement accordingly)
  return reply(`Information for number: ${number}\nName: Unknown\nStatus: Unknown`);

    default:
      await autoReact();
      return reply("> ❌ Unknown command. Type `.menu` to see available commands.");
  }
  }
      
