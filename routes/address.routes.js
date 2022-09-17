const express = require('express')

const router = express.Router()

const Address = require('../models/address')

router.get('/:userId',(req,res)=>{

    const {userId} = req.params

    return new Promise((resolve,reject)=>{

        Address.find({userId:userId},(err,result)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(result))

            }

        })

    })

})

router.post('/',(req,res)=>{

    const {name,address,no,userId,landmark} = req.body

    return new Promise((resolve,reject)=>{

        const addAddress = new Address({
            name:name,
            no:no,
            address:address,
            landmark:landmark,
            userId:userId
        })

        addAddress.save((err,result)=>{

            if(err){

                reject(res.send(err))

            }else{

                resolve(res.send(result))

            }

        })

    })

})


module.exports = router