const express = require("express");
const app = express();
const mongoose = require('mongoose')
const levels = require('./levels')

app.listen(3000, () => {
  console.log("Zero ready");
})

app.get("/", (req,res) => {
  res.send("Uwwwwwwwooooooogggggghhhhhhh SEEEEEEEGGGGGGGSSSSSS");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MEMBERS","GUILD_VOICE_STATES"]});
client.options.http.api = "https://discord.com/api/"
const fs = require("fs");
const PREFIX = '-';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Command').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
  const command = require(`./Command/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", async () => {
  console.log("Yohohoi");
  client.user.setActivity("mẹ bạn");
  
  levels(client)
});

client.on("guildMemberAdd", (member) => {
  console.log(member)
  const channelID = "960866147400581150";
  const channel = member.guild.channels.cache.get(channelID)
  const m1 = new Discord.MessageEmbed()
  .setAuthor('Chào mừng', "https://media.discordapp.net/attachments/987732546567671858/988045646076477492/unknown.png")
  .addFields(
    { name: '​',
     value: `Chào mừng <@${member.id}> đến với server, hãy đọc luật tại <#958523340417564682> và lấy role tại <#981841856746901514>, mọi thắc mắc hãy tag Mod lên`},
    {
    name: 'By the way',
    value: `Nếu bạn có hứng thú thì hãy vào group bọn tôi tại [đây](https://www.facebook.com/groups/botochorny)`}
  )

  channel.send({embeds: [m1]});
});

client.on("messageCreate", message =>{
  if(!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))
  if (!command) return;
  if(command) command.execute(message, args)
})

client.on("messageCreate", message =>{

  if(message.content === `<@!951336344465051679>`) {
    message.channel.send("Yohohoi")
  }
//  if(message.author.id === '963444435880914974') {
//    message.delete()
//  }
  if(message.content === "`1") {
    message.channel.send("Kmm ai hỏi")
  }
  if(message.content === "`tagme") {
    message.reply(`${message.author}`)
  }
  if(message.content === "`2") {
    message.channel.send("Gke vs")
  }
  if(message.content === "`3") {
    message.channel.send("Là tôi, tôi hỏi")
  }
  if(message.content === "`4") {
    message.channel.send("Đéo ai quan tâm")
  }
  if(message.content === '`segs') {
    message.channel.send('https://media.discordapp.net/attachments/978913879495180318/986981429948854322/IMG_1648045381935_1648161686681.jpg')
  }
  if(message.content === '`SEIYA') {
    message.channel.send('https://cdn.discordapp.com/attachments/957337067547918356/960384786948579328/tumblr_mm2a46gzhm1s9o2o3o2_400.gif')
  }
  if(message.content === 'Quê <:Ehh:962696643373842482>'){
    message.channel.send('Quê vãi lồn <:Ehh:962696643373842482>')
  }
})

client.login(process.env.TOKEN);

mongoose.connect(process.env.SRV, {
  useNewUrlParser : true,
  useUnifiedTopology: true,
}).then(() => [
  console.log('United with MongoDB')
]);