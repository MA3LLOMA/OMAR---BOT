//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `قم بالرد على الشخص المحظور من البوت`
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `
✅ UNBAN

───────────
@${who.split`@`[0]} ثم إزالة الحظر`, m, { mentions: [who] })
}
handler.help = ['unban @user']
handler.tags = ['قائمة مطور البوت']
handler.command = /^unban$/i
handler.rowner = true

export default handler
