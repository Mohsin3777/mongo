const router = require("express").Router();

const{
    addJson,
 ternoryOperator,
    
 logicalOperator,
 existOperators,
 evalutionOperators
     
 } = require('../controllers/route1controller');


 router.post("/addJson",addJson);
 router.get("/ternoryOperator",ternoryOperator);
 router.get("/logicalOperator",logicalOperator);

 router.get("/existOperators",existOperators);
 router.get("/evalutionOperators",evalutionOperators);


module.exports =router;