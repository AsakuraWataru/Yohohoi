module.exports ={
  name:'say',
  description:'JUST SAY',
  execute(message, args){
    let text = args.join(' ');
		message.delete();
		message.channel.send(text);
  },
}