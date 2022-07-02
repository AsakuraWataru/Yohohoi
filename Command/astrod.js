const axios = require('axios')

module.exports = {
  name: 'astrod',
  description: 'Get the Nasa picture of the day',
  execute(client, message, args, Discord){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=BuhecRqCp7hSpmHJTQVbu1bh8BypbXLlP9rxIxCG&date=${args}`)
    .then( function(res){
      const embeds = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Astronomy picture ${args} :ringed_planet:`)
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
      message.channel.send({embeds: [embeds]})
    })
    .catch(function(err){
      console.log(err)
    })
  },
}