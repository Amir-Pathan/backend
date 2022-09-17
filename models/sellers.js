const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sellerSchema=Schema({
    hotelName:String,
    no:String,
    email:String,
    address:String,
    city:String,
    password:String,
    description:String
})

module.exports=mongoose.model('sellers',sellerSchema)