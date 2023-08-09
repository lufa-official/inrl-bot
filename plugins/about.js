const {
    inrl,
    commands,
    tiny,
    insult,
    getBuffer,
    send_alive,
    send_menu,
    UpdateVariable
} = require('../lib')
const Config = require("../config");
inrl({
    pattern: 'list',
    desc: 'To viwe list of categories',
    react: "💯",
    type: 'info'
}, async (message) => {
    let b=1,c="";commands.map((e=>{e.pattern&&e.desc?c+=`${b++} *${e.pattern.replace(/[^a-zA-Z0-9,-]/g,"")}*\n_${e.desc}_\n\n`:c+=`${b++} *${e.pattern.replace(/[^a-zA-Z0-9,-]/g,"")}*\n`}));
    return await message.send(c);
});

inrl({
    pattern: 'del',
    desc: "to delete unwanted grp msg sended by bot",
    react: "⚒️",
    type: 'whatsapp',
    fromMe :true,
    onlyGroup :true
}, async (message, match) => {
    try {
        if (!message.quoted.text) return;
        return message.client.sendMessage(message.from, {
            delete: {
                remoteJid: message.chat,
                fromMe: message.quoted.fromMe,
                id: message.quoted.id,
                participant: message.quoted.sender
            }
        })
    } catch (e) {
        message.reply("*Failed*");
    }
});
inrl({
    pattern: 'dlt',
    desc: 'To dlt unwanted msg by admin from group content',
    react: "🤌",
    type: 'whatsapp',
    onlyGroup :true
}, async (message, match) => {
    if (match) return;
    try {
        let admin = await isAdmin(message);
        let BotAdmin = await isBotAdmin(message);
        if (!BotAdmin) return await message.reply('*_Bot must Be Admin_*');
        if (!admin && !message.client.isCreator) return await message.reply('*_request failed with statuscode 403*_');
        if(!message.quoted.msg) return message.send('*_reply to msg_*');
        return await message.client.sendMessage(message.from, {
            delete: {
                remoteJid: message.key.remoteJid,
                fromMe: message.quoted.fromMe,
                id: message.quoted.id,
                participant: message.quoted.sender
            }
        })
    } catch (e) {
        message.reply("*Failed*");
    }
})
inrl({
    pattern: "alive",
    desc: "to check the bot status",
    react: "🥰",
    type: 'info',
    usage:"*for normal text message*\n```.alive $text>hey_bro_&sender;\ntime:&time;```\n\n*for image*\n```.alive $iamge>img_url;$text>hey _sis_\ndate&date\speed : &speed;```\n\n*for video*\n```.alive $video>url;```\n\n*message with LinkPrvew*\n```.alive $sticker>url;\n$thumbnail>url;\n$title>text;\n$body>hy;\n$mediatype>1;\n$souceurl>url;\n$mediaurl>url;```"
}, async (message, match, data) => {
    if(match == "get" && message.client.isCreator){
    return await message.send(data.ALIVE_DATA);
    } else if(match && message.client.isCreator){
    await  UpdateVariable("ALIVE_DATA", match.trim(),message.conn.user.id.split(':')[0]);
    return await message.send('*success*');
    }
    return await send_alive(message, data);
});
inrl({
    pattern: "menu",
    desc: "it send available cmds list",
    react: "📰",
    type: 'whatsapp'
}, async (message, match, data) => {
    return await send_menu(message, data);
});
inrl({
    pattern: `cmds`,
    react: "🆗",
    type: 'info'
}, async (message, match) => {
    return await message.client.sendMessage(message.from, {
        text: commands.length.toString()
    }, {
        quoted: message
    });
});
