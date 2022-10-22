
const mongodb =require("mongodb")
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
function getData(dbName,collName,id,res){
   mongodbClient.connect(url,function(err,db){
    if(err)throw err;
       let dbo = db.db(dbName)
       dbo.collection(collName).find({_id:mongodb.ObjectId(id)}).toArray(function(err,result){
            res.send(result)
       })

   })
}
module.exports = {createDB,insertProduct,getAllData,getData}