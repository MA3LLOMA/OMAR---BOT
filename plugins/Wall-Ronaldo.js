import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendFile(m.chat, ronaldo, 'error.jpg', `*https://www.instagram.com/ovmar_1*`, m)}
//conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], 'https://www.instagram.com/ovmar_1'm)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['قائمة الصور']
handler.command = /^(ronaldo|cr7)$/i
export default handler
