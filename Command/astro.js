const axios = require('axios')

module.exports = {
  name: 'astro',
  description: 'Get the Nasa picture of the day',
  execute(client, message, args, Discord){
    axios.get('https://api.nasa.gov/planetary/apod?api_key=BuhecRqCp7hSpmHJTQVbu1bh8BypbXLlP9rxIxCG')
    .then( function(res){
      const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Astronomy picture of the day :ringed_planet:')
        .addFields(
          {
            name: 'Author: ',
            value: res.data.copyright || 'None'
          },
          {
            name: 'Title: ',
            value: res.data.title
          }
        )
        .setImage(res.data.hdurl)
        .setTimestamp()
        .setFooter('Copyright belong to NASA.GOV')
      message.channel.send({embeds: [embed]})
    })
  },
}