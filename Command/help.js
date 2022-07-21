module.exports = {
  name: 'help',
  description: 'Just use it motherf*cker',
  execute(client, message, args, Discord){
    const commands = client.commands.map(command => command.name).join('\n');
    const commandsDe = client.commands.map(command => command.description).join('\n');
    const em = new Discord.MessageEmbed()
      .setAuthor('Command list')
      .addFields(
        {
          name: 'Commands name: ',
          value: commands,
          inline: true
        },
        {
          name: 'Description: ',
          value: commandsDe,
          inline: true
        }
      )
    message.channel.send({embeds: [em]})
  },
}