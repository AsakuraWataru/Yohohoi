module.exports = {
  name: 'countdown',
  description: "Like it's name lol",
  execute(client, message, args, Discord){
    let time
    if(args[1] === 'second'){
      time = parseInt(args[0]) * 1000
    }else if(args[1] === 'minute'){
      time = parseInt(args[0]) * 1000 * 60
    }else if(args[1] === 'hour'){
      time = parseInt(args[0]) * 1000 * 60 * 60
    }

    console.log(`${time}`)
    console.log(args[0])
    
    const aa = () => {
      message.channel.send(`${message.author} hoàn tất đếm ngược`)
    }
    setTimeout(aa, time)
       
  },
}