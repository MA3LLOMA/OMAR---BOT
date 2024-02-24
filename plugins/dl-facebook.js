import fg from 'api-dylux';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `قم باإرسال رابط الفيديو مثال :\n*${usedPrefix + command}* https://www.facebook.com/Ankursajiyaan/videos/981948876160874/?mibextid=rS40aB7S9Ucbxw6v`;
  }

  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    throw 'رابط الفيديو الذي تريد تنزيله.';
  }

  m.react(rwait);

  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
هاذا هو الفيديو الخاص بك.. \nhttps://www.instagram.com/ovmar_1`;

    const response = await fetch(result.videoUrl);
    const arrayBuffer = await response.arrayBuffer();
    const videoBuffer = Buffer.from(arrayBuffer);

    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
    console.log(error);
    m.reply('لايمكن.  تنزيل هاذا الفيديو قم بالمحاولة مرة اخرى...');
  }
};

handler.help = ['facebook <url>'];
handler.tags = ['قائمة التحميل'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
handler.diamond = true;

export default handler;

