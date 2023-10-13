const router = require("express").Router();

const{
arrayQuery,
addProduct,
addTeacher,
QueryOnTeacher
 } = require('../controllers/route2Controller');


 router.get("/arrayQuery",arrayQuery);

 router.post("/addProduct",addProduct );


 router.post("/addTeacher",addTeacher );
 router.get("/queryOnTeacher",QueryOnTeacher );


 module.exports =router;