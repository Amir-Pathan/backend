const mongoose = require('mongoose')
const Schema= mongoose.Schema

const order = Schema({
    addressId:String,
    sellerId:String,
    customerId:String,
    productId:String,
    price:Number,
    orderStatus:String,
    qty:Number
})

module.exports=mongoose.model('orders',order)