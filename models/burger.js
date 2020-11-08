var orm = require("../config/orm.js");

var burger = {
    // Display all burgers in the database
    selectBurgers: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // Add a new burger to the database
    insertBurger: function (vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function (res) {
            cb(res);
        });
    },
    // set burger to devoured
    devourBurger: function (burgerID, cb) {
        let objColVals = {devoured: true};
        let condition = "id=" + burgerID;
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export
module.exports = burger;