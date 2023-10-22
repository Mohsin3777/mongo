//babel cli
//npm install --save-dev babel-cli


const express = require('express')
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 8000
app.use(express.json()); // Parse incoming JSON data
app.use(express.urlencoded({ extended: true }));
dotenv.config();
const databaseConnection = require("./src/connections/conn");



const route1 =require('./src/routes/route1')
const route2 =require('./src/routes/route2')
const route3 =require('./src/routes/route3')
const route4 =require('./src/routes/route4')
const aggrigate =require('./src/routes/aggrigate')
const birthday =require('./src/routes/birthday_route')
// const transactions =require('./src/routes/transactions')
const aggrateWithHarry =require('./src/routes/aggrigate_with_harry')
app.use("/api/route1", route1);
app.use("/api/route2", route2);
app.use("/api/route3", route3);
app.use("/api/aggrigate", aggrigate);
app.use("/api/birthday", birthday);
// app.use("/api/transactions", transactions);
app.use("/api/aggrateWithHarry", aggrateWithHarry);
// Connect to the MongoDB database


databaseConnection.connect();



// (async () =>{
//   try {
//     db =await databaseConnection()
//   } catch (error) {
//     console.log('DATABASE ERRRO')
//   }
// })


app.get('/s',(req,res)=>{
  return res.send('aaaaaaaaaaaaaaaaaaaaa')
})


app.listen(port, () => {
    console.log("Backend server is running!", port);
  });


 