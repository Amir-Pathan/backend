var express= require('express')
const mongoose = require('mongoose')

var app = express()

const cors = require('cors')

app.use(cors({
    origin:'*',
    methods:['GET','POST',"DELETE","PUT"]
}))

const bodyParser = require('body-parser')

const imageUpload = require('./routes/user.routes')

const sellers = require('./routes/seller.routes')

const categories = require('./routes/categories.routes')

const products = require('./routes/product.routes')

const customers = require('./routes/customer.routes')

const address = require('./routes/address.routes')

const orders = require('./routes/order.routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));    
app.use(express.static('public')); 
//app.use('/images', express.static('images'));

app.get('/imageUrl/:url',(req,res)=>{

console.log(req.params.url);
    res.sendFile(__dirname+'/public/'+req.params.url)

})

app.get('/',(req,res)=>{
    res.send("Hello Welcome")
})




app.use('/imageUpload',imageUpload)
app.use('/sellers',sellers)
app.use('/categories',categories)
app.use('/products',products)
app.use('/customers',customers)
app.use('/address',address)
app.use('/orders',orders)


mongoose.connect('mongodb+srv://Amir:samsung@cluster0.krn3x.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('connected');
})

app.listen(8089)