mport {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `${lenguajeGB['smsAvisoMG']()} *ESCRIBA EL NOMBRE DEL APK*`;
  try {    
const searchA = await search(text);
const data5 = await download(searchA[0].id);
let response = `${eg}┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃💫 رقم: ${data5.name}\n┃📦 الحزمة: ${data5.package}\n┃🕒 وقت التحميل: ${data5.lastup}\n┃💪  |  حجم: ${data5.size}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ التطبيق 🚀🚀🚀`
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.sendMessage(m.chat, {'wait'}, {quoted: m})}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
} catch {
throw `${lenguajeGB['smsAvisoFG']()} *NO HAY RESULTADOS DE LO QUE SOLICITA*`;
}};
handler.command = /^(apkmod|apk|modapk|dapk2|aptoide|aptoidedl)$/i;
handler.register = true
handler.limit = 2
export default handler;
