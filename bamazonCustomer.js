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



function start(){
    connection.connect(function(err) {
        if (err) throw err;
        else{
            console.log('connected on port 3306')
        }
    });

    displayInventory();


};

start();

function displayInventory(){
    var query="Select * FROM products";

    connection.query(query, function(err, res) {

		if (err) throw err;

		for (var i = 0; i < res.length; i++) {
			console.log("Product ID: " + res[i].item_id + " || Product Name: " +
						res[i].product_name + " || Price: " + res[i].price);
        }
    })
  setTimeout(() => {
      buyWhat();
  },3000); 
};
        
function buyWhat(){

    inquirer.prompt([{
		name: "item_id",
		type: "input",
		message: "Please enter product ID for the product you would like to buy.",
		validate: function(value) {
			if (isNaN(value) === false) {
                return true;
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
	}]).then(function(answer) {

		// Queries database for selected product.
		var query = "SELECT * FROM products WHERE ?";
		connection.query(query, { item_id: answer.item_id}, function(err, res) {
			
			if (err) throw err;

		if (res.length === 0) {
				console.log(' ')
                console.log('******************************************************');
                console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
                console.log('******************************************************');
				console.log(' ')
				displayInventory();
                

			} else {
				var productData = res[0];

				console.log(productData)
			
	};
})})};

