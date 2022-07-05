module.exports = (Discord, client, member) => {
  console.log(member)
  const memRole = member.roles
  const channelID = "960866147400581150";
  const channel = member.guild.channels.cache.get(channelID)
  const logChannel = member.guild.channels.cache.get('989439573702639676')

  const embeds = new Discord.MessageEmbed()
    .setAuthor('Member left')
    .setDescription(`${member}, ${member.user.tag}`)
    .setFooter(`User id: ${member.user.id}`)
    .setTimestamp()
  
  channel.send(`${member.user.username} đã rời server`)

  logChannel.send({embeds: [embeds]})
}