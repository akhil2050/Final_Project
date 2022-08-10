const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type:String,required:true,min:3},
    password:{type:String,required:true}
})

var dbModel = mongoose.model("users", userSchema);


