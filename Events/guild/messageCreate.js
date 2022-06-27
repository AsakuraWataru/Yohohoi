const profileSchema = require('../../Schema/profile_schema')

module.exports = async (Discord, client, message, userId ) => {
  
  
  const PREFIX = '-';

  if(!message.content.startsWith(PREFIX) || message.author.bot) return;

  

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))
  if (!command) return;
  
  const user = message.mentions.members.first() || message.author
  const tagged = message.guild.members.cache.get(user.id)
  const profile = await profileSchema.findOne({
    userId: tagged.id
  })
  if(command) command.execute(client, message, args, Discord, profile)
}