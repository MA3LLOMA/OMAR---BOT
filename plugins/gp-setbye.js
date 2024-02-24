//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('ثم تفعيل الوداع ')
  } else throw `✳️ enter the message\n@user (mención)`
}
handler.help = ['setbye <text>']
handler.tags = ['قائمة المجموعات']
handler.command = ['setbye'] 
handler.admin = true
handler.owner = false

export default handler
