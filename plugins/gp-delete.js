
let handler = async (m, { conn, usedPrefix, command }) => {
	
if (!m.quoted) throw `هاذا الأمر يقوم بحدف الرسائل المزعجة قم بالرد على الرسالة`
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['delete']
handler.tags = ['قائمة المجموعات']
handler.command = /^del(ete)?$/i
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
