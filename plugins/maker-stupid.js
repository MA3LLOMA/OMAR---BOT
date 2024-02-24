let handler = async (m, { conn, args }) => {
    let text = args.slice(1).join(' ')
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/its-so-stupid', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    dog: text || 'im+stupid'
    }), 'error.png', `https://www.instagram.com/ovmar_1`, m)
    }  
    handler.help = ['itssostupid', 'iss', 'stupid']
    handler.tags = ['قائمة الصور والتعديل']
    handler.command = /^(itssostupid|iss|stupid)$/i
    export default handler
