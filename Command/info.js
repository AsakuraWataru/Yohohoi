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
      .addFields(
        {
          name: 'Tag',
          value: user.tag,
        },
        {
          name: 'Biệt danh',
          value: member.nickname || 'Nope',
        },
        {
          name: 'Ngày tham gia server',
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: 'Ngày tạo acc',
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        {
          name: 'Level',
          value: `${profile.level}`
        }

      )

    channel.send({embeds: [embed]})
  },
}