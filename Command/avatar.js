module.exports = {
  name: 'avatar',
  aliases: ['avt'],
  description: 'Hiển thị avatar của thành viên',
  execute(client, message, args, Discord){
    const { guild } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)
    
    const avt = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`)
    .setDescription(` [Avatar gốc](${user.avatarURL({size: 4096})}) [Avatar Server](${member.displayAvatarURL({dynamic: true, size: 4096})})`)
    .setImage(`${member.displayAvatarURL({dynamic: true, size: 4096})}`)
    
    message.channel.send({embeds: [avt]})
  },
}