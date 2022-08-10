const mongoose = require('mongoose');

var chef = new mongoose.Schema({
    name: {type:String,required:true},
    description:{type:String,required:true},
    imgUrl:{type:String,required:true}
});

var food = new mongoose.Schema({
    name: {type:String,required:true},
    type:{type:String,required:true},
    quantity:{type:String },
    discount:{type:String },
    total:{type:String,required:true}
});

var store = new mongoose.Schema({
    branch: {type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true },
    phone:{type:String,required:true },
    email:{type:String,required:true}
});

var recipe = new mongoose.Schema({
    title: {type:String,required:true},
    ingredients:{type:String,required:true},
    type:{type:String, default: "medium" },
    cookingTime:{type:String },
    description:{type:String,required:true},
    imgUrl:{type:String,required:true}

});

var user = new mongoose.Schema({
    username: {type:String,required:true,min:3},
    password:{type:String,required:true}
});

var restaurantSchema = new mongoose.Schema({
    
})