var orm = require("../config/orm.js");

var burger = {
    // Display all burgers in the database
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // Add a new burger to the database
    insertOne: function (vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function (res) {
            cb(res);
        });
    },
    // Update burger in database
    changeBurger: function (newBurgerName, oldBurgerName, cb) {
        let objColVals = "{burger_name: " + newBurgerName + "}";
        let condition = "burger_name=" + oldBurgerName;
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    // set burger to devoured
    devourBurger: function (burgerName, cb) {
        let objColVals = "{devoured: true}";
        let condition = "burger_name=" + burgerName;
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;