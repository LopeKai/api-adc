const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGo_URL

mongoose.connect(MONGO_URL, {
}).then(() => {
    console.log('Mongo Connected');
}).catch(err => {
    console.log(err)
})

module.exports = mongoose