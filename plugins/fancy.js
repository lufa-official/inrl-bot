const {
    inrl,
    Fancy,
    Fancylist,
    FancyRandom } = require('../lib');
inrl({
     pattern: 'fancy ?(.*)',
     type: 'utility',
     desc: 'Creates fancy text fonts'
 }, (async (message, match) => {
     if (!match && !message.reply_message.text) return await message.send('Reply to a text or type text after command with a numeric code\n_Example: .fancy 10 Hello_\n                      .fancy Hello world\n                      .fancy <reply> 13\n\n'+String.fromCharCode(8206).repeat(4001)+Fancylist('Text here'));
    const id = match.match(/\d/g)?.join('')
     try {
        if (id === undefined && !message.reply_message.text){
            return await message.send(Fancylist(match));
        }
        return await message.send(Fancy(parseInt(id),message.reply_message.text || match.replace(id,'')))    
    } catch {
        return await message.send('_Failed_')
     }
 }))
