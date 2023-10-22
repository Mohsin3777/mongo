const mongoose =require('mongoose')

const teacherModel =require('../models/teacher')
const model1 = require('../models/model1')
const scoreModel = require('../models/score')
const order = require('../models/order')




const useAggrigate = async(req,res)=>{
    try {
  
    

//get only male teacher
    //   const data =await teacherModel.aggregate([{$match:{gender:'female'}}])

      //group by  age
    //   const data =await teacherModel.aggregate([{$group:{_id:'$age'}}])

      //group by age wirh names
    //   const data =await teacherModel.aggregate([{$group:{_id:'$age',names:{$push:"$name"}}}])


    //group by age with complete document
    // const data =await teacherModel.aggregate([    //give a count per age of male teacher

//givr  a count per age of male teacher
    // const data =await teacherModel.aggregate([{$match:{gender:"male"}},{$group:{_id:'$age',countOfTeacherIngroup:{$sum:1}}}])
  
  //give a count per age of male student and sort them by count in desc order
  // const data =await teacherModel.aggregate([{$match:{gender:"male"}},{$group:{_id:'$age',countOfTeacherIngroup:{$sum:1}}},{$sort:{countOfTeacherIngroup:-1}}])


  //max of sort teacher
    // const data =await teacherModel.aggregate([{$match:{gender:"male"}},{$group:{_id:'$age',countOfTeacherIngroup:{$sum:1}}},{$sort:{countOfTeacherIngroup:-1}},{$group:{_id:null,maxNumberinAgeGroup:{$max:'$countOfTeacherIngroup'}}}])


//fech student with age group with hobbies
    // const data =await model1.aggregate([{$group:{_id:"$age",hobbies:{$push:"$Hobbies"}}},])




  // using $unwind 
  // const data =await model1.aggregate([{$unwind:"$Hobbies"},{$group:{_id:"$age",hobbies:{$push:"$Hobbies"}}},])


  //average age
  // const data =await model1.aggregate([{$group:{_id:null,averageAge:{$avg:"$age"}}},])

  //find total no of hobbies for all the students
  //first way
  // const data =await model1.aggregate([{$unwind:"$Hobbies"},{$group:{_id:null,count:{$sum:1}}}])

//second way
// we use ifNull if some one not have field hobbies
  // const data =await model1.aggregate([{$group:{_id:null,count:{$sum:{$size:{$ifNull:[
  //   "$Hobbies",[]
  // ]}}}}}])



  //get hobies without repetation
  // const data =await model1.aggregate([{$unwind:"$Hobbies"},{$group:{_id:null,allhabbits:{$addToSet:"$Hobbies"}}}])
   

  //find avg of scores of student whose age is greater then 20
  // its not workong
  // const data =await scoreModel.aggregate([{$group:{_id:null,avgScore:{$avg:{$filter:{
  //   input:"$score",
  //   as :"scores",
  //   cond: {$gt:["$age",18]}
  // }}}}}])

  const data =await scoreModel.find({$expr:{$and:[{$gt:["$age",15]},{$eq:{"$name":"John"}}]}})
  
  
  return res.status(200).json({data:data})
    } catch (error) {
       return  res.status(400).json({ success:false,error:error})
    }
  }



  addScore =async(req,res)=>{
    try {

      var d =await scoreModel({
        name:"Tim",
        age:18,
        score:[85,60,95,80,75]
      })

    var data =  await d.save()
    return res.status(200).json({data:data})
    } catch (error) {
      return  res.status(400).json({ success:false,error:error})
    }
  }






  const usebucket = async(req,res)=>{
    try {

  const data =await teacherModel.aggregate([{$match:{gender:"male"}},{$bucket:{

    groupBy:"$age",boundaries:[0,30,40],default:"Greater then 40 wala group",
output:{count:{$sum:1},names:{$push:"$name"}}

  }}])
  
  
  return res.status(200).json({data:data})
    } catch (error) {
       return  res.status(400).json({ success:false,error:error})
    }
  }



  
  // 65298919fcc9d9d67d3ef0ed
  // 652989320af897c69875e7fc
  // 652989406cab6eeb52d1eda7
//create order with hardcodeind tecaher id

const addOrder = async(req,res)=>{
  try {

const d =await order({
  order_number:4,
  customer_id:"652989406cab6eeb52d1eda7"
})
// const data =await teacherModel.find()


const data  =await d.save()
return res.status(200).json({data:data})
  } catch (error) {
     return  res.status(400).json({ success:false,error:error})
  }
}


const lockupOperator = async(req,res)=>{
  try {

    //left outer join
const data =await teacherModel.aggregate([{$lookup:{from:"orders",localField:"_id",foreignField:"customer_id",as:"orderDetails"}},])
// const data =await order.find().populate('customer_id')



return res.status(200).json({data:data})
  } catch (error) {
     return  res.status(400).json({ success:false,error:error})
  }
}



//use project
const useProject = async(req,res)=>{
  try {

// use $project
// const data =await teacherModel.aggregate([{$project:{_id:0}}])


//rename username
const data =await teacherModel.aggregate([{$project:{_id:0,"userName":"$name"}}])




return res.status(200).json({data:data})
  } catch (error) {
     return  res.status(400).json({ success:false,error:error})
  }
}

module.exports={
    useAggrigate,
    addScore,
    usebucket,
    addOrder,
    lockupOperator,
    useProject
}