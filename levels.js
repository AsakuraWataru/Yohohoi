const mongo = require('./mongo');
const profileSchema = require('./Schema/profile_schema.js')

module.exports = (client) => {
  client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    const guild = message.guild;
    const member = message.member;
    addXP(guild.id, member.id, 23, message)
  })
}

const getNeededXP = level => level * level * 100

const addXP = async (guildId, userId, xpToAdd, message) => {
  await mongo().then(async mongoose => {
    try {
      const result = await profileSchema.findOneAndUpdate({
        guildId,
        userId
      },{
        guildId,
        userId,
        $inc: {
          xp: xpToAdd
        }
      }, {
        upsert: true,
        new: true,
      })
     
      let { xp, level } = result
      const needed = getNeededXP(level)

      if(xp >= needed) {
        ++level
        xp -= needed

        await profileSchema.updateOne(
          {
            guildId,
            userId
          },
          {
            level,
            xp
          }
        )
      }
      
    } catch (e) {}
    finally {
      mongoose.connection.close()
    }
  })
}