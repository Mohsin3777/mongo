
const mongoose =require('mongoose')

const birthDayModel =require('../models/birthday')

addBirthday =async(req,res)=>{
    try {

      var d =await birthDayModel({
        name:"zara",

    //   dob:new Date("2003-01-25T10:20:23Z+02:00").toISOString()



    //for current date 
    dob:new Date().toISOString()
      //change value in uct for two hours  +02:00   its not working ?
    //   dob:new Date("2005-01-25T10:20:23Z++02:00").toISOString()
      })

    var data =  await d.save()
    return res.status(200).json({data:data})
    } catch (error) {
      return  res.status(400).json({ success:false,error:error})
    }
  }



  queryOnDate= async(req,res)=>{
try {
    // var data =  await birthDayModel.find().sort({dob:-1})


    //group doc with year
    // var data =  await birthDayModel.aggregate([{$group:{_id:{$year :"$dob"},names:{$push:"$name"}}}])


    //get day of month
    // var data =  await birthDayModel.aggregate([{$match:{name:"Tim"}}, {$project:{dayOfMonth:{$dayOfMonth:"$dob"}}}])


    //get day year month
//     var data =  await birthDayModel.aggregate([{$match:{name:"zara"}}, {$project:{dayOfMonth:{$dayOfMonth:"$dob"}
// ,month:{$month:"$dob"},
// dayOfYear:{$dayOfYear:"$dob"},
// hour:{$hour:"$dob"},
// ms:{$millisecond:"$dob"}



// }}])


var data =  await birthDayModel.aggregate([{$project:{name:1,_id:0,dob:{$dateToString:{format:"%d/%m/%Y %H:%M:%S", date:"$dob"}}}}])


    return res.status(200).json({data:data})
} catch (error) {
    return  res.status(400).json({ success:false,error:error})
}
  }

  module.exports={
    addBirthday,
    queryOnDate
  }