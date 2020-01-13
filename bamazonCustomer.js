var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'root',
	database: 'bamazon'
});

connection.connect(function(err) {
    if (err) throw err;
    else{
        console.log('connected on port 3306')
    }
});

function diplayInventory(){
    var query="Select * FROM products";

    connection.query(query, function(err, res) {

		if (err) throw err;

		for (var i = 0; i < res.length; i++) {
			console.log("Product ID: " + res[i].item_id + " || Product Name: " +
						res[i].product_name + " || Price: " + res[i].price);
        }
    })
    buyWhat();
};

diplayInventory();
        
function buyWhat(){
    inquirer.prompt([{
		name: "productID",
		type: "input",
		message: "Please enter product ID for the product you would like to buy.",
		validate: function(value) {
			if (isNaN(value) === false) {
                return true;
                // console.log('Please enter a valid ID');
			}
			return false;
		}
	}, {
		name: "howMany",
		type: "input",
		message: "How many of this item would you like to purchase?",
		validate: function(value) {
			if (isNaN(value) === false) {
				return true;
			}
			return false
		}
	}])
}

    