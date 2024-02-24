import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `✳️ *Example:*\n\n*${usedPrefix + command}* Am I ugly?`;

  m.react('🫣');
  conn.sendPresenceUpdate('composing', m.chat);

  let res = await fetch(`https://gurugpt.cyclic.app/gpt4?prompt=${encodeURIComponent(text)}&model=llama`);
  let json = await res.json();

  if (json && json.data) {
    const answer = json.data;

    m.reply(`≡ *RESPONSE*
    
▢ *Question:* ${text}
▢ *Answer:* ${answer}`);
  } else {
    throw 'No valid response received from the API.';
  }
};

handler.help = ['question'];
handler.tags = ['قائمة الترفيه'];
handler.command = ['question', 'q'];

export default handler;
