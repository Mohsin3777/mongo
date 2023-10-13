const mongoose =require('mongoose')

const model1 =require('../models/model1')

const nestedArrayOperation = async(req,res)=>{

  
    try {

    //update only first field and  add neglect:true
    //    const data =await  model1.updateMany({experience:{$elemMatch:{duration:{$lte:1}}}  } ,
    //     {$set:{"experience.$.neglect":true}}
    // )    


        //update all  field and  add neglect:true
    //    const data =await  model1.updateMany({experience:{$elemMatch:{duration:{$lte:1}}}  } ,
    //     {$set:{"experience.$[].neglect":1}}
    // )    



           //update only mateched  field and  add neglect:true
       const data =await  model1.updateMany({experience:{$elemMatch:{duration:{$lte:1}}}  } ,
        {$set:{"experience.$[e].neglect":true}},

        {arrayFilters:[{"e.duration":{$lte:1}}]}
    )    

//  const data=await model1.find({experience:{$elemMatch:{duration:{$lte:1}}}  })

        res.status(200).json({data:data})
    } catch (error) {
        res.status(400).json({error:error})
    }

}




const addMoreObjectinExperience = async(req,res)=>{

  
    try {
//add Object in array   using $push
    //    const data =await  model1.updateOne({name:"Ram"},{$push:{experience:{company:"Meta",duration:2}}})    


    // /if not present add  Object in array   using $addToSetset
    //    const data =await  model1.updateOne({name:"Ram"},{$addToSet:{experience:{company:"Meta",duration:2}}})    



        // rempove  Object in array   using $addToSetset
        // const data =await  model1.updateOne({name:"Ram"},{$pull:{experience:{company:"Meta",duration:2}}}) 



          // rempove  last Object in array   using $pop
            //   const data =await  model1.updateOne({name:"Ram"},{$pop:{experience:1}}) 


                      // rempove  first Object in array   using $pop
            //   const data =await  model1.updateOne({name:"Ram"},{$pop:{experience:-1}}) 

         const data=await model1.find({name:"Ram"})

        res.status(200).json({data:data})
    } catch (error) {
        res.status(400).json({error:error})
    }

}
module.exports = {
 
    nestedArrayOperation,
    addMoreObjectinExperience
}