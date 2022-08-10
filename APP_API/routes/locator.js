var express = require('express');
var router = express.Router();
const ctrlLocator = require("../controllers/locator");


router.get('/locator',ctrlLocator.getLocators);
router.post('/locator',ctrlLocator.createLocator);
router.get('/locator/:locatorid',ctrlLocator.getSingleLocator);

router.put('/locator/:locatorid',ctrlLocator.updateLocator);

router.delete('/locator/:locatorid',ctrlLocator.deleteLocator);


module.exports = router;