const mongoose =require("mongoose");
const Food = mongoose.model('foods');

const getFoods= function(req,res) {
    Food.find().exec(function(err, foodData) {
        if (err) {
            res
            .status(404)
            .json(err);
            return;
        }
        res
        .status(200)
        .json( foodData );
    });
};


const createFood = function(req,res) {
    Food.create({
        name: req.body.name,
        type: req.body.type,
        quantity: req.body.quantity,
        discount: req.body.discount,
        total: req.body.total
    }, (err, foodData) => {
        if (err) {
            res
            .status(400)
            .json(err);
        } else {
            res
            .status(201)
            .json(foodData);
        }
    });
};

const getSingleFood = function(req,res) {
    if (req.params && req.params.foodid) {
        Food
        .findById(req.params.foodid)
        .exec((err, foodData) => {
            if (!foodData) {
                res
                .status(404)
                .json({
                    "message": "Food not found"
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
            .json(foodData);
        });
    } else {
        res
        .status(404)
        .json({
            "message": "No Food id in given request"
        });
    }
};


const updateFood = function(req,res) {
    if(!req.params.foodid) {
        res
        .status(404)
        .json({
            "message": "Not found, food id is required"
        });
        return;
    }
    Food.findById(req.params.foodid)
    .exec((err, foodData) =>{
        if (!foodData) {
            res
            .status(404)
            .json({
                "message": "foodid not found"
            });
            return;
        } else if (err) {
            res
            .status(400)
            .json(err);
            return;
        }

        
        foodData.name= req.body.name ? req.body.name : foodData.name;
        foodData.type= req.body.type ? req.body.type : foodData.type;
        foodData.quantity= req.body.quantity ? req.body.quantity : foodData.quantity;
        foodData.discount= req.body.discount ? req.body.discount : foodData.discount;
        foodData.total= req.body.total ? req.body.total : foodData.total;

        foodData.save((err, foodData) => {
            if (err) {
                res
                .status(404)
                .json(err);
            } else {
                res
                .status(200)
                .json(foodData);
            }
        });
    });
};



const deleteFood  = function(req,res) {
    const foodid = req.params.foodid;
    if (foodid) {
        Food
        .findByIdAndRemove(foodid)
        .exec((err, foodData) => {
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
        .json({"message" : "No foodid"});
    }};


module.exports= {
    getFoods,
    createFood,
    getSingleFood,
    updateFood,
    deleteFood
}; 