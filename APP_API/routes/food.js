var express = require('express');
var router = express.Router();
const ctrlFood = require("../controllers/food");


router.get('/food',ctrlFood.getFoods);
router.post('/food',ctrlFood.createFood);
router.get('/food/:foodid',ctrlFood.getSingleFood);

router.put('/food/:foodid',ctrlFood.updateFood);

router.delete('/food/:foodid',ctrlFood.deleteFood);


module.exports = router;