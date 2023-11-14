const mongoose =require('mongoose')
const model1 = require('../models/model1')
const house_priceModel =require('../models/house_price')
const wesource_dataModel =require('../models/wesource_data')


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


const data =await model1.find({'experience':{$elemMatch:{'duration':2,'company':'Apple'}}})
   return res.status(200).json({data:data})
    } catch (error) {
        return  res.status(400).json({ success:false,error:error})  
    }
}




const thapaCode=async(req,res)=>{
    try {
        


    

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


const practiceWithW3sorce=async(req,res)=>{
    try {
 const d ={
    "address": {
       "building": "6909",
       "coord" : [ -74.0259567, 40.6353674 ],
       "street" : "3 Avenue",
       "zipcode": "11209"
    },
    "borough": "borough Bronx",
    "cuisine": "Delicatessen",
    "grades": [
       { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
       { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
       { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
       { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
       { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
    ],
    "name": "Glorious Food",
    "restaurant_id": "40361521"
  }
//   const data =await wesource_dataModel(d)
//  await data.save()
    
// const data =await wesource_dataModel.find({"grades":{$elemMatch:{"score":{$gt:1,$lt:100},}}})
const data1 =await wesource_dataModel.updateMany({
    $or: [
        { "_id": "6535707d5fa661326bb5960f" },
        { "_id": "653571d0b070076404d8dc70" }
      ]
},

{

    $set: { "name": { $each: ["ali", "amir"] } }

   }
)
const data =await wesource_dataModel.find({
    $or: [
        { "_id": "6535707d5fa661326bb5960f" },
        { "_id": "653571d0b070076404d8dc70" }
      ]
})

// const data =await wesource_dataModel.find()
   return res.status(200).json({data:data})
    } catch (error) {
        return  res.status(400).json({ success:false,error:error})  
    }
}




module.exports={
    addHouse,
    getData,
    thapaCode,
    practiceWithW3sorce
}