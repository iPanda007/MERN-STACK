
const mongodb =require("mongodb");
const { flushSync } = require("react-dom");
const mongodbClient =  mongodb.MongoClient;
const url  = 'mongodb://localhost:27017'
function createDB(dbName,collection){
    try{
        mongodbClient.connect(url,function(err,db){
           if(err){
              throw err
           } else{
             let dbo = db.db(dbName)
             dbo.createCollection(collection,function(err){
                 if(!err){
                    console.log("successful")
                    db.close()
                 }
             })
        
           }
      

        })
    }catch(e){

    }
}
// Insert Product
function insertProduct(title,des,price,image,dbName,collName){
      try{
            mongodbClient.connect(url,function(err,db){
                const dbo  =   db.db(dbName)
                const data = {
                    title:title,
                    des:des,
                    price:price,
                    image:image,
                }
                dbo.collection(collName).insertOne(data,function(err,result){
                       if(!err){
                         console.log("insert data in mongodb")
                       }
                })
            })
      }catch(e){

      }
}

// Insert Service

function insertService(title,description,image,dbName,collName){
    try{
        mongodbClient.connect(url,function(err,db){
            if(err)throw err;
            let dbo = db.db(dbName);
            const insertData = {
                title:title,
                description:description,
                image:image
            }
            dbo.collection(collName).insertOne(insertData,function(err,result){
                    if(err) throw err;
                    console.log(result)
            })
        })
    }catch (e){

    }
}

// Insert User

function insertUser(email,password,dbName,collName){
    try{
        mongodbClient.connect(url,function(err,db){
            if(err)throw err;
            let dbo = db.db(dbName);
            const insertData = {
                email:email,
                password:password,
            }
            dbo.collection(collName).insertOne(insertData,function(err,result){
                    if(err) throw err;
                    
            })
        })
    }catch (e){

    }
}

//get all insert user

function getAllInsertUser(dbName,collName,res) {
    mongodbClient.connect(url, function (err,db) {
        if (err) throw err;
        let dbo = db.db(dbName)
        dbo.collection(collName).find({}).toArray(function (err,result) {
            if (err) throw err;
            res.send(result)
        })
    })
}


// service find all
function allServiceData(dbName,collName,res){
    mongodbClient.connect(url,function(err,db){
         if(err) throw err;
          let dbo = db.db(dbName);
          dbo.collection(collName).find({}).toArray(function(err,result){
                    if(err) throw err;
                    res.send(result)
          })
    })
}

// produnct find all
function getAllData(name,collName,res){
    try{
        mongodbClient.connect(url,function(err,db){
                const dbo = db.db(name)
                dbo.collection(collName).find({}).toArray(function(err,result){
                    if(err)throw err;
                    res.send(result)
                })
        })
    }catch(e){

    }
}
// res produnct find id params
function getData(dbName,collName,id,res){
   mongodbClient.connect(url,function(err,db){
    if(err)throw err;
       let dbo = db.db(dbName)
       dbo.collection(collName).find({_id:mongodb.ObjectId(id)}).toArray(function(err,result){
            res.send(result)
            console.log(result)
       })
   })
}
// res param find id service
function getDataService(dbName,collName,id,res){
   mongodbClient.connect(url,function(err,db){
         let dbo = db.db(dbName)
         dbo.collection(collName).find({_id:mongodb.ObjectId(id)}).toArray(function(err,result){
                    if(err) throw err;
                    res.send(result)
         })
        
   })
}
// update product
function updateData(dbName,collName,id,updata){
    mongodbClient.connect(url,function(err,db){
        if(err) throw err
         let dbo = db.db(dbName);
         let query = {_id:mongodb.ObjectId(id)}
         let updateApi = {$set:updata}
         dbo.collection(collName).updateOne(query,updateApi,function(err,result){
            console.log(result)
         })
    })
}
// update service
function updateService(dbName,collName,id,update){ 
   mongodbClient.connect(url,function(err,db){
        if(err) throw err
        let dbo = db.db(dbName)
        let query = {_id:mongodb.ObjectId(id)}
        let updateData = {$set:update}
        dbo.collection(collName).updateOne(query,updateData,function(err,result){
                    if(err) throw err
                    console.log(result)
        })

   })
}
// delete product
function deleteData(dbName,collName,id){
   mongodbClient.connect(url,function(err,db){
      if(err)throw err;
       let dbo = db.db(dbName)
       let query = {_id:mongodb.ObjectId(id)}
       dbo.collection(collName).deleteOne(query,function(err,result){
                if(err) throw err;
                console.log(result)
       })
   })

}
// delete service data
function deleteServiceData(dbName,collName,id){
    mongodbClient.connect(url,function(err,db){
        if(err) throw err;
        let dbo = db.db(dbName)
        let query = {_id:mongodb.ObjectId(id)}
        dbo.collection(collName).deleteOne(query,function(err,result){
              if(err)throw err;
              console.log(result)
        })
    })

}
//user Login

function userLogin(email, password, res, req) {
    mongodbClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('mern');
        dbo.collection('user')

    })
}

module.exports = {createDB,insertProduct,getAllData,getData,updateData,deleteData,insertService,allServiceData,getDataService,updateService,deleteServiceData,insertUser,getAllInsertUser}