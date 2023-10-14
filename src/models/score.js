const mongoose = require("mongoose");
const scoreModel =new mongoose.Schema({

name:{
    type:String
},
age:{
    type:Number
},

score:{
    type:[]
}

})



module.exports = mongoose.model("Score", scoreModel);