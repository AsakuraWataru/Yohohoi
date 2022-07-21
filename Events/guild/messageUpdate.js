module.exports = (Discord, client, oldMsg, newMsg) => {
  const logChannelId = '989439573702639676'
  const logChannel = client.channels.cache.get(logChannelId);

  if(!oldMsg || newMsg.author.bot) return;
  if(oldMsg === newMsg) return;

  const log = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setAuthor(`${newMsg.member.user.tag}`, `${newMsg.member.displayAvatarURL()}`)
    .setThumbnail(`${newMsg.member.displayAvatarURL({dynamic: true})}`)
    .setDescription(`**Message edited in ${newMsg.channel}**, wanna jump to it? [click here](${newMsg.url})`)
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
    .setFooter(`User Id: ${newMsg.author.id} at Channel Id: ${newMsg.channel.id}`)
    .setTimestamp()
  
  logChannel.send({embeds: [log]})

}