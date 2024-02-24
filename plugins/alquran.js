let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `هاذا الأمر خاص با إرسال سور قرءانية وأيات`

    let res = await fetch(global.API('https://islamic-api-indonesia.herokuapp.com', '/api/data/quran', { surah: args[0], ayat: args[1] }))
    let json = await res.json()
    let mes = `${json.result.data.text.arab}
    
${json.result.data.translation.id}

( Q.S ${json.result.data.surah.name.transliteration.id} : ${json.result.data.number.inSurah} )`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, json.result.data.audio.primary, 'all.mp3', '', m, false, { mimetype: 'audio/mp4' })
}

handler.help = ['alquran *114 1*']
handler.tags = ['قائمة الإسلام']
handler.command = /^(al)?quran$/i
module.exports = handler