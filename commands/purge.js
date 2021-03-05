const moderator_role = require('../config.json')

module.exports = {
    name: "purge",
    description: "Delete certain number of commands",
    async execute(msg, args) {
        if (msg.content.substring(0, 1) == '!') {
            if ((msg.member.roles.cache.find(m => m.name.toLowerCase() === moderator_role))) {
                var num = args
                if (isNaN(num)) msg.reply("the argument that you entered after the command isn't a number");
                else {
                    msg.channel.bulkDelete(num, true).catch(err => {
                        console.error(err);
                        msg.channel.send('there was a problem pruning messages from this channel');
                    })
                }
            } else {
                msg.channel.send('only moderators can use that')
            }
        }
    }
}