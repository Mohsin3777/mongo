const mongoose = require("mongoose");
const addressModel =new mongoose.Schema({

address1:{type:String,reuired:true},

address2:{type:String},

pin_code:{type:String,reuired:true},

country:{type:String,reuired:true,},


})



module.exports = mongoose.model("Address", addressModel);