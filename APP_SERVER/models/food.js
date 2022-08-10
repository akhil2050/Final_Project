const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    type:{type:String,required:true},
    quantity:{type:String },
    discount:{type:String },
    total:{type:String,required:true}

})

var dbModel = mongoose.model("foods", foodSchema);


