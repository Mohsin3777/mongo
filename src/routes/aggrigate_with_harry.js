const router = require("express").Router();

const{
    addHouse,
    getData

     
 } = require('../controllers/aggrigate_with_harry_code');



 router.post("/addHouse",addHouse);
 router.get("/getData",getData);




module.exports =router;