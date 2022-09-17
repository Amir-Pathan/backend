const express = require('express')
const router = express.Router()

const Orders = require('../models/order')

router.post('/',(req,res)=>{

    const {
        addressId,
        customerId,
        sellerId,
        productId,
        price,
        qty,
        status,
    } = req.body

    console.log(req.body);

    return new Promise((resolve,reject)=>{

        const order = new Orders({
            addressId:addressId,
            customerId:customerId,
            sellerId:sellerId,
            productId:productId,
            price:price,
            qty:qty,
            orderStatus:status
        })

        order.save((err,result)=>{

            if(err){

                reject(res.send(err))

            }else{
                resolve(res.send(result))
            }

        })

    })

})

router.get('/:type/:id',(req,res)=>{

    const {id,type} = req.params

    console.log(type);

    return new Promise((resolve,reject)=>{

        Orders.find({[type]:id},(err,result)=>{

            if(err){

                reject(res.send(err))

            }else{


                console.log(result);

                resolve(res.send(result))

            }

        })

    })

})

module.exports=router