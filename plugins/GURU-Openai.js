import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `Please provide some text or quote a message to get a response.`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    m.react(rwait)
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://i.imgur.com/PkJ6TC4.jpg' },
      caption: '_*سوف يتم تلبية طلبك...*_ \n\n *تابعنا على انستجرام* \n  _https://www.instagram.com/ovmar_1_'
    }, {quoted: m})
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);

    const guru1 = `${gurubot}/chatgpt?text=${prompt}`;
    
    try {
      let response = await fetch(guru1);
      let data = await response.json();
      let result = data.result;

      if (!result) {
        
        throw new Error('خطإ في الوصول الى البحث الذي تريده..');
      }

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
      m.react(done);
    } catch (error) {
      console.error('هناك خطأ:', error);

  
      const model = 'llama';
      const senderNumber = m.sender.replace(/[^0-9]/g, ''); 
      const session = `GURU_BOT_${senderNumber}`;
      const guru2 = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`;
      
      let response = await fetch(guru2);
      let data = await response.json();
      let result = data.completion;

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
      m.react(done);
    }

  } catch (error) {
    console.error('Error:', error);
    throw `*ERROR*`;
  }
};
handler.help = ['chatgpt4']
handler.tags = ['ai']
handler.command = ['bro4', 'chatgpt4', 'ai4', 'gpt4'];

export default handler;
