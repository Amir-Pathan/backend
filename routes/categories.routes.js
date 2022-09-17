const express = require('express')
const router = express.Router()
const categories = require('../models/categories')

router.get('/',(req,res)=>{

    return new Promise((resolve,reject)=>{

        categories.find({},(err,result)=>{
            if(err){
                reject(res.send(err))
            }else{
                resolve(res.send(result))
            }
        })

    })

})

router.post('/',(req,res)=>{

    const {categoryName,categoryDescription,imgUrl,isActive} = req.body

    return new Promise((resolve,reject)=>{
        const category= new categories({
            categoryName:categoryName,
            categoryDescription:categoryDescription,
            imgUrl:imgUrl,
            isActive:isActive
        })

        category.save((err,result)=>{

            if(err){
                reject(res.send(err))
            }else{
                resolve(res.send(result))
            }

        })

    })


})


router.put('/',(req,res)=>{

    const {_id,categoryName,categoryDescription,isActive,imgUrl} = req.body

    console.log(req.body)

    return new Promise((resolve,reject)=>{

        categories.findByIdAndUpdate(_id,{
            categoryName:categoryName,
            categoryDescription:categoryDescription,
            imgUrl:imgUrl,
            isActive:isActive
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