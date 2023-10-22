const mongoose = require("mongoose");
const housePrice =new mongoose.Schema({

location:{
    type:String
},
price:{
    type:Number
},
bedrooms:{
    type:Number
},
floor:{
    type:Number
},


})



module.exports = mongoose.model("Price", housePrice);