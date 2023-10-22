const mongoose =require('mongoose')

// import  db  from '../../index'
// const db = require('../../index')
const userModel =require('../models/users')
const addressModel =require('../models/address')
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.atlasUrl);


// client.connect(function(err) {
//   if (err) {
//     console.log(err);
//     return;
//   }
// console.log('connected')
  
// });


const databaseConnection = require("../connections/conn");

const createUserHandler=async(req,res)=>{
  // var db =mongoose.createConnection('mongodb://127.0.0.1:27017/mongoCourse')
    // const db = await mongoose.createConnection(process.env.atlasUrl).asPromise();
  


    const session = client.startSession()
    
try {

    // const session = await mongoose.startSession();

    const { fname,lname,email,password,address1,address2,pin_code,country}= req.body

let addUser = await userModel.create([{
 fname,
 lname,
 email,
 password

}],{session:session})

let addressDate = await addressModel.create([{
  address1,
  address2,
  pin_code,
  country
}],{session:session})


await session.commitTransaction()
return res.status(200).send({message: "User created successFullyy fully "})
} catch (error) {
    await session.abortTransaction()
 return   res.status(400).json({error:error})
}
}

module.exports ={
    createUserHandler
    
  }