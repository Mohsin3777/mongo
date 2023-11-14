const router = require("express").Router();

const{
    addHouse,
    getData,
    thapaCode,
    practiceWithW3sorce

     
 } = require('../controllers/aggrigate_with_harry_code');



 router.post("/addHouse",addHouse);
 router.get("/getData",getData);
 router.get("/thapaCode",thapaCode);
 router.get("/practiceWithW3sorce",practiceWithW3sorce);




module.exports =router;