import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `*هاذا الأمر خاص بتنزيل التطبيقات* \n مثال :. apkdl whatsapp`;

  try {
    const apkId = encodeURIComponent(args.join(' '));
    const response = await fetch(`https://vihangayt.me/download/apk?id=${apkId}`);
    const data = await response.json();

    if (data.status) {
      const apkData = data.data;
      const message = `
*Informasi APK*
Nama: ${apkData.name}
Last Update: ${apkData.lastup}
Package: ${apkData.package}
Size: ${apkData.size}
Icon: ${apkData.icon}
Download Link: ${apkData.dllink}
      `;
      await conn.sendFile(m.chat, apkData.dllink, `${apkData.name}.apk`, message, m);
    } else {
      conn.reply(m.chat, 'أعتذر لم اجد هاذا التطبيق 🤕 ..', m);
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'واسمح لي أن أعرف إذا كان لديك أي أسئلة', m);
  }
};

handler.help = ['apkdl']
handler.tags = ['downloader']
handler.command = /^(apkdl|downloadapk|apkdownload)$/i

export default handler;
