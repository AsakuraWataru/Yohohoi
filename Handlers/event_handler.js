const fs = require('fs');

module.exports = (client, Discord) => {
  const load_dirs = (dirs) => {
    const event_file = fs.readdirSync(`./Events/${dirs}`).filter(file => file.endWith('.js'))

  }
}