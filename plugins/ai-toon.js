import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!text || !args[0]) throw `>  مثال للإنشاء صور على شكل كرتون: ${usedPrefix + command} <aversion> <text>\n\nAvailable verions:\nai\nv1\nv2\nv3\nv4\nv5\nv6\n\nExample: ${usedPrefix + command} v4 cute girl in pink dress`;

    const apiVersion = args[0].toLowerCase();
    const validVersions = ['ai', 'v1', 'v2', 'v3', 'v4', 'v5', 'v6'];

    if (!validVersions.includes(apiVersion)) {
        throw `> Invalid version. Supported versions: ${validVersions.join(', ')}`;
        m.react('🤐');
    }

    const promptText = args.slice(1).join(' ');

    try {
        let mess = await m.reply('> جاري انشاء الصورة... \n لما لاتنظم الى مجموعتنا على واتساب ❤️ https://chat.whatsapp.com/LCFDLxeCOopBaJZcMLlPEQ');
        m.react('🖌');

        const endpoint = `https://aemt.me/${apiVersion}/text2img?text=${encodeURIComponent(promptText)}`;
        const response = await fetch(endpoint);

        if (response.ok) {
            const imageBuffer = await response.arrayBuffer();

            //await m.reply({ key: mess.key, text: '> Here generated image...' });
            await conn.sendFile(m.chat, Buffer.from(imageBuffer), 'toon_image.png', null, m);
            await m.react('😊');
        } else {
            throw '> خطأ في إنشاء الصورة..';
            m.react('😕');
        }
    } catch {
        throw '> Oops! Something went wrong while generating toon image. Please try again later.';
        m.react('😕');
    }
};

handler.help = ['toonai <version> <text>'];
handler.tags = ['ai'];
handler.command = ['toonai', 'toonimage', 'toon'];

export default handler;
