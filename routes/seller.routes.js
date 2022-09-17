const express = require('express')
const router = express.Router()
const Seller = require('../models/sellers')


router.post('/',(req,res)=>{

    const {hotelName,no,description,email,password,address,city} = req.body

    console.log(res.body);

    return new Promise((resolve,reject)=>{

        const  slr = new Seller({
            hotelName:hotelName,
            no:no,
            description:description,
            email:email,
            password:password,
            address:address,
            city:city
        })

        console.log(slr);

        slr.save((err,user)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(user))

            }

        })
 
    })

})

router.get('/user/:id',(req,res)=>{

    return new Promise((resolve,reject)=>{

        Seller.find({_id:req.params.id},(err,result)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(result))

            }

        })

    })

})

router.get('/:no',(req,res)=>{

    const {no} = req.params

    console.log(no);

    return new Promise((resolve,reject)=>{

       
        Seller.find({no:no},(err,data)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(data))

            }

        })

    })

})

module.exports=router