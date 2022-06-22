const fs = require('fs');

module.exports = (client, Discord) => {
  const command_files = fs.readdirSync('./Command').filter(file => file.endWith('.js'))

  for(const file of commandFiles) {
    const command = require(`../Command/${file}`)
    if(command.name){
      client.command.set(command.name, command)
    } else {
      continue;
    }
  }
}