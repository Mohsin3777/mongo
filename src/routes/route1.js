const router = require("express").Router();

const{
 ternoryOperator,
    
 logicalOperator,
 existOperators,
 evalutionOperators
     
 } = require('../controllers/route1controller');

 router.get("/ternoryOperator",ternoryOperator);
 router.get("/logicalOperator",logicalOperator);

 router.get("/existOperators",existOperators);
 router.get("/evalutionOperators",evalutionOperators);


module.exports =router;