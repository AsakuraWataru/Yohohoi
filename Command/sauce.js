const {SauceNao} = require('saucenao.js')

const sauce = new SauceNao({api_key: 'fccbbccd58cd0ec54afbef016380c7c7f770a20c'})

module.exports = {
  name:'sauce',
  description:'Find Sauce for U',
  execute(client, message, args, Discord) {
    const img = message.attachments.first()
    sauce.find(img.proxyURL)
    .then((res)=>{
      if(res.results[0].header.similarity<50) return message.channel.send("Can't find sauce lol <a:aa:980437627905904660>");
      console.log(res.results[0].data)
      const res_data = res.results[0].data
      const author = res_data.artist||res_data.author||res_data.member_name||res_data.author_name||res_data.creator||res_data.user_name||'None'
      const author_id = res_data.md_id||res_data.mu_id||res_data.mal_id||res_data.pixiv_id||res_data.member_id||res_data.fa_id||res_data.da_id||res_data.anidb_aid||res_data.anilist_id||res_data.seiga_id||res_data.bcy_id||res_data.danbooru_id||res_data.ddb_id||res_data.drawr_id||res_data.e621_id||res_data.gelbooru_id||res_data.idol_id||res_data.imdb_id||res_data.konachan_id||res_data.member_link_id||res_data.nijie_id||res_data.pawoo_id||res_data.pg_id||res_data.sankaku_id||res_data.yandere_id||res_data.user_id||res_data.id||'None'
      const sauce = res_data.source||res_data.title||res_data.characters||'None'
      const em = new Discord.MessageEmbed()
        .setAuthor('Sauce Found')
        .addFields(
          {
            name: 'Author:',
            value: `${author}`
          },
          {
            name:'ID:',
            value:`${author_id}`
          },
          {
            name: 'Link: ',
            value:`${res_data.ext_urls}`
          },
          {
            name: 'Name: ',
            value: `${sauce}`
          }
        )
        .setImage(res.results[0].header.thumbnail)
      
      message.channel.send({embeds: [em]})
    })
    .catch((err)=>{
      console.log(err)
    })
  },
}