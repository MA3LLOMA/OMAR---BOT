let handler = async (m, { conn, text, command }) => {
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await conn.fetchStatus(who)
    m.reply(bio.status)
  } catch {
    if (text) throw `لايمكن التعديل علىالبايو للمجموعة أنا لست أدمن..`
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await conn.fetchStatus(who)
      m.reply(bio.status)
    } catch {
      throw `لايمكن التعديل علىالبايو للمجموعة أنا لست أدمن..`
    }
  }
}
handler.help = ['getbio <@tag/reply>']
handler.tags = ['قائمة المجموعات']
handler.command = /^(getb?io)$/i
handler.limit = true
export default handler
