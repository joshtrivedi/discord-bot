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
    } else if (command === 'help') {
        let noOfCommands = "Available commands: \n"
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`)
            noOfCommands += (prefix + command.name, " : ", command.description+"\n")
        }
        msg.channel.send(noOfCommands) 
    } else if (command === 'purge') {
        bot.commands.get('purge').execute(msg, args)
    }
})


bot.login(process.env.CONFIG_TOKEN);