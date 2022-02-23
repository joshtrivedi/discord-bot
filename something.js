const {polls_channel} = require('./config.json')
const Discord = require('discord.js')

function emojiReg(args){
    return /<:.*?:(\d+)>/.exec(args)[1];
}

function gifReg(args) {
    return /<a:.*?:(\d+)>/.exec(args)[1];
}

linkPrefix = "https://cdn.discordapp.com/emojis/"
linkPostfix = "?size=48"


module.exports = (bot) => {
    bot.on('message', msg => {
        const {
            channel, author, content
        } = msg
        if(!bot.author){
        const eachLine = content.split('\n');
        for (const line of eachLine) {
            if(line.startsWith('<:')){
                newlinkPostfix = ".png"+linkPostfix
                msg.channel.send( linkPrefix+emojiReg(line)+newlinkPostfix)
                newlinkPostfix = linkPostfix
            }
            if(line.startsWith('<a:')){
                newlinkPostfix = ".gif"+linkPostfix
                msg.channel.send( linkPrefix+gifReg(line)+newlinkPostfix )
                newlinkPostfix = linkPostfix
            }
        }
    }
    })
}
