
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `هاذا الأمر خاص باإرسال معلومات حساب الإنستجرام\n\n📌Example: ${usedPrefix + command} ahmmikun` 
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Number:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followersH}
▢ *🫂following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}

▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['قائمة البحث']
handler.command = ['igstalk'] 

export default handler
