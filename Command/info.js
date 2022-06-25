module.exports = {
  name: "info",
  aliases:['whois','who'],
  description: 'Moi thông tin ai đó :>',
  execute(client, message, args, Discord, profile){
    if(!message.member.permissions.has('MANAGE_CHANNELS')) return;
    const { guild, channel } = message
    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)
    
    const embed = new Discord.MessageEmbed()
      .setAuthor(`Thông tin về ${user.username}`, user.displayAvatarURL())
      .setDescription(`${message.author}`)
      .setThumbnail(`${user.displayAvatarURL()}`)
      .addFields(
        {
          name: 'Joined',
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
          inline: true
        },
        
        {
          name: 'Registered',
          value: new Date(user.createdTimestamp).toLocaleDateString(),
          inline: true
        },
        {
          name: 'Tag',
          value: user.tag,
        },
        
        {
          name: 'Level',
          value: `${profile.level}`
        }

      )

    channel.send({embeds: [embed]})
  },
}