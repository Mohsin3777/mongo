const router = require("express").Router();

const{
    indexTeacher
     
 } = require('../controllers/route4Controller');


 router.get("/indexTeacher",indexTeacher);



module.exports =router;