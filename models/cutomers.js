const mongoose = require('mongoose')
const Schema=mongoose.Schema

const customer = Schema({
    customerName:String,
    customerNo:Number,
    customerCity:String,
    customerEmail:String,
    customerPassword:String
})

module.exports =mongoose.model('customers',customer)