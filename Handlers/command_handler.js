const fs = require('fs');

module.exports = (client, Discord) => {
  const command_files = fs.readdirSync('./Command').filter(file => file.endsWith('.js'))

  for(const file of command_files) {
    console.log(`Loaded ${file}`)
    const command = require(`../Command/${file}`)
    
    if(command.name){
      client.commands.set(command.name, command)
      
    } else {
      continue;
    }
  }
  console.log('Commands all green')
}