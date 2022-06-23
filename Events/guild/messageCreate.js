const profileSchema = require('../../Schema/profile_schema')

module.exports = async (Discord, client, message, userId ) => {

  const profile = await profileSchema.findOne({
    userId: message.author.id
  })
  
  const PREFIX = '-';

  if(!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))
  if (!command) return;
  if(command) command.execute(client, message, args, Discord, profile)
}