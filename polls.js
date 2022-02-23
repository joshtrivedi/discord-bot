const Discord = require('discord.js');
const emojis = require('./emojis.json')
const regionals = require('./reg-indicator.json')
const {
    polls_channel
} = require('./config.json'); 
const something = require('./something');

function checkEmoji(args) {
    reg = /<.*>$/
    return reg.test(args)
}

function isEmojiAlphabet(args) {
    const matched = 
    regionals.find(e=>e.char === args)
    if(matched) return args
    else return false
}

function isEmojiUnicode(args) {
    const matched =
    emojis.find(element => element.char === args)
    if(matched) return args
    else return false
}

module.exports = (bot) => {
    bot.on('message', async msg => {
        const {
            channel, author, content
        } = msg
        
        if(!polls_channel.includes(msg.channel.id)) {
            return
        }
        if(msg.author.bot) return
        const eachLine = content.split('\n');
        console.log(eachLine)
        for (const line of eachLine) {
            const split = line.split(' ')
            var emoji = split[0].trim()
            if(!isEmojiUnicode(emoji) && !isEmojiAlphabet(emoji) && !checkEmoji(emoji)) break
            if(isEmojiUnicode(emoji)){
                msg.react(isEmojiUnicode(emoji))
            }
            if(isEmojiAlphabet(emoji)){
                msg.react(isEmojiAlphabet(emoji))
            }
            if(checkEmoji(emoji)){
                
                // const emojiname = `poll-emoji`
                // await bot.commands.get('addemoji').execute(msg, [emoji, emojiname])
                // await msg.react(msg.member.guild.emojis.cache.find(f=>f.name===emojiname))
                // .then(emoji => console.log(`Reaction successfully added : ${emoji.name}`))
                // .catch(console.error);
            }
        }
    })
}
