var express = require('express');
var router = express.Router();
const ctrlUser = require("../controllers/user");


router.post('/login',ctrlUser.loginUser);


module.exports = router;