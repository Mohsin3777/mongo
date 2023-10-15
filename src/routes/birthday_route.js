const router = require("express").Router();

const{
    addBirthday,
    queryOnDate

     
 } = require('../controllers/datesController');



 router.post("/addBirthday",addBirthday);
 router.get("/queryOnDate",queryOnDate);



module.exports =router;