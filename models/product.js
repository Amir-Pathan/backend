const mongoose=require('mongoose')
const Schema=mongoose.Schema

const products = Schema({
    productName:String,
    productCategory:String,
    userId:String,
    productOriginalPrice:Number,
    productDiscountedPrice:Number,
    productImg:String,
    productDescription:String,
    productMaxQty:Number,
    productMinQty:Number,
    productStock:String,
    productActive:Boolean,
    productCity:String
})

module.exports=mongoose.model('Products',products)