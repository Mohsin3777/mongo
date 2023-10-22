const mongoose =require('mongoose')
const model1 = require('../models/model1')
const house_priceModel =require('../models/house_price')



//inset data

const addHouse=async(req,res)=>{
    try {
        const {location,price,bedrooms,floor} =req.body


        const d=await house_priceModel({
            location:location,
            price:price,
            bedrooms:bedrooms,
            floor:floor
        })
       

   const data= await    d.save()
   return res.status(200).json({data:data})
    } catch (error) {
        return  res.status(400).json({ success:false,error:error})  
    }
}



const getData=async(req,res)=>{
    try {
        


    //     const data=await house_priceModel.aggregate([{$match:{"location":"Banglore"}},
    // {$group:{"_id":"$_id","price":{$first:"$price"},"floorRooms":{$sum:{$add:["$bedrooms","$floor"]}}}}
    // ])
       


    //sort doc with floorrooms
    // const data=await house_priceModel.aggregate([{$match:{"location":"Banglore"}},
    // {$group:{"_id":"$_id","price":{$first:"$price"},"floorRooms":{$sum:{$add:["$bedrooms","$floor"]}}}},
    // {$sort:{"floorRooms":1,"price":-1}}
    // ])


    // const data =await house_priceModel.find({$expr:{$gt:[{$multiply:["$floor","$bedrooms"]},'$price']},})

    // const data =await model1.find({'experience':{$size:3}},{experience:1,_id:0})

       
// const data =await house_priceModel.find({'price':{$exists:true}, 'price':{$gt:10}})
// const data =await house_priceModel.find({'price':{$type:'number'},}).count()


// const data =await model1.find({'experience.duration':{$all:[1,3]}})
const data =await model1.find({'experience':{$elemMatch:{'duration':2,'company':'Apple'}}})
   return res.status(200).json({data:data})
    } catch (error) {
        return  res.status(400).json({ success:false,error:error})  
    }
}

module.exports={
    addHouse,
    getData,
}