
import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `قم باإرسال رابط GIITHUB?\n\n📌 Example : ${usedPrefix + command} https://github.com/OMARCHARAF/OMARBOTX`
    if (!regex.test(args[0])) throw '⚠️ link incorrect'
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  
    m.reply(`✳️ *Wait, sending repository..*`)
    conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['قائمة التحميل']
handler.command = ['gitclone'] 
handler.credit = true

export default handler
