const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {type:String,required:true},
    ingredients:{type:String,required:true},
    type:{type:String, default: "medium" },
    cookingTime:{type:String },
    description:{type:String,required:true},
    imgUrl:{type:String,required:true}

})

var dbModel = mongoose.model("recipe", recipeSchema);


