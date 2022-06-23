module.exports = {
  name: 'ping',
  description: 'Check độ trễ',
  execute(client, message, args){
    message.channel.send(`Độ trễ là ${Date.now() - message.createdTimestamp}ms`)
  },
}