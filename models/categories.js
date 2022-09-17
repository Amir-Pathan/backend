const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categories = Schema({
    categoryName:String,
    categoryDescription:String,
    imgUrl:String,
    isActive:Boolean
})

module.exports = mongoose.model('Categories',categories)