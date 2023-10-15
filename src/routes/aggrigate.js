const router = require("express").Router();

const{
    useAggrigate,
    addScore,
    usebucket,
    addOrder,
    lockupOperator,
    useProject
     
 } = require('../controllers/aggrigateController');


 router.get("/useAggrigate",useAggrigate);
 router.post("/addScore",addScore);
 router.get("/useBucket",usebucket);
 router.post("/addOrder",addOrder);
 router.get("/lockUpoperator",lockupOperator);
 router.get("/useProject",useProject);


module.exports =router;