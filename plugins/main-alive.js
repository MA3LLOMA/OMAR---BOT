

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./Assets/ALIVE1.mp3"
    let url = "https://chat.whatsapp.com/K6V9If35p3HAWfUjtEECVt"
    let murl = "https://YouTube.com"
    let img = "https://telegra.ph/file/b1b157e944010efebf1d7.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '212770579205@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "OMAR",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "البوت يعمل قم بطلب أي شئ🌟",
          body: "OMAR BOT",
          thumbnailUrl: "https://i.imgur.com/HPP6M9C.jpeg",
          sourceUrl: 'https://chat.whatsapp.com/K6V9If35p3HAWfUjtEECVt',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['قائمة main']
    handler.command = /^(alive|omar|)$/i 

    export default handler;
