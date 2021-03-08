"use strict";

var _require = require('discord.js'),
    MessageAttachment = _require.MessageAttachment;

var moderator_roles = require('../config.json');

module.exports = {
  name: "purge",
  description: "Delete certain number of commands",
  execute: function execute(msg, args) {
    return regeneratorRuntime.async(function execute$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //TODO FIX
            console.log(args);

            if (args[0] = "test") {
              //(msg.member.roles.cache.find((m) => m.name.toLowerCase() === moderator_role))) {
              console.log(moderator_roles);
              /*var num = args
              if (isNaN(num)) msg.reply("the argument that you entered after the command isn't a number");
              else {
                  msg.channel.bulkDelete(num, true).catch(err => {
                      console.error(err);
                      msg.channel.send('there was a problem pruning messages from this channel');
                  })
              }*/
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};