module.exports = {
  name: 'ping',
  description: 'Check độ trễ',
  execute(message, args){
    message.channel.send(`Độ trễ là ${Date.now() - message.createdTimestamp}ms`)
  },
}