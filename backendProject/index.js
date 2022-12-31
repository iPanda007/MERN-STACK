const express = require('express')
const fileUpload = require("express-fileupload");
const {insertUser,createDB,insertProduct, getAllData, getData,updateData,deleteData,insertService,allServiceData,getDataService,updateService,deleteServiceData,getAllInsertUser} = require('./models/DB')
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
     createDB("mern","user")
  res.end();
})
app.get('/products',function(req,res){
      getAllData("mern","all",res)
})

// res edit product api
app.get('/products/:id',function(req,res){
   getData("mern","all",req.params.id,res)
})

// res edit service api
app.get('/services/:id',function(req,res){ 
    getDataService("mern","service",req.params.id,res)
})


//insert
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
//res service api
app.get('/services',function(req,res){
    allServiceData("mern","service",res)

})
//service Insert Create
app.post('/service',fileUpload(),function(req,res){
    let body = JSON.parse(req.body.data)
    let title = body.title
    let description = body.des
    let random = new Date().getTime();
    let imageName = random+"_"+ req.files.image.name;
    req.files.image.mv("./uploads/service/"+imageName);
    try {
        insertService(title,description,imageName,"mern","service")
        res.send({message:"service create successfully",status:true})
    } catch (error) {
        
    }
})

//user
app.post('/createUser',fileUpload(),function(req,res){
    let body = JSON.parse(req.body.data)
    let email = body.email
    let password = body.password
   

 
    try {
        insertUser(email, password, "mern", "user")
        res.send({message:"User Create SuccessFully",status:true})
    } catch (error) {
           res.send({message:"something Wrong ",status:false})
    }
    console.log("sucess")
})

//getAll insert user


app.get('/getUser', function (req, res) {
  getAllInsertUser("mern","user",res)
});

//update
app.post('/products/:id',fileUpload(),function(req,res){
    let body = JSON.parse(req.body.data);
    let random = new Date().getTime();
    let imageName = random + "_" + req.files.image.name;
    req.files.image.mv("./uploads/"+imageName)
    let update = {
        title:body.title,
        des:body.des,
        price:body.price,
        image:imageName
    }
    try{
        updateData('mern','all',req.params.id,update)
       res.send({message:"product Update Successfully",status:true})
    }catch(E){
      res.send({message:"something Wrong ",status:false})
    }
})
// updata services
app.post('/services/:id',fileUpload(),function(req,res){
    
    let  body = JSON.parse(req.body.data);
    let random   = new Date().getTime();
    let imageName = random +"_" + req.files.image.name
    req.files.image.mv('./uploads/service/'+imageName)
    let updateData = {
        title : body.title,
        description:body.des,
        image:imageName
    }
    
    try{
        updateService("mern","service",req.params.id,updateData)
       res.send({message:"service update successfully",status:true})
    }catch (e){
        res.send({message:"service update not success",status:false})
    }

})

//delete
app.post('/products/:id/delete',function(req,res){
    let id =  req.params.id;
     try{
        deleteData("mern","all",id)
        res.send({message:"produnct delete successfully",status:true})
     }catch(e){

     }
})

// delete Service
app.post('/services/:id/delete',function(req,res){
 let id = req.params.id;
  deleteServiceData("mern","service",id)
  res.send({message:"product delete successfully",status:true})
})





//login 

app.post("login", fileUpload(), function (req,res) {
    let body = JSON.parse(req.body.data);
    let email = body.username;
    let password = body.password;
})

app.listen(8000,'127.0.0.1');