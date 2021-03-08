const Discord = require('discord.js');
const {
    moderator_role,
    testing_channel,
    prefix
} = require('./config.json')
const dotenv = require('dotenv')
dotenv.config()
const {
    EventEmitter
} = require('events');
const {
    userInfo
} = require('os');
const fs = require('fs')
const bot = new Discord.Client();


bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log('This bot is working');
})

bot.on('message', async (msg) => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return

    const args = msg.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (command === 'ping') {
        bot.commands.get('ping').execute(msg)
    } else if (command === 'help' || command === 'commands') {
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
        if(args[0] === 'filter') {
            switch(args[1]){
                case 'name':
                    msg.channel.send('Do !commands and you will find the name of all commands')
                    break;
                case 'access':
                    let filtered_everyone = '**Commands accessible to everyone:** \n'
                    let filtered_mods = '**Commands accessible to mods:** \n'
                    //const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
                    for (const file of commandFiles) {
                        const command = require(`./commands/${file}`)
                        if(command.access === 'everyone'){
                            filtered_everyone += ("`"+command.name+" `: "+command.description+"\n")
                        } else if (command.access === 'moderators'){
                            filtered_mods += ("`"+command.name+" `: "+command.description+"\n")
                        }
                        //noOfCommands += (command.name+" : "+command.description+" : ` access : "+command.access+"`\n")
                    }
                    msg.channel.send(filtered_everyone)
                    msg.channel.send(filtered_mods)
                    break;
                default:
                    msg.channel.send('wrong arguments, please enter either `!commands filter name` or `!commands filter access`')
                    break;
            }
            return
        }
        let noOfCommands = "Available commands: \n"
        //const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`)
            noOfCommands += (command.name+" : "+command.description+" : ` access : "+command.access+"`\n")
        }
        msg.channel.send(noOfCommands) 
    } else if (command === 'purge') {
        bot.commands.get('purge').execute(msg, args)
    } else if (command === 'mute') {
        bot.commands.get('mute').execute(msg, args)
    } else if (command === 'ban') {
        bot.commands.get('ban').execute(msg, args)
    } else if (command === 'timeout') {
        bot.commands.get('timeout').execute(msg,args)
    } else if (command === 'compliment') {
        bot.commands.get('compliment').execute(msg, args)
    } else if (command === 'mv' || command === 'motivation') {
        bot.commands.get('motivation').execute(msg, args)
    }
})
 


bot.login(process.env.CONFIG_TOKEN);