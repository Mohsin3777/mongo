const mongoose =require('mongoose')

const model1 =require('../models/model1')

const ternoryOperator = async(req,res)=>{

    var list=[{
        "name": "Sita",
        "age": 25,
        "Hobbies": [
          "Walk",
          "Cricket"
        ],
        "identity": {
          "hasPanCard": false,
          "hasAdhaarCard": true
        },
        "bio": "I am a youtuber",
        "experience": [
          {
            "company": "Spotify",
            "duration": 3
          },
          {
            "company": "Paytm",
            "duration": 1
          }
        ]
      },
      {
        "name": "Shyam",
        "age": 11,
        "Hobbies": [
          "Walking",
          "Reading"
        ],
        "identity": {
          "hasPanCard": false,
          "hasAdhaarCard": true
        },
        "bio": "I am a youtuber and actor"
      },
      {
        "name": "Ghanshayam",
        "age": 11,
        "Hobbies": [
          "Walk",
          "Cricket"
        ],
        "identity": {
          "hasPanCard": false,
          "hasAdhaarCard": true
        },
        "bio": "I am a cook",
        "experience": [
          {
            "company": "Times Internet",
            "duration": 1
          },
          {
            "company": "1 mg",
            "duration": 1
          },
          {
            "company": "Apple",
            "duration": 2
          }
        ]
      },
      {
        "name": "Rita",
        "age": 11,
        "Hobbies": [
          "Anime"
        ],
        "identity": {
          "hasPanCard": false,
          "hasAdhaarCard": true
        },
        "bio": "I play games"
      },
      {
        "name": "Ram",
        "age": 10,
        "Hobbies": [
          "Walk",
          "Cricket"
        ],
        "identity": {
          "hasPanCard": false,
          "hasAdhaarCard": true
        },
        "bio": "I do nothing.",
        "experience": [
          {
            "company": "KPMG",
            "duration": 1
          },
          {
            "company": "EY",
            "duration": 1.5
          },
          {
            "company": "TCS",
            "duration": 0.5
          }
        ]
      },
      {
        "name": "Geeta",
        "age": 12,
        "Hobbies": [
          "Gaming",
          "Cooking"
        ],
        "identity": {
          "hasPanCard": false,
          "hasAdhaarCard": true
        },
        "bio": "I code and play games.",
        "experience": [
          {
            "company": "Spotify",
            "duration": 1
          },
          {
            "company": "Google",
            "duration": 3.4
          }
        ]
      },
      {
        "name": "Geeta",
        "bio": "I just code.",
        "experience": [
          {
            "company": "Amazon",
            "duration": 2
          },
          {
            "company": "Flipkart",
            "duration": 1
          }
        ],
        "Hobbies": [
          "Reading",
          "Walking"
        ]
      },
      {
        "name": "Akshit",
        "age": 22,
        "hobbies": [
          "TV Shows"
        ],
        "hasMacBook": true,
        "bio": "I am savage boi.",
        "experience": [
          {
            "company": "Amazon",
            "duration": 2
          },
          {
            "company": "Google",
            "duration": 3
          }
        ]
      }]

    try {
      //  const data =await  model1.insertMany(list,{writeConcern:{w:0,j:false}})
    
// const data = await model1.find({age:{$in:[25,22]}})

// const data = await model1.find({age:{$gt:[25,22]}})

//  const data = await model1.find({'identity.hasAdhaarCard':true})
        res.status(200).json({data:data})
    } catch (error) {
        res.status(400).json({error:error})
    }

}


const logicalOperator = async(req,res)=>{
  try {

    //find age less then 10 and greater then 12
    // const data =await model1.find({$or :[{age:{$lte:10}} ,{age:{$gte:12}}]})


    //nor operator
    // const data =await model1.find({$nor :[{age:{$lte:10}} ,{age:{$gte:12}}]})

    //using end operator   age less then 11 and hobbies = 'Walk'
    // const data =await model1.find({$and :[{age:{$lt:11}} ,{Hobbies:'Walk'}]})


    //direct 2 queries on age but it wrong  use $and in this json pick last quert age:{$gte:20} 
    const data =await model1.find({age:{$lt:11} ,age:{$gte:20}})
  
      res.status(200).json({data:data})
  } catch (error) {
      res.status(400).json({error:error})
  }
}



// Mastering MongoDB: Understanding the $exists and $type Operators
const existOperators = async(req,res)=>{
  try {

  

    //check field hasMacBook present in any document
    // const data =await model1.find({hasMacBook:{$exists:true}})
    

    // const data =await model1.find({hasMacBook:{$exists:true,$eq:true}})



    //wo doc gen ma hasMacBook ki type Boolean ho
    const data =await model1.find({hasMacBook:{$exists:true,$type:"bool"}})
    await model1.createIndexes
      res.status(200).json({data:data})
  } catch (error) {
      res.status(400).json({error:error})
  }
}




//evalution operator
const evalutionOperators = async(req,res)=>{
  try {

  
//it retruna  a resutl which name start with S
    // const data =await model1.find({name :{$regex :/^S/}})


    //index the bio field
    // const result =  await model1.createIndex({bio:"text"})
    // console.log(`Index created: ${result}`);
    // const data =await model1.find({$text:{$search:"savage"}})
    //   res.status(200).json({data:data})



    // find doc that divide by 2 and their reminder should be zero
    const data =await model1.find({age:{$mod:[2,0]}})
    return res.status(200).json({data:data})
  } catch (error) {
     return  res.status(400).json({ success:false,error:error})
  }
}
module.exports ={
  ternoryOperator,
  logicalOperator,
  existOperators,
  evalutionOperators,
  
}