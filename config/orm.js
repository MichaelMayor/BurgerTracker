var connection = require("connection.js");

var orm = {
    selectAll: function() {
        let query = "SELECT * FROM burgers";
        connection.query(query, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function(burgerName) {
        let query = "INSERT into burgers (burger_name) VALUES (?)";
        connection.query(query, [burgerName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function(oldBurgerName, newBurgerName) {
        let query = 'UPDATE burgers SET burger_name=? WHERE burger_name=?';
        connection.query(query, [oldBurgerName, newBurgerName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;