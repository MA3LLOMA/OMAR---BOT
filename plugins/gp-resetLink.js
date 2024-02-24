
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('ثم إعادة ضبط الرابط\n\n📌 new link:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['resetlink']
handler.tags = ['قائمة المجموعات']
handler.command = ['revoke', 'resetlink', 'anularlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
