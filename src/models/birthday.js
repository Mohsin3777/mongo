const mongoose = require("mongoose");
const birthDayModel =new mongoose.Schema({

name:{
    type:String
},
dob:{
    type:  Date,
    // default:new Date()
}
})



module.exports = mongoose.model("birthDayModel", birthDayModel);