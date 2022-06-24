module.exports = (Discord, client, message) => {
  const logChannelId = '989439573702639676'
  const logChannel = client.channels.cache.get(logChannelId);
  const name = message.member.nickname ||  message.member.user.username

  const log = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor(`${message.member.user.tag}`)
    .setDescription(`**Message send by ${message.author} deleted in ${message.channel}** \r\n ${message.content}`)
    .setTimestamp()
  
  logChannel.send({embeds: [log]})
  if (message.author.bot) {
    return;
  } else {

    const att = (message.attachments.first())
    if(!att){
      return;
    }else{
      const logImage = new Discord.MessageEmbed()
      .setColor('RED')
      .setAuthor(`${message.member.user.tag}`)
      .setDescription(`**Image send by ${message.author} deleted in ${message.channel}**`)
      .setTimestamp()
      .setImage(att.url)
    logChannel.send({embeds: [logImage]})

    }
  }

  
}