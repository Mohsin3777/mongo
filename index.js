const express = require('express')
const app = express();

const port = process.env.PORT || 8000
app.use(express.json()); // Parse incoming JSON data
app.use(express.urlencoded({ extended: true }));

const databaseConnection = require("./src/connections/conn");



const route1 =require('./src/routes/route1')


app.use("/api/route1", route1);

// Connect to the MongoDB database
databaseConnection.connect();


app.listen(port, () => {
    console.log("Backend server is running!", port);
  });