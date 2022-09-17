const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categories = Schema({
    name:String,
    address:String,
    landmark:String,
    no:Number,
    userId:String
})

module.exports = mongoose.model('Address',categories)