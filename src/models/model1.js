const mongoose = require("mongoose");
const insertMany =new mongoose.Schema({

name:{
    type:String
},
age:{
    type:Number
},
identity:{
    type:[]
},
bio:{
    type:String
},
Hobbies:{
    type:[]
},
experience:{
    type:[]
}

})



module.exports = mongoose.model("model1", insertMany);