const mongoose = require('mongoose');
mongoose.set('strictQuery',false)

const connection=mongoose.connect(process.env.mongourl)


module.exports={connection}