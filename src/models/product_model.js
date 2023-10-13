const mongoose = require("mongoose");
const productModel =new mongoose.Schema({

product:{
    type:[
        // {
        //     type: mongoose.Types.ObjectId, 
        //     ref: 'product' 
        // }
    ],
    default:[]
}



})

const productSchema =new mongoose.Schema({

  name:{
    type:String,
  },
  quantity:{
    type:Number
  }
    
    
    
    })
    

var product = mongoose.model("product", productSchema);


module.exports = mongoose.model("productList", productModel);