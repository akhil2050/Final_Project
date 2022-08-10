var express = require('express');
var router = express.Router();
const ctrlChef = require("../controllers/chefs");


router.get('/chef',ctrlChef.getAllChef);
router.post('/chef',ctrlChef.createChef);
router.get('/chef/:chefid',ctrlChef.getSingleChef);

router.put('/chef/:chefid',ctrlChef.updateChef);

router.delete('/chef/:chefid',ctrlChef.deleteChef);


module.exports = router;