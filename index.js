const express = require('express')
const app = express();

const port = process.env.PORT || 8000
app.use(express.json()); // Parse incoming JSON data
app.use(express.urlencoded({ extended: true }));

const databaseConnection = require("./src/connections/conn");



const route1 =require('./src/routes/route1')
const route2 =require('./src/routes/route2')
const route3 =require('./src/routes/route3')
app.use("/api/route1", route1);
app.use("/api/route2", route2);
app.use("/api/route3", route3);
// Connect to the MongoDB database
databaseConnection.connect();


app.listen(port, () => {
    console.log("Backend server is running!", port);
  });