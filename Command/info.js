const { MessageEmbed } = require('discord.js');
const mongo = require('../mongo')
const profileSchema = require('../Schema/profile_schema.js')

module.exports = {
  name: "info",
  aliases:['whois','who'],
  description: 'Moi thông tin ai đó :>',
  async execute(message, args){
    const { guild, channel } = message
    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)
    
    const { level } = result

    const embed = new MessageEmbed()
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

      )

    channel.send({embeds: [embed]})
  },
}