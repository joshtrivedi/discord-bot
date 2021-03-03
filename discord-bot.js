const Discord = require('discord.js');
const {
    moderator_role,
    testing_channel
} = require('./config.json')
const {
    EventEmitter
} = require('events');
const {
    userInfo
} = require('os');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('This bot is working');
})



bot.login(process.env.CONFIG_TOKEN);