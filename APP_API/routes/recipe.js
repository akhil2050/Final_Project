var express = require('express');
var router = express.Router();
const ctrlRecipe = require("../controllers/recipe");


router.get('/recipes',ctrlRecipe.getRecipes);
router.post('/recipes',ctrlRecipe.createRecipe);
router.get('/recipes/:recipeid',ctrlRecipe.getSingleRecipe);

router.put('/recipes/:recipeid',ctrlRecipe.updateRecipe);

router.delete('/recipes/:recipeid',ctrlRecipe.deleteRecipe);


module.exports = router;