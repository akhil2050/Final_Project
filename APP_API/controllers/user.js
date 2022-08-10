const mongoose =require("mongoose");
const User = mongoose.model('users');

const loginUser = function(req,res) {
    User.findOne( { username : req.body.username, password: req.body.password }).exec(function(err, loginData) {
        if (err) {
            res
            .status(404)
            .json(err);
            return;
        }
        if(loginData) {
            res
            .status(200)
            .json({"data" : "SUCCESS"} );
        } else {
            res
            .status(200)
            .json({"data" : "user name and password does not match"} );
        }
        
    });
};


module.exports= {
    loginUser
}; 