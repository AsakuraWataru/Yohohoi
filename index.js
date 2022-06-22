const express = require("express");
const app = express();
const mongoose = require('mongoose')
const levels = require('./levels')
const mongo = require('./mongo')
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
client.envent = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./Handlers/${handler}`)(client, Discord)
})


client.login(process.env.TOKEN);

mongoose.connect(process.env.SRV, {
  useNewUrlParser : true,
  useUnifiedTopology: true,
}).then(() => [
  console.log('United with MongoDB')
]);