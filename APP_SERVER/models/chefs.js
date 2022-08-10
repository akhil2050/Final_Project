const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description:{type:String,required:true},
    imgUrl:{type:String,required:false}
})

var dbModel = mongoose.model("chefs", chefSchema);


