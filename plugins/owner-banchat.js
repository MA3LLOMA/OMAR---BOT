//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('ثم حظرك من التكلم مع البوو 😔')
}
handler.help = ['banchat']
handler.tags = ['قائمة مطور البوت']
handler.command = ['banchat', 'chatoff'] 

export default handler
 
