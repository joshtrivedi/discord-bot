module.exports = {
    name: 'ping',
    description: 'returns a pong message',
    async execute(msg) {
        msg.channel.send('pong!')
    }
}