/*module.exports = {
    if (msg.content.substring(0, 1) == '!') {
        if ((msg.member.roles.cache.has(moderator_role)) && (msg.content.substring(1).split(" ")[0] == "purge" )) {
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
})*/