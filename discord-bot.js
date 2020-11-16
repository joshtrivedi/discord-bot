const Discord = require('discord.js');
const { EventEmitter } = require('events');
const { userInfo } = require('os');
const bot = new Discord.Client();
const prefix = '$';
const token = 'NzYxNjQwOTgxNzgyNTkzNTc2.X3djcA.oov2W7PaqGqHF9KBjXx3I9_gFpc';
const josh_id = '675120965314805760';
const shawk_id = '456768469262794765';
const adi_id = '616898988066734080';
const sania_id = '627864176433430548';
const pras_id = '274284574555766786';
const sabah_id = '694732908442681365';
const gulsah_id = '403696792715395085';
const kaisa_id = '696652260830085180';
const ivana_id = '732920644320231434';
EventEmitter; 

bot.on('ready', () =>{
    console.log('This bot is working');
})

bot.on('message' , msg=>{
    if(msg.content.toLowerCase() === "simp"){
        msg.react('776223420975284274');
        msg.channel.send('<:nou:776223420975284274>');
    }
    if(msg.content.toLowerCase() === "nice"){
        msg.channel.send("69420? where? when?");
    }
    if(msg.content.toLowerCase() === "stupidass bot"){
        msg.react('776223420975284274');
        msg.channel.send('<:nou:776223420975284274>');
        
    }
    if(msg.content.toLowerCase() === "test"){
        msg.channel.
        msg.channel.send('<:UnoReverse:733343356456796240>');
    }
})
bot.on('message' , msg=>{
    switch(msg.content.toLowerCase()){
        case "sup":
            msg.reply('sup homie');
        break;
        case "cutie":
            msg.reply('no u');
            msg.react('776459319994351647');
        case "hello" :
            msg.reply('Hello, kind person, how are you doing today');
        break;
        case "im ok":
            msg.reply("lemme give u a hug, you'll be better than ok");
        break;
        case "im good":
            msg.reply("hi good/great, im glad, have a nice day");
        break;
        case "im fine":
            msg.reply("awh, okay i believe u");
        break;
        case "im not ok":
            msg.reply("HEY! Keep your chin up, or the crown slips. Make sure to keep smiling, you look phat cute");
        break;
        case "ugly":
            msg.reply('no josh is');
        break;
        case "hi":
            if(msg.author.id === adi_id) msg.reply('what');
        break;
        case "hey":
            if(msg.author.id === josh_id){
                msg.reply('Hi King');
            }else{
                msg.reply('what');
            }
        break;
    }
})
/*bot.on('message' , msg=>{
    var inp = msg.content.toLowerCase();
    if(inp === `${prefix}purge`){
    }
})*/
bot.on('message' , msg=>{
    if(msg.content.toLowerCase() === ''){
        msg.react('776222032383311933');
    }
})
bot.on('message' , msg=>{
    if(msg.content.toLowerCase() === 'hi'){
        if(msg.author.id === ivana_id){
            msg.reply('hi queen ivy');
        }else{
            msg.reply('hi cutie');
        }
    }
})
bot.on('message' , msg=>{
    if(msg.content.toLowerCase() === "cute" && msg.author.id === sania_id){
        msg.reply('not u, definitely not u');
    }else if(msg.content.toLowerCase() === "cute"){
        msg.reply('no, u');
    }
})
bot.on('message' , msg=>{
    if(msg.content.toLowerCase() === "hot"){
        if(msg.author.id === sabah_id){
            msg.reply('hi, sabah-hottie, wink wink');
        }else{
            msg.reply('u not sabah, gtfo');
        }
    }
})
bot.on('message' , msg=>{
    if(msg.content.toLowerCase() === "ew"){
        if(msg.author.id === josh_id){
            msg.reply('stfu king');
        }else if(msg.author.id === shawk_id){
            msg.reply('what did u think i would simp for you? lol gtfo');
        }else if(msg.author.id === sania_id){
            msg.reply('sania. did u look into a mirror?');
        }else if(msg.author.id === gulsah_id){
            msg.reply('no gg, u queen');
        }else if(msg.author.id === pras_id){
            msg.reply("yeah well, we can't do anything about your hair now can we?");
        }else if(msg.author.id === sabah_id){
            msg.reply("no, u hottie");
        }
    }
})
bot.on('message' , msg=>{
    if(msg.content.toLowerCase() === "u suck"){
        msg.reply('u swallow');
    }
})
bot.on('message' , msg=>{
    if(msg.content.toLowerCase() === ""){
        if(msg.channel.id === "774275138257420329"){
            if((msg.author.id === shawk_id) || (msg.author.id === sabah_id) || (msg.author.id === '729784115422953594')){
                msg.reply('damn baby, looking underage...still fine tho, 10/10 would go to jail');
                msg.react('776459319994351647');
            }else{
                msg.channel.send('damn, looking fine');
            }
        }
    }
})
bot.on('message' , msg=>{
    if(msg.content.toLowerCase() === `${prefix}user-info`){
        msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
    }
})
bot.login(token); 