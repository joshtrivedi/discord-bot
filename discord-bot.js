const Discord = require('discord.js');
const { EOF } = require('dns');
const {
    EventEmitter
} = require('events');
const {
    userInfo
} = require('os');
const bot = new Discord.Client();
const prefix = '!';
const josh_id = '675120965314805760';
const shawk_id = '456768469262794765';
const adi_id = '616898988066734080';
const sania_id = '627864176433430548';
const pras_id = '274284574555766786';
const sabah_id = '694732908442681365';
const gulsah_id = '403696792715395085';
const kaisa_id = '696652260830085180';
const ivana_id = '732920644320231434';
const issane_id = '328654454700376075';
const emote_king = '773983765499346944';
const emote_queen = '773983667324321844';
const shagun_id = '381580503943217152';
const quisha_id = '274229654439591936';
EventEmitter;

bot.on('ready', () => {
    console.log('This bot is working');
})
bot.on('message', msg => {
    if (msg.content.substring(0, 1) == '!') {
        if ((msg.member.roles.cache.has(emote_king) || msg.member.roles.cache.has(emote_queen)) && (msg.content.substring(1).split(" ")[0] == "purge" )) {
            var num = msg.content.substring(1).split(" ")[1];
            if (isNaN(num)) msg.reply("the argument that you entered after the command isn't a number");
            else {
                    msg.channel.bulkDelete(num, true).catch(err =>{
                    console.error(err);
                    msg.channel.send('there was a problem pruning messages from this channel');
                })
            }
        }
    }
    if (msg.content.toLowerCase() === "simp") {
        msg.react('776223420975284274');
        msg.channel.send('<:nou:776223420975284274>');
    }
    if (msg.content.toLowerCase() === "nice") {
        msg.channel.send("69420? where? when?");
    }
    if (msg.content.toLowerCase() === "stupidass bot") {
        msg.channel.send('<:nou:776223420975284274>');
    }
    switch (msg.content.toLowerCase()) {
        case "sup":
            msg.reply('sup homie');
            break;
        case "cutie":
            msg.reply('no u');
            msg.react('776459319994351647');
        case "hello":
            msg.reply('Hello, kind person, how are you doing today');
            break;
        case "ugly":
            msg.reply('no josh is');
            break;
        case "hi":
            if (msg.author.id === adi_id) msg.reply('what');
            break;
        case "hey":
            if (msg.author.id === josh_id) {
                msg.reply('Hi King');
            } else {
                msg.reply('what');
            }
            if (msg.author.id === ivana_id) {
                msg.reply('hi queen ivy');
            }
            break;
        case "u suck":
            msg.reply('u swallow');
        break;
    }
    if (msg.content.toLowerCase() === 'hi') {
        if (msg.author.id === ivana_id) {
            msg.reply('hi queen ivy');
        } else {
            msg.reply('hi cutie');
        }
    }
    if (msg.content.toLowerCase() === "cute" && msg.author.id === sania_id) {
        msg.reply('yes u too Sania');
    } else if (msg.content.toLowerCase() === "cute") {
        msg.reply('no, u');
    }
    if (msg.content.toLowerCase() === "hot") {
        if (msg.author.id === sabah_id) {
            msg.reply('hi, sabah-hottie, wink wink');
        } else {
            msg.reply('u not sabah, gtfo');
        }
    }
    /*if (msg.content.toLowerCase().substring(0,14) === "happy birthday" ){
        var index = msg.content.toLowerCase().indexOf("<@!");
        var index_l = msg.content.toLowerCase().indexOf(">") + 1;
        var tag = msg.content.toLowerCase().substring(index,index_l);
        msg.channel.send('THANK YOU, from - '+tag);
    }*/    
    if (msg.content.toLowerCase() === "ew") {
        if (msg.author.id === josh_id) {
            msg.reply('stfu king');
        } else if (msg.author.id === shawk_id) {
            msg.reply('what did u think i would simp for you? lol gtfo');
        } else if (msg.author.id === sania_id) {
            msg.reply('no sania, your ex was ew, you a queen');
        } else if (msg.author.id === gulsah_id) {
            msg.reply('no gg, u queen');
        } else if (msg.author.id === pras_id) {
            msg.reply("yeah well, we can't do anything about your hair now can we?");
        } else if (msg.author.id === sabah_id) {
            msg.reply("no, u hottie");
        } else if (msg.author.id === shagun_id) {
            msg.reply("fuck u want shagun, go text your hoes");
        } else if (msg.author.id === quisha_id) {
            msg.reply("MS QUISHA, MS QUISHA");
        }
    }
    if (msg.content.toLowerCase() === "omfg"){
        msg.channel.send("omfg she fucking dead");
    }
    if (msg.content.toLowerCase() === "") {
        if (msg.channel.id === "774275138257420329") {
            if ((msg.author.id === shawk_id) || (msg.author.id === sabah_id) || (msg.author.id === '729784115422953594')) {
                msg.reply('damn baby, looking underage...still fine tho, 10/10 would go to jail');
                msg.react('776459319994351647');
            } else if (msg.author.id === gulsah_id) {
                msg.channel.send('damn g, looking turkish amq');
            } else if (msg.author.id === pras_id || msg.author.id === adi_id) {
                msg.channel.send('ew, legit ew bro tf');
            } else if (msg.author.id === issane_id) {
                msg.channel.send('vroom, vroom, beep, boop');
            }
        }
    }
    if(msg.content.toLowerCase().includes("happy birthday")){
        var index = msg.content.toLowerCase().indexOf("<@!");
        var index_l = msg.content.toLowerCase().indexOf(">") + 1;
        var tag = msg.content.toLowerCase().substring(index,index_l);
        if(msg.content.toLowerCase().includes(tag)){
            msg.channel.send("Thank you, from - "+tag);
        }else{
            console.log('ew trash');
        }
    }
    if(msg.content.toLowerCase() === "what"){
        msg.channel.send('you hot');
    }
})


bot.login('NzYxNjQwOTgxNzgyNTkzNTc2.X3djcA.c-ZM_fYcbkF9yKNW09Auw99Ke2I');