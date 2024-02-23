import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'morocco':'  ‎أوامر للمغاربة',
  'applications':'‎ أوامر التطبيقات‎',
  'drawing':'‎ توليد الصور‎ أوامر' ,
  'ai':'‎ الذكاء الاصطناعي‎ أوامر',
  'infobot':'‎ معلومات البوت‎',
  'downloader':'‎ أوامر التحميلات',
  'anime':'‎ أوامر عن  الأنيم',
  'islam':'‎ الدين هو الاسلام‎',
  'owner':'‎ اوامر صاحب البوت',
  'search':'‎ أوامر البحث',
  'audio-changer':'‎ تعديل الصوتيات‎',
  'sticker':'‎ أوامر الملصقات',
  'image-edit':'‎ تعديل الصور',
  'pdf':'‎ pdf ومشتقاته‎',
  'uploader':'‎‎ رفع الملفات‎',
}
const defaultMenu = {
  before: `السلام عليكم 👋. 
┌─────────────────⦿

﴿كلّ مَنْ عَلَيْهَا فَانٍ * وَيَبْقَى وَجْه رَبِّكَ ذو الْجَلَالِ وَالْإِكْرَامِ﴾

╰─────────────────⦿

┏━━ salam  *%name*
👥 *Total user:* %totalreg   
┗━━━━━━━━━━⬣

%readmore
𖦹 𝙊 𝙈 𝘼 𝙍 - 𝘽 𝙊 𝙏
 `.trimStart(),
 header: "┌─⦿『 *_%category_* 』⦿",
 body: "┃ %cmd",
 footer: "╰─────────────────⦿",
 after: "By Omar",
 }
 let handler = async (m, {
  conn,
  usedPrefix: _p,
  __dirname,
  args
 }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "⏳",
 key: m.key,
   }
  })
  
  let tags = {}
  
  try {
  
   /* Info Menu */
   let glb = global.db.data.users
   let usrs = glb[m.sender]
   let tag = `@${m.sender.split("@")[0]}`
   let mode = process.env.MODE || (global.opts["self"] ? "Private" : "Public");
   let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {}
   let {
 age,
 exp,
 limit,
 level,
 role,
 registered,
 credit
   } = glb[m.sender]
   let {
 min,
 xp,
 max
   } = xpRange(level, global.multiplier)
   let name = await conn.getName(m.sender)
   let premium = glb[m.sender].premiumTime
   let prems = `${premium > 0 ? "Premium": "Free"}`
   let platform = os.platform()
 
 
   let ucpn = `${ucapan()}`
  
   let _uptime = process.uptime() * 1000
   let _muptime
   if (process.send) {
 process.send("uptime")
 _muptime = await new Promise(resolve => {
  process.once("message", resolve)
  setTimeout(resolve, 1000)
 }) * 1000
   }
   let muptime = clockString(_muptime)
   let uptime = clockString(_uptime)
 
   
   let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
   let totalreg = Object.keys(glb).length
   let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
 return {
  help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
  tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
  prefix: "customPrefix" in plugin,
  limit: plugin.limit,
  premium: plugin.premium,
  enabled: !plugin.disabled,
 }
   })
   for (let plugin of help)
 if (plugin && "tags" in plugin)
  for (let tag of plugin.tags)
   if (!(tag in tags) && tag) tags[tag] = tag
   conn.menu = conn.menu ? conn.menu : {}
   let before = conn.menu.before || defaultMenu.before
   let header = conn.menu.header || defaultMenu.header
   let body = conn.menu.body || defaultMenu.body
   let footer = conn.menu.footer || defaultMenu.footer
   let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
   let _text = [
 before,
 ...Object.keys(tags).map(tag => {
  return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                return menu.help.map(help => {
                    return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                        .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                        .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                        .trim()
                }).join('\n')
            }),
            footer
        ].join('\n')
    }),
    after
].join('\n')
text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  conn.relayMessage(m.chat, {
  extendedTextMessage:{
                text: text, 
                contextInfo: {
                mentionedJid: [m.sender],
                     externalAdReply: {
                        title: date,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/3a34bfa58714bdef500d9.jpg',
                        sourceUrl: 'https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S'
                    }
                }, mentions: [m.sender]
}}, {})
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(allmenu|menu|help|bot)$/i

handler.exp = 3

module.exports = handler


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}