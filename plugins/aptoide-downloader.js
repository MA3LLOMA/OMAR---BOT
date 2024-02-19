import axios from "axios"
import {
    download
} from "aptoide-scraper"

let handler = async (m, {
    conn,
    text,
    command,
    usedPrefix
}) => {
    let regex = /^[a-z]\w*(\.[a-z]\w*)+$/i
    if (!regex.test(text)) throw "هاذا الأمر خاص بالتنزيل من موقع \n https://fr.aptoide.com/\n \n مثال .aptdown whatsapp.media"
    try {
        let aptodl = await download(text)
        await m.reply(wait)
        let {
            name,
            lastup,
            size,
            icon,
            dllink
        } = aptodl
        let cap = "*Name:* " + name + "\n" + "*Lastup:* " + lastup + "\n" + "*Size:* " + size + "\n\n" + wait
        await conn.sendFile(m.chat, icon, "", cap, m)
        await conn.sendFile(m.chat, dllink, name, null, m, true, {
            quoted: m,
            mimetype: "application/vnd.android.package-archive"
        })
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["aptdown"]
handler.tags = ["tools"]
handler.command = /aptdown$/i

export default handler
