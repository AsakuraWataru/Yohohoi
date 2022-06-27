const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'example',
  description: 'YOHOHOHOI, chỉ test thôi',
  execute(client, message, args) {
    message.channel.send('<https://cdn.discordapp.com/attachments/978913879495180318/990596747694862397/273636758_147049674368151_7919381603775472357_n.mp4>')
    const dd = new Date()
    dd.setHours(0,0,0,0)
  },
};