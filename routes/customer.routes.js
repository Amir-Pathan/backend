const express = require('express')
const router = express.Router()
const customers =  require('../models/cutomers')

router.get('/:no',(req,res)=>{

    return new Promise((resolve,reject)=>{

        customers.find({customerNo:req.params.no},(err,result)=>{

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

        customers.find({},(err,result)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(result))

            }

        })

    })
})

router.post('/',(req,res)=>{

    console.log('hire');

    const {
       customerNo,
       customerName,
       customerPassword,
       customerCity,
       customerEmail
    }=req.body

    return new Promise((resolve,reject)=>{

        const customer =new customers({
            customerName:customerName,
            customerCity:customerCity,
            customerEmail:customerEmail,
            customerPassword:customerPassword,
            customerNo:customerNo
        })

        customer.save((err,result)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(result))

            }

        })

    })

})


module.exports = router