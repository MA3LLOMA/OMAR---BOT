let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('*وداعا البوت سوف يخرج من المجموعة ❤️*', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['قائمة مطور البوت']
handler.command = /^(out|leavegc)$/i

handler.rowner = true

export default handler
