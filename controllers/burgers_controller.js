var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();



// routes

// get all burgers
router.get("/", function (req, res) {
    burger.selectBurgers(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// Add new burger to the db.
router.post("/api/burgers", function (req, res) {
    burger.insertBurger([req.body.burger_name], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});
// Set burger devoured status to true.
router.put("/api/burgers/:id", function(req, res) {
    var condition =req.params.id;

    burger.devourBurger(condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;