module.exports = (Discord, client, member) => {
  console.log(member)
  const channelID = "960866147400581150";
  const channel = member.guild.channels.cache.get(channelID)
  const m1 = new Discord.MessageEmbed()
    .setAuthor('Chào mừng', "https://media.discordapp.net/attachments/987732546567671858/988045646076477492/unknown.png")
    .addFields(
      { 
        name: '​',
        value: `Chào mừng <@${member.id}> đến với server, hãy đọc luật tại <#958523340417564682> và lấy role tại <#981841856746901514>, mọi thắc mắc hãy tag Mod lên`
      },
      {
        name: 'By the way',
        value: `Nếu bạn có hứng thú thì hãy vào group bọn tôi tại [đây](https://www.facebook.com/groups/botochorny)`
      }
    )

  channel.send({embeds: [m1]});
}