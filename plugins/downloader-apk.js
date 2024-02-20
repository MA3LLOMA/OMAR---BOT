import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `هاذا الأمر مخصص لتنزيل التطبيقات من aptoide \n\n ex:\n .apkdl whatsapp \n .apkdl facebook lite \n`;

  try {
    const apkId = encodeURIComponent(args.join(' '));
    const response = await fetch(`https://vihangayt.me/download/apk?id=${apkId}`);
    const data = await response.json();

    if (data.status) {
      const apkData = data.data;
      const message = `
*معلومات التطبيق*
*إسم التطبيق*: ${apkData.name}
*أخر تحديث*: ${apkData.lastup}
الحزمة: ${apkData.package}
*الحجم*: ${apkData.size}
*صورة التطبيق*: ${apkData.icon}
*رابط التحميل*: ${apkData.dllink}
      `;
      await conn.sendFile(`m.chat, apkData.dllink, `${apkData.name}.apk`, message, m);
    } else {
      conn.reply(m.chat, 'هناك مشكلة في الحزمة', m);
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'حدث خطأ في الإرسال. أعتذر', m);
  }
};

handler.help = ['apkdl']
handler.tags = ['downloader']
handler.command = /^(apkdl|downloadapk|apkdownload)$/i

export default handler;
