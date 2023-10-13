const mongoose = require("mongoose");
const teacherSchema =new mongoose.Schema({

name:{
    type:String,

},
age:{
    type:Number,

},
gender:{
    type:String,

},

})
module.exports = mongoose.model("teacher", teacherSchema);