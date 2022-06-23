module.exports = (Discord, client, message) => {
  const logChannelId = '989439573702639676'
  const logChannel = client.channels.cache.get(logChannelId);
  const name = message.member.nickname ||  message.member.user.username
  if (message.author.bot) {
    return;
  } else {
    logChannel.send(`${name}: ${message.content} ***Deleted at ${message.channel}***`)
  }
}