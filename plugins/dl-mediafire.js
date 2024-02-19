
import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems }) => {
	var limit
     if((isOwner || isPrems)) limit = 1200
     else limit = 300
   if (!args[0]) throw `هاذا الأمر خاص بالتحميل من ميديافير\n *مثال* \n. mediafire https://www.mediafire.com/file/23kcob2r7n5x2x7/النسخ+الشامل+مهكر_3.2.7z/file`
    if (!args[0].match(/mediafire/gi)) throw `|🤦🏻‍♂️| الرابط لايعمل`
    m.react(rwait)
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(`https://image.thum.io/get/fullpage/${u}`)).buffer()
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let isLimit = (isPrems || isOwner ? limit : limit) * 1012 < filesize
    let caption = `
   ≡ *ميديافير*

▢ *رقم الحزمة:* ${filename}
▢ *الحجم:* ${filesizeH}
▢ *امتداد:* ${ext}
▢ *تم الرفع:* ${aploud}
`*الملف كبير قم بالترقية*` : ''} 
`.trim()
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)
    
    if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
}
handler.help = ['mediafire <url>']
handler.tags = ['downloader', 'premium']
handler.command = ['mediafire', 'mfire'] 
handler.credit = true
handler.premium = false

export default handler

