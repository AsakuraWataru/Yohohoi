module.exports = {
  name: "info",
  aliases:['whois','who'],
  description: 'Moi thông tin ai đó :>',
  execute(client, message, args, Discord, profile){
    if(!message.member.permissions.has('MANAGE_CHANNELS')) return;
    const { guild, channel } = message
    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)
    const memRole = member.roles.cache
    .filter((role) => role.id != message.guild.id)
    .map((role) => role.toString())
    
    const embed = new Discord.MessageEmbed()
      .setAuthor(`Thông tin về ${user.username}`, user.displayAvatarURL())
      .setDescription(`${message.author}`)
      .setThumbnail(`${user.displayAvatarURL()}`)
      .addFields(
        {
          name: 'Joined At',
          value: `${new Date(member.joinedTimestamp).toLocaleString('en-US', {timeZone: 'Asia/Ho_Chi_Minh', weekday: 'long', month: 'short', day: 'numeric', year:'numeric', hour:'numeric', minute:'numeric'})}`,
          inline: true
        },
        
        {
          name: 'Created Account At',
          value: `${new Date(user.createdTimestamp).toLocaleString('en-US', {timeZone: 'Asia/Ho_Chi_Minh', weekday: 'long', month: 'short', day: 'numeric', year:'numeric', hour:'numeric', minute:'numeric'})}`,
          inline: true
        },
        {
          name: 'Tag',
          value: user.tag,
        },
        
        {
          name: 'Level',
          value: `${profile.level}`
        },
        {
          name:'Role',
          value: `${memRole}`
        }

      )
      .setFooter(`User Id:${message.author.id}`)

    channel.send({embeds: [embed]})
  },
}