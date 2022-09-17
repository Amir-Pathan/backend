const express = require('express')
const router = express.Router()
const product = require('../models/product')

router.get('/:userId',(req,res)=>{

    const {userId} = req.params

   return new Promise((resolve,reject)=>{

        product.find({userId:userId},(err,result)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(result))

            }

        })

   })
})

router.get('/:id',(req,res)=>{

    const {id} = req.params


    return new Promise((resolve,reject)=>{

        product.find({_id:id},(err,result)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(result))

            }

        })

    })

})

router.get('/',(req,res)=>{


    return new Promise((resolve,reject)=>{

        product.find({},(err,result)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(result))

            }

        })

    })

})

router.get('/product/:id',(req,res)=>{

    console.log('hire.');

    const {id} = req.params

    return new Promise((resolve,reject)=>{

        product.find({_id:id},(err,result)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(result))

            }

        })

   })

})


router.get('/product/:id/:city',(req,res)=>{


    const {id,city} = req.params

    console.log(id,city);

    return new Promise((resolve,reject)=>{

        product.find({productCategory:id,productCity:city},(err,result)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(result))

            }

        })

   })

})

router.post('/',(req,res)=>{

    const {productName,productCategory,userId,productOriginalPrice,
        productDiscountedPrice,productImg,productDescription
    ,productMaxQty,productMinQty,productStock,productActive,productCity} = req.body

    console.log(productCity);

    return new Promise((resolve,reject)=>{

        const prd = new product({
            productName:productName,
            productCategory:productCategory,
            userId:userId,
            productOriginalPrice:productOriginalPrice,
            productDiscountedPrice:productDiscountedPrice,
            productImg:productImg,
            productDescription:productDescription,
            productMaxQty:productMaxQty,
            productMinQty:productMinQty,
            productStock:productStock,
            productActive:productActive,
            productCity:productCity
        })

        prd.save((err,result)=>{
            if(err){
                reject(res.send(err))
            }else{
                resolve(res.send(result))
            }
        })

    })

})

router.put('/',(req,res)=>{

    const {_id,productName,productCategory,userId,productOriginalPrice,
        productDiscountedPrice,productImg,productDescription
    ,productMaxQty,productMinQty,productStock,productActive,productCity} = req.body

    console.log(productCity)

    return new Promise((resolve,reject)=>{

        product.findByIdAndUpdate(_id,{
            _id:_id,
            productName:productName,
            productCategory:productCategory,
            userId:userId,
            productOriginalPrice:productOriginalPrice,
            productDiscountedPrice:productDiscountedPrice,
            productImg:productImg,
            productDescription:productDescription,
            productMaxQty:productMaxQty,
            productMinQty:productMinQty,
            productStock:productStock,
            productActive:productActive,
            productCity:productCity
        },(err,result)=>{

            if(err){
                reject(res.send(err))
            }else{
                resolve(res.send(result))
            }

        })

    })

})

module.exports=router