const discord = require('discord.js');
const {
    moderator_role
} = require('../config.json')

function emojiReg(args){
    const str = /<:.*?:(\d+)>/.exec(args) ?? ""
    
    return str=="" ? null : ("https://cdn.discordapp.com/emojis/"+str[1]+".png?size=48");
    
}

function gifReg(args) {
    const str = /<a:.*?:(\d+)>/.exec(args) ?? "" 
    return str=="" ? null : ("https://cdn.discordapp.com/emojis/"+str[1]+".gif?size=48");
}

function getEmojiName(args) {
    //TODO
}

function checkEmoji(args) {
    reg = /<.*>$/
    return reg.test(args)
}

module.exports = {
    name: "addemoji",
    description: "Add emoji to server guild",
    access: "moderators",
    async execute (msg,args){
        
        if (!msg.member.roles.cache.find(((m) => moderator_role.find(f=>f.includes(m.name.toLowerCase()))))){
            return msg.channel.send("You cannot use that command peasant you are not a mod lmao")
        }
        if (!args.length) {return msg.channel.send("Bruh specify an emoji tf am i supposed to add"); }

        if (args.length == 2) {return msg.channel.send("Bruh one emoji at a time tf")}

        if (!checkEmoji(args)){
            return msg.channel.send("Bruh this isnt a valid emoji")
        }

        await msg.member.guild.emojis.create((!!emojiReg(args) ? emojiReg(args) : gifReg(args)), "testemoji")
        .then (emoji => console.log(`Created emoji with name ${emoji.name}`))
        .catch(console.error);
        
    }
}