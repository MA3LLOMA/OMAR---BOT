import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `*هاذا الأمر مخصص بالتنزيل من موقع aptoide \n \n شرح التنزيل \n .apkdl whatsapp \n .apkdl facebook lite \n`;

  try {
    const apkId = encodeURIComponent(args.join(' '));
    const response = await fetch(`wait`);
    const data = await response.json();

    if (data.status) {
      const apkData = data.data;
      const message = `
*معلومات التنزيل*
إسم التطبيق: ${apkData.name}
أخر تحديث: ${apkData.lastup}
الحزمة: ${apkData.package}
الحجم: ${apkData.size}
صورة التطبيق: ${apkData.icon}
رابط التنزيل: ${apkData.dllink}
      `;
      await conn.sendFile(m.chat, apkData.dllink, `${apkData.name}.apk`, message, m);
    } else {
      conn.reply(m.chat, 'أعتذر', m);
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'هنا مشكلة في الإرسال. أعتذر', m);
  }
};

handler.help = ['apkdl']
handler.tags = ['downloader']
handler.command = /^(apkdl|downloadapk|apkdownload)$/i

export default handler;
