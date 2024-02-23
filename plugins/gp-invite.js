
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `هاذا الأمر يقوم بدعوة أي شخص تريده الى المجموعة to\n\n📌 Example :\n*${usedPrefix + command}*212770579205`
if (text.includes('+')) throw  `Enter number without *+*`
if (isNaN(text)) throw 'قم بكتابة الرقم بدون علامة ال+ '
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *INVITATION TO GROUP*\n\nA user invited you to join this group \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ An invite link was sent to the user`) 

}
handler.help = ['invite <212xxx>']
handler.tags = ['group']
handler.command = ['invite','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
