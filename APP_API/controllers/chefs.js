const mongoose =require("mongoose");
const Chef = mongoose.model('chefs');

const getAllChef= function(req,res) {
    Chef.find().exec(function(err, chefData) {
        if (err) {
            res
            .status(404)
            .json(err);
            return;
        }
        res
        .status(200)
        .json( chefData );
    });
};

const createChef = function(req,res) {
    Chef.create({
        name: req.body.name,
        description: req.body.description,
        imgUrl: req.body.imgUrl
    }, (err, chefData) => {
        if (err) {
            res
            .status(400)
            .json(err);
        } else {
            res
            .status(201)
            .json(chefData);
        }
    });
};

const getSingleChef = function(req,res) {
    if (req.params && req.params.chefid) {
        Chef
        .findById(req.params.chefid)
        .exec((err, chefData) => {
            if (!chefData) {
                res
                .status(404)
                .json({
                    "message": "Chef not found"
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
            .json(chefData);
        });
    } else {
        res
        .status(404)
        .json({
            "message": "No chef id in given request"
        });
    }
};


const updateChef = function(req,res) {
    if(!req.params.chefid) {
        res
        .status(404)
        .json({
            "message": "Not found, chef id is required"
        });
        return;
    }
    Chef.findById(req.params.chefid)
    .exec((err, chefData) =>{
        if (!chefData) {
            res
            .status(404)
            .json({
                "message": "Chef id not found"
            });
            return;
        } else if (err) {
            res
            .status(400)
            .json(err);
            return;
        }

        chefData.name= req.body.name ? req.body.name : chefData.name;
        chefData.description= req.body.description ? req.body.description : chefData.description;
        chefData.imgUrl= req.body.imgUrl ? req.body.imgUrl : chefData.imgUrl;

        chefData.save((err, chefData) => {
            if (err) {
                res
                .status(404)
                .json(err);
            } else {
                res
                .status(200)
                .json(chefData);
            }
        });
    });
};



const deleteChef  = function(req,res) {
    const chefid = req.params.chefid;
    if (chefid) {
        Chef
        .findByIdAndRemove(chefid)
        .exec((err, chefData) => {
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
        .json({"message" : "No chefid"});
    }};


module.exports= {
    getAllChef,
    getSingleChef,
    createChef,
    updateChef,
    deleteChef
}; 