const mongoose = require('mongoose');

const storeLocator = new mongoose.Schema({
    branch: {type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true },
    phone:{type:String,required:true },
    email:{type:String,required:true}

})

var dbModel = mongoose.model("locator", storeLocator);


