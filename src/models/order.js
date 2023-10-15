const mongoose = require("mongoose");
const orderModel =new mongoose.Schema({

order_number:{
    type:Number,
    unique:true
},
customer_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
}

})



module.exports = mongoose.model("order", orderModel);