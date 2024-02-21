import axios from 'axios'
import { apivisit } from './kanghit.js'
import { savefrom } from '@bochilteam/scraper'

let handler = async (m, { conn, args, command }) => {
    if (!args[0]) throw `هاذا الأمر خاص بتنزيل من انستجرام \n\n ex: .ighttps://www.instagram.com/reel/C1JfJlfq-_n/?igsh=MW95cTlxMGwwY29vag==`
	await m.reply('wait')
	try {
	let res = await savefrom(args[0]).catch(_ => null)
	//if (!res) throw 'Error 404 Not Found'
	await conn.sendMessage(m.chat, { video: { url: res?.url?.[0]?.url }, caption: res?.meta?.title || '' }, { quoted: m })
	await apivisit
	} catch {
	try {
	let api = (await axios.get(API("can", "/api/download/instagram", { url: args[0] } ))).data
	let slide = api.result
    for (let x = 0; x < slide.length; x++) {
		conn.sendFile(m.chat, api.result[x].url, '', 'تابع صاحب البوت فى إنستجرام \n https://www.instagram.com/ovmar_1, m)
	}
	await apivisit
	} catch (e) {
		console.log(e)
		m.reply(`Terjadi kesalahan.`)
	}
} }
handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.alias = ['ig', 'igdl', 'instagram', 'instagramdl']
handler.command = /^(ig(dl)?|instagram(dl)?)$/i
export default handler
