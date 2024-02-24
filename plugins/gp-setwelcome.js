//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('ثم تفعيل الترحيب')
  } else throw `✳️ Enter the Welcome message\n\n@user (mention)\n@group (Group name)\n@desc (description of group)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['قائمة المجموعات']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
