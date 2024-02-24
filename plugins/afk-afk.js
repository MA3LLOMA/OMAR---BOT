//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  😴 *إستراحة* 
 ثم منح إسراحة إستخدام البوت
▢ *User:* ${conn.getName(m.sender)} 
▢ *Reason:* ${text ? text : ''}
  `)
}
handler.help = ['afk <reason>']
handler.tags = ['قائمة الترفيه']
handler.command = ['afk']
handler.group = true

export default handler
