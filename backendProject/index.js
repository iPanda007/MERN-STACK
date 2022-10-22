const express = require('express')
const fileUpload = require("express-fileupload")
const {createDB,insertProduct, getAllData, getData} = require('./models/DB')
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    next();
})  
app.get('/',function(req,res){
            res.send("hello")
})

app.get('/createdb',function(req,res){
     createDB("mern","product")
  
})
app.get('/products',function(req,res){
      getAllData("mern","all",res)
})

app.get('/products/:id',function(req,res){
   getData("mern","all",req.params.id,res)
})
app.post('/product',fileUpload(),function(req,res){
    let body = JSON.parse(req.body.data);
    let title = body.title;
    let price = body.price;
    let des =body.des;
    
    let random = new Date().getTime();
     let imageName = random + "_" +req.files.image.name;
     req.files.image.mv("./uploads/"+imageName)
    try{
        insertProduct(title,des,price,imageName,"mern","all")
        res.send({message:"Product Created Successfully",status:true})
    }catch(e){
            res.send({message:"Someth wrong",status:false})
    }
    

})

app.listen(8000,'127.0.0.1')