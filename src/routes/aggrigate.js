const router = require("express").Router();

const{
    useAggrigate,
    addScore,
    usebucket
     
 } = require('../controllers/aggrigateController');


 router.get("/useAggrigate",useAggrigate);
 router.post("/addScore",addScore);
 router.get("/useBucket",usebucket);



module.exports =router;