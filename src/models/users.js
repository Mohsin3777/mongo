const mongoose = require("mongoose");
const usersModel =new mongoose.Schema({

fname:{type:String,reuired:true,trim:true},

lname:{type:String,reuired:true,trim:true},

email:{type:String,reuired:true,trim:true,unique:true},

password:{type:String,reuired:true,},


})



module.exports = mongoose.model("Users", usersModel);