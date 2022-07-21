module.exports = (Discord, client, message) => {
  const logChannelId = '989439573702639676'
  const logChannel = client.channels.cache.get(logChannelId);
  if(message.author.bot) return;

  const log = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor(`${message.member.user.tag}`, `${message.member.displayAvatarURL()}`)
    .setThumbnail(`${message.member.displayAvatarURL({dynamic: true})}`)
    .setDescription(`**Message send by ${message.author} deleted in ${message.channel}** \r\n ${message.content}`)
    .setFooter(`User Id: ${message.author.id} at Channel Id: ${message.channel.id}`)
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
      .setImage(`${att.url}`)
    logChannel.send({embeds: [logImage]})

    }
  }

  
}