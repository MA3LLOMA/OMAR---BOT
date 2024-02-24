import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `هاذا الأمر خاص باإرسال الصور من موقع pinterest ?\n\n📌 Example  : ${usedPrefix + command} Morocco`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢  Pinterest:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['قائمة التحميل']
handler.command = ['pinterest'] 

export default handler
