let handler = async (m, { conn }) => {	
    await conn.fetchBlocklist().then(async data => {
    let txt = `*≡ قائمة الحظر*\n\n*Total :* ${data.length}\n\n┌─⊷\n`
    for (let i of data) {
    txt += `▢ @${i.split("@")[0]}\n`}
    txt += "└───────────"
    return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
    }).catch(err => {
    console.log(err);
    throw 'There are no blocked numbers'})}
    handler.help = ['blocklist']
    handler.tags = ['قائمة مطور البوت']
    handler.command = ['blocklist', 'listblock'] 
    handler.rowner = true
    export default handler