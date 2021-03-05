"use strict";

var Discord = require('discord.js');

var _require = require('./config.json'),
    moderator_role = _require.moderator_role,
    testing_channel = _require.testing_channel,
    prefix = _require.prefix;

var dotenv = require('dotenv');

dotenv.config();

var _require2 = require('events'),
    EventEmitter = _require2.EventEmitter;

var _require3 = require('os'),
    userInfo = _require3.userInfo;

var fs = require('fs');

var bot = new Discord.Client();
bot.commands = new Discord.Collection();
var commandFiles = fs.readdirSync('./commands/').filter(function (file) {
  return file.endsWith('.js');
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = commandFiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var file = _step.value;

    var command = require("./commands/".concat(file));

    bot.commands.set(command.name, command);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

bot.on('ready', function () {
  console.log('This bot is working');
});
bot.on('message', function _callee(msg) {
  var args, command, noOfCommands, _commandFiles, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, file, _command;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(!msg.content.startsWith(prefix) || msg.author.bot)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          args = msg.content.slice(prefix.length).split(/ +/);
          command = args.shift().toLowerCase();

          if (!(command === 'ping')) {
            _context.next = 8;
            break;
          }

          bot.commands.get('ping').execute(msg);
          _context.next = 34;
          break;

        case 8:
          if (!(command === 'help')) {
            _context.next = 33;
            break;
          }

          noOfCommands = "Available commands: \n";
          _commandFiles = fs.readdirSync('./commands/').filter(function (file) {
            return file.endsWith('.js');
          });
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context.prev = 14;

          for (_iterator2 = _commandFiles[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            file = _step2.value;
            _command = require("./commands/".concat(file));
            noOfCommands += _command.name + " : " + _command.description + " : ` access : " + _command.access + "`\n";
          }

          _context.next = 22;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](14);
          _didIteratorError2 = true;
          _iteratorError2 = _context.t0;

        case 22:
          _context.prev = 22;
          _context.prev = 23;

          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }

        case 25:
          _context.prev = 25;

          if (!_didIteratorError2) {
            _context.next = 28;
            break;
          }

          throw _iteratorError2;

        case 28:
          return _context.finish(25);

        case 29:
          return _context.finish(22);

        case 30:
          msg.channel.send(noOfCommands);
          _context.next = 34;
          break;

        case 33:
          if (command === 'purge') {
            bot.commands.get('purge').execute(msg, args);
          }

        case 34:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[14, 18, 22, 30], [23,, 25, 29]]);
});
bot.login(process.env.CONFIG_TOKEN);