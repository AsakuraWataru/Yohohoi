const mongoose = require('mongoose');

module.exports = async () => {
  await mongoose.connect(process.env.SRV, {
    keepAlive: true,
    useNewUrlParser : true,
    useUnifiedTopology: true,
  })
  return mongoose
}