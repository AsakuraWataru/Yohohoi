const levels = require('../../levels')
const schedule = require('node-schedule')

module.exports = async (Discord,client) => {
  console.log('Yohohoi')
  client.user.setActivity('mẹ bạn')
  levels(client)
  const channel = client.channels.cache.get('960866147400581150')
  const message = new Discord.MessageEmbed()
    .setAuthor('Chào ngày mới')
    .setDescription('Chúc mọi người ngày mới tốt lành')

  const j = schedule.scheduleJob({second: 0,minute: 0,hour: 0, tz: 'Asia/Ho_Chi_Minh'}, function(){
    channel.send({embeds: [message]})
  })
  
}