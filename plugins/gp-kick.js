
let handler = async (m, { conn, participants, usedPrefix, command }) => {
	
let kickte = `قم بالرد بالشخص الذي تريد إزالته\n*${usedPrefix + command}* @tag`

if (!m.mentionedJid[0] && !m.quoted) return m.reply(ثم. إخراج الشخص , m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
m.reply(`*User kicked out of the group!*`) 

}

handler.help = ['kick @user']
handler.tags = ['قائمة المجموعات']
handler.command = ['kick', 'expulsar'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
