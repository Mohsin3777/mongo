const router = require("express").Router();

const{
    nestedArrayOperation,
    addMoreObjectinExperience
     
 } = require('../controllers/route3Controller');


 router.get("/nestedArrayOperation",nestedArrayOperation);
 
 router.get("/addMoreObjectinExperience",addMoreObjectinExperience);



module.exports =router;