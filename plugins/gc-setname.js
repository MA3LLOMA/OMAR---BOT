
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*قم بكتابة إسم المجمعة الجديد \n exmaple : .gename معلومة*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*SORRY THERE WAS AN ERROR, THE NAME CAN NOT BE MORE THAN 25 CHARACTERS*'
}}
handler.help = ['setname <text>']
handler.tags = ['قائمة المجموعات']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
export default handler