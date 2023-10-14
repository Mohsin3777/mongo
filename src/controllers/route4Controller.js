const mongoose =require('mongoose')

const teacherModel =require('../models/teacher')



const indexTeacher = async(req,res)=>{
    try {
  
    

      // const data =await teacherModel.find({age:{$lte:30}}).explain()
      const data =await teacherModel.find({age:{$lte:30}}).explain("executionStats")


      // create indx   1  means asscending order
      // const d =await teacherModel.createIndex({age:1})

      // const data =await teacherModel.getIndexes()
      // const data =await teacherModel.listIndexes().toArray()
      return res.status(200).json({data:data})
    } catch (error) {
       return  res.status(400).json({ success:false,error:error})
    }
  }
module.exports={
    indexTeacher
}