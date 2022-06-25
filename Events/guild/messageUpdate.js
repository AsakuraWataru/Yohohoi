module.exports = (Discord, client, oldMsg, newMsg) => {
  const logChannelId = '989439573702639676'
  const logChannel = client.channels.cache.get(logChannelId);

  if (!oldMsg) { return };

  const log = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setAuthor(`${newMsg.member.user.tag}`)
    .setDescription(`**Message edited in ${newMsg.channel}**`)
    .addFields(
      {
        name: 'Before',
        value: `${oldMsg}`
      },
      {
        name: 'After',
        value: `${newMsg}`
      }
    )
    .setTimestamp()
  
  logChannel.send({embeds: [log]})

}