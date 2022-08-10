const mongoose =require("mongoose");
const Locator = mongoose.model('locator');

const getLocators= function(req,res) {
    Locator.find().exec(function(err, locatorData) {
        if (err) {
            res
            .status(404)
            .json(err);
            return;
        }
        res
        .status(200)
        .json( locatorData );
    });
};

const createLocator = function(req,res) {
    Locator.create({
        branch: req.body.branch,
        address: req.body.address,
        city: req.body.city,
        phone: req.body.phone,
        email: req.body.email,
    }, (err, locatorData) => {
        if (err) {
            res
            .status(400)
            .json(err);
        } else {
            res
            .status(201)
            .json(locatorData);
        }
    });
};

const getSingleLocator = function(req,res) {
    if (req.params && req.params.locatorid) {
        Locator
        .findById(req.params.locatorid)
        .exec((err, locatorData) => {
            if (!locatorData) {
                res
                .status(404)
                .json({
                    "message": "Locator not found"
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
            .json(locatorData);
        });
    } else {
        res
        .status(404)
        .json({
            "message": "No Locator id in given request"
        });
    }
};


const updateLocator = function(req,res) {
    if(!req.params.locatorid) {
        res
        .status(404)
        .json({
            "message": "Not found, locator id is required"
        });
        return;
    }
    Locator.findById(req.params.locatorid)
    .exec((err, locatorData) =>{
        if (!locatorData) {
            res
            .status(404)
            .json({
                "message": "locatorid not found"
            });
            return;
        } else if (err) {
            res
            .status(400)
            .json(err);
            return;
        }
       
        
        locatorData.branch= req.body.branch ? req.body.branch : locatorData.branch;
        locatorData.address= req.body.address ? req.body.address : locatorData.address;
        locatorData.city= req.body.city ? req.body.city : locatorData.city;
        locatorData.phone= req.body.phone ? req.body.phone : locatorData.phone;
        locatorData.email= req.body.email ? req.body.email : locatorData.email;

        locatorData.save((err, locatorData) => {
            if (err) {
                res
                .status(404)
                .json(err);
            } else {
                res
                .status(200)
                .json(locatorData);
            }
        });
    });
};



const deleteLocator  = function(req,res) {
    const locatorid = req.params.locatorid;
    if (locatorid) {
        Locator
        .findByIdAndRemove(locatorid)
        .exec((err, locatorData) => {
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
        .json({"message" : "No locatorid"});
    }};


module.exports= {
    getLocators,
    createLocator,
    getSingleLocator,
    updateLocator,
    deleteLocator
}; 