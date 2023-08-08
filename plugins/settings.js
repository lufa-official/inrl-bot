//created by @inrl
const {
    inrl,
    GenListMessage,
    UpdateVariable
} = require('../lib');
inrl({
    pattern: 'setting$',
    fromMe: true,
    DismissPrefix: true,
    type: "system"
}, async (m) => {
    if (m.client.text && m.client.text.length > 3) return;
    return await m.sock.sendMessage(m.from, {
        text: GenListMessage("Settings Updater", ["SPAM MANAGER (GROUP/PM) 3S DELAY", "SHOW BOT ONLINE FOR ALL TIMES", "GIVE REACTION TO EVERY MESSAGE", "CHANGE BIO ACCORDING TO TIME (1) mnt", "VIEW ALL MESSAGES", "BGM BOT (Malayalam)", "MODE (public/private)", "AVOID PEOPLE WHO MESSAGE YOU IN PM", "AVOID CALLERS ON PM", "VIEW ALL STATUS", "WORK ON CHAT BOT PM", "WORK ON CHAT BOT GROUP", "PRESENCE WHEN RESPONDING","GIVE ADMIN SUDO ACCSES","REJECT CALLS","GIVE A WARNING TO THOSE WHO CONSTANTLY SEND MESSAGES IN THE GROUP","GIVE A WARNING TO THOSE WHO USE INAPPROPRIATE WORDS IN THE GROUP","AVOID PEOPLE WHO USE INAPPROPRIATE WORDS IN PM","READ COMMANDS","AVOID PEOPLE WHO CONSTANTLY MESSAGE YOU ON PM"], false,"\n_Send number as reply to update_")
    })
});
inrl({
    on: "text",
    fromMe: true
}, async (m, text, data) => {
    if(!m.reply_message.fromMe || !m.reply_message.text) return;
    if(!m.reply_message.text.includes('_Send number as reply to update_')) return;
    match = m.client.body.toLowerCase();
    if (!match.includes('settings updater')) return;
    match = match.replace('settings updater', '').trim();
    if (match == "spam manager (group/pm) 3s delay") {
        const {
            ANTI_SPAM
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${ANTI_SPAM}`, [`SPAM ${ANTI_SPAM== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "show bot online for all times") {
        const {
            ALLWAYS_ONLINE
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${ALLWAYS_ONLINE}`, [`ALLWAYS ONLINE ${ALLWAYS_ONLINE== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "give admin sudo accses") {
        const {
            ADMIN_SUDO_ACCESS
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${ADMIN_SUDO_ACCESS}`, [`ADMIN SUDO ACCESS ${ADMIN_SUDO_ACCESS == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "give reaction to every message") {
        const {
            REACT
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${REACT}`, [`REACTION ${REACT== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "change bio according to time (1) mnt") {
        const {
            AUTO_BIO
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${AUTO_BIO}`, [`CHANGE BIO ${AUTO_BIO== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "view all messages") {
        const {
            READ_CHAT
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${READ_CHAT}`, [`READ CHAT ${READ_CHAT== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "read_chat") {
        const {
            READ_CHAT
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${READ_CHAT}`, [`READ_CHAT ${READ_CHAT== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "bgm bot (malayalam)") {
        const {
            BGMBOT
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${BGMBOT}`, [`BGM BOT ${BGMBOT== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "mode (public/private)") {
        const {
            WORKTYPE
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${WORKTYPE}`, [`MODE ${WORKTYPE== "public"? 'private':'public'}`])
        })
    } else if (match == "avoid people who message you in pm") {
        const {
            PM_BLOCK
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${PM_BLOCK}`, [`AVOID PM MSGS ${PM_BLOCK== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "block callers on pm") {
        const {
            CALL_BLOCK
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${CALL_BLOCK}`, [`AVOID CALLERS ${CALL_BLOCK== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "view all status") {
        const {
            STATUS_VIEW
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${STATUS_VIEW}`, [`VIEW ALL STATUS ${STATUS_VIEW== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "work on chat bot pm") {
        const {
            AUTO_CHAT_PM
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${AUTO_CHAT_PM}`, [`CHAT BOT IN PM ${AUTO_CHAT_PM== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "work on chat bot group") {
        const {
            AUTO_CHAT_GRP
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${AUTO_CHAT_GRP}`, [`CHAT BOT IN GROUP ${AUTO_CHAT_GRP== "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "reject calls") {
        const {
            REJECT_CALL
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${REJECT_CALL}`, [`REJECTCALL ${REJECT_CALL == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "give a warning to those who constantly send messages in the group") {
        const {
            WARN_GROUP_SPAMMERS
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${WARN_GROUP_SPAMMERS}`, [`WARN GROUP SPAMMERS ${WARN_GROUP_SPAMMERS == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "give a warning to those who use inappropriate words in the group") {
        const {
            BAD_WORD_WARN
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${BAD_WORD_WARN}`, [`WARN INAPPROPRIATE MESSAGE SENDER ${BAD_WORD_WARN == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "avoid people who use inappropriate words in pm") {
        const {
            BADWORD_BLOCK
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${BADWORD_BLOCK}`, [`AVOID INAPPROPRIATE MESSAGE SENDER ${BADWORD_BLOCK == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "read commands") {
        const {
            READ_COMMANDS
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${READ_COMMANDS}`, [`READ COMMANDS ${READ_COMMANDS == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "avoid people who constantly message you on pm") {
        const {
            SPAM_BLOCK
        } = data;
        return await m.sock.sendMessage(m.from, {
            text: GenListMessage(`status : ${SPAM_BLOCK}`, [`AVOID SPAMMERS ${SPAM_BLOCK == "true"? ': DEACTIVATE ':': ACTIVATE'}`])
        })
    } else if (match == "presence when responding") {
        const {
            BOT_PRESENCE
        } = data;
        switch (BOT_PRESENCE) {
            case "unavailable":
                return await m.sock.sendMessage(m.from, {
                    text: GenListMessage(`status : ${BOT_PRESENCE}`, ["AVAILABLE", "COMPOSING", "RECORDING", "PAUSED"])
                })
                break;
            case "available":
                return await m.sock.sendMessage(m.from, {
                    text: GenListMessage(`status : ${BOT_PRESENCE}`, ["UNAVAILABLE", "COMPOSING", "RECORDING", "PAUSED"])
                })
                break;
            case "composing":
                return await m.sock.sendMessage(m.from, {
                    text: GenListMessage(`status : ${BOT_PRESENCE}`, ["UNAVAILABLE", "AVAILABLE", "RECORDING", "PAUSED"])
                })
                break;
            case "recording":
                return await m.sock.sendMessage(m.from, {
                    text: GenListMessage(`status : ${BOT_PRESENCE}`, ["UNAVAILABLE", "AVAILABLE", "COMPOSING", "PAUSED"])
                })
                break;
            case "paused":
                return await m.sock.sendMessage(m.from, {
                    text: GenListMessage(`status : ${BOT_PRESENCE}`, ["UNAVAILABLE", "AVAILABLE", "COMPOSING", "RECORDING"])
                })
                break;
            default:
                break;
        }
    }
});
inrl({
    on: "text",
    fromMe: true
}, async (m, text, data) => {
    if(!m.reply_message.fromMe) return;
    if (!m.client.body.includes('status')) return;
    match = m.client.body.toLowerCase();
    if (match.includes('spam')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("SPAM", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('allways online')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("ALLWAYS_ONLINE", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('admin sudo access')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("ADMIN_SUDO_ACCESS", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('reaction')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("REACT", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('change bio')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("AUTO_BIO", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_\n```try restart to activate```");
    } else if (match.includes('read chat')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("READ_CHAT", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('bgm bot')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("BGMBOT", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('mode')) {
        let updt = match.split(" ").pop();
        updt = updt == "public" ? 'private' : 'public';
        await UpdateVariable("WORKTYPE", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_\n```restart to run with new variable```");
    } else if (match.includes('avoid pm msgs')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("PM_BLOCK", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('avoid callers')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("CALL_BLOCK", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('view all status')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("STATUS_VIEW", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('chat bot in pm')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("AUTO_CHAT_PM", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('chat bot in group')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("AUTO_CHAT_GRP", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('rejectcall')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("REJECT_CALL", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('warn group spammers')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("WARN_GROUP_SPAMMERS", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('warn inappropriate message sender')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("BADWORD_BLOCK", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('avoid inappropriate message sender')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("REJECT_CALL", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('read commands')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("READ_COMMANDS", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('avoid spammers')) {
        let updt = match.split(" ").pop();
        updt = updt == "true" ? 'false' : 'true';
        await UpdateVariable("SPAM_BLOCK", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    } else if (match.includes('available') || match.includes('composing') || match.includes('recording') || match.includes('paused')) {
        let updt = match.split(" ")[0]
        await UpdateVariable("BOT_PRESENCE", updt, m.client.user.number);
        return await m.reply("_*requested to the db*_");
    }
});
