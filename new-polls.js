const emojis = require('./emojis.json')
const {
    polls_channel,
    testing_channel
} = require('./config.json')


function isEmojifromJSON(args) {
    const matched = 
    emojis.find(element => element.char === args)
    if(matched) return true
    else return false
}

function isEmojiUnicode(args) {
    const matched =
    emojis.find(element => element.char === args)
    if(matched) return args
    else return false
}

module.exports = (bot) => {
    bot.on('message',msg => {
        const {
            channel, author, content
        } = msg
        
        if(!testing_channel.includes(channel.id)) {
            return
        }
    })
}
