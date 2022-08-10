const mongoose =require("mongoose");
const Recipe = mongoose.model('recipe');

const getRecipes= function(req,res) {
    Recipe.find().exec(function(err, recipeData) {
        if (err) {
            res
            .status(404)
            .json(err);
            return;
        }
        res
        .status(200)
        .json( recipeData );
    });
};

const createRecipe = function(req,res) {
    Recipe.create({
        title: req.body.title,
        ingredients: req.body.ingredients,
        type: req.body.type,
        cookingTime: req.body.cookingTime,
        description: req.body.description,
        imgUrl: req.body.imgUrl
    }, (err, recipeData) => {
        if (err) {
            res
            .status(400)
            .json(err);
        } else {
            res
            .status(201)
            .json(recipeData);
        }
    });
};

const getSingleRecipe = function(req,res) {
    if (req.params && req.params.recipeid) {
        Recipe
        .findById(req.params.recipeid)
        .exec((err, recipeData) => {
            if (!recipeData) {
                res
                .status(404)
                .json({
                    "message": "Recipe not found"
                });
                return;
            } else if (err) {
                res
                .status(404)
                .json(err)
                return;
            }
            res
            .status(200)
            .json(recipeData);
        });
    } else {
        res
        .status(404)
        .json({
            "message": "No Recipe id in given request"
        });
    }
};


const updateRecipe = function(req,res) {
    if(!req.params.recipeid) {
        res
        .status(404)
        .json({
            "message": "Not found, recipe id is required"
        });
        return;
    }
    Recipe.findById(req.params.recipeid)
    .exec((err, recipeData) =>{
        if (!recipeData) {
            res
            .status(404)
            .json({
                "message": "recipeid not found"
            });
            return;
        } else if (err) {
            res
            .status(400)
            .json(err);
            return;
        }

        recipeData.title= req.body.title ? req.body.title : recipeData.title;
        recipeData.ingredients= req.body.ingredients ? req.body.ingredients : recipeData.ingredients;
        recipeData.type= req.body.type ? req.body.type : recipeData.type;
        recipeData.cookingTime= req.body.cookingTime ? req.body.cookingTime : recipeData.cookingTime;
        recipeData.description= req.body.description ? req.body.description : recipeData.description;
        recipeData.imgUrl= req.body.imgUrl ? req.body.imgUrl : recipeData.imgUrl;

        recipeData.save((err, recipeData) => {
            if (err) {
                res
                .status(404)
                .json(err);
            } else {
                res
                .status(200)
                .json(recipeData);
            }
        });
    });
};



const deleteRecipe  = function(req,res) {
    const recipeid = req.params.recipeid;
    if (recipeid) {
        Recipe
        .findByIdAndRemove(recipeid)
        .exec((err, recipeData) => {
            if (err) {
                res
                .status(404)
                .json(err);
                return;
            }
            res
            .status(204)
            .json(null);
        });
    } else {
        res
        .status(404)
        .json({"message" : "No recipeid"});
    }};


module.exports= {
    getRecipes,
    createRecipe,
    getSingleRecipe,
    updateRecipe,
    deleteRecipe
}; 