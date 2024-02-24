import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `هاذا الأكر متخصص في تحميل من إنستجرام \n\n ex:  .ighttps://www.instagram.com/reel/C1JfJlfq-_n/?igsh=MW95cTlxMGwwY29vag==`;
  m.reply(wait);

  let res;
  try {
    res = await fetch(`${gurubot}/igdlv1?url=${text}`);
  } catch (error) {
    throw `An error occurred: ${error.message}`;
  }

  let api_response = await res.json();

  if (!api_response || !api_response.data) {
    throw `لم يتم إيجاد أي فيديو أو صورة في الرابط..`;
  }

  const mediaArray = api_response.data;

  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type;
    const mediaURL = mediaData.url_download;

    let cap = `تابع صاحب البوت فى إنستجرام \n \n https://www.instagram.com/ovmar_1`;

    if (mediaType === 'video') {
      
      conn.sendFile(m.chat, mediaURL, 'instagram.mp4', cap, m);
    } else if (mediaType === 'image') {
      
      conn.sendFile(m.chat, mediaURL, 'instagram.jpg', cap, m);
    }
  }
};

handler.help = ['instagram'];
handler.tags = ['قائمة التحميل'];
handler.command = /^(instagram|igdl|ig|insta)$/i;

export default handler;
