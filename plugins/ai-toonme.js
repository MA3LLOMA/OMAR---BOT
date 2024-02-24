import axios from 'axios'

let handler = async (m, {
    conn,
    args,
    usedPrefix
}) => {
    if (!args[0]) throw `خطأ`
    let xyz = "&apikey=wudysoft"
    let response = await axios.get('https://xzn.wtf/api/aitoonme?url=' + args[0] + xyz)
    let imageURL = response.data.url

    await m.reply(wait)
    await conn.sendFile(m.chat, imageURL, '', wm, m)
}

handler.help = ['aitoonme']
handler.tags = ['قائمة توليد الصور']
handler.command = /^(aitoonme|tnm)$/i
handler.limit = true

export default handler
