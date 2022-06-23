const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'example',
  description: 'YOHOHOHOI, chỉ test thôi',
  execute(client, message, args) {
    message.channel.send('Working Fine')
    const eee = new MessageEmbed()
      .setAuthor('SUS', 'https://media.discordapp.net/attachments/987732546567671858/988043644445552660/unknown.png?width=442&height=442')
    message.channel.send( {embeds: [eee]})
  },
};