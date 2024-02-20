import fetch from  'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `هاذا الأمر خاص بالتحميل من فيسبوك \nExample; ${usedPrefix}${command} https://www.facebook.com/100010929794713/posts/1885825845125057/`
	m.reply(wait)
	let res = await fetch(`https://api.xyroinee.xyz/api/downloader/facebook?url=${text}&apikey=${global.xyro}`)
  let result = await res.json()
  let video = result.data.video_hd
  let audio = result.data.audio
  let cap = `حدث خطأ.._`
  conn.sendMessage(m.chat, { video: { url: video }, caption: cap }, m)
  conn.sendMessage(m.chat, { audio: { url: audio }, mimetype: 'audio/mp4' }, { quoted : m })
}
handler.help = ['facebook2']
handler.tags = ['downloader']
handler.command = /^(facebook2|fbdl2|fb2|facebookdl2)$/i
handler.limit = true

export default handler
