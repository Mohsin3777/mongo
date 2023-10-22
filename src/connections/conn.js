const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();


var cloudUrl = process.env.atlasUrl
const connect = () => {

    mongoose
        .connect(
            'mongodb://127.0.0.1:27017/mongoCourse',
            // cloudUrl,
            {retryWrites:true,w:"majority"}
   
        
        )
        .then((v) => {
      
            console.log("DB Connection Successfull!")
        })
        .catch((err) => {
            console.log(err);
        });


}


 const mongoDbCollection = async() =>{

    console.log('CONNECTED')
    return await mongoose.connect(cloudUrl,{retryWrites:true,w:"majority"})
}
module.exports ={
    connect,
    
}


// module.exports =mongoDbCollection