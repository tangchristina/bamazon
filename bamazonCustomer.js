var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "M3lanom@",
  database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    userPrompt();
  });

  function userPrompt() {
    // console.log('___ENTER promptUserPurchase___');
  
    // Prompt the user to select an item
    inquirer.prompt([
      {
        type: 'input',
        name: 'item_id',
        message: 'PLEASE ENTER ITEM ID',
        filter: Number
      },
      {
        type: 'input',
        name: 'stock_quantity',
        message: 'PLEASE ENTER QUANTITY',
        filter: Number
      }
    ]).then(function(input) {
      console.log('Customer has selected: \n    item_id = '  + input.item_id + '\n    quantity = ' + input.stock_quantity);
  
      var itemNeeded = input.item_id;
      var quantityNeeded = input.stock_quantity;
      checkout(itemNeeded, quantityNeeded);
    });
} 
    
function checkout (itemNeeded, quantityNeeded){
      var query = "SELECT * FROM products WHERE ?";
      connection.query(query, { item_id: itemNeeded }, function(err, res) {
        if (err) throw err;
        if(quantityNeeded <= res[0].stock_quantity){
          var totalCost = res[0].price * quantityNeeded;
          console.log("Good news your order is in stock!");
          console.log("Your total cost for " + quantityNeeded + " " +res[0].product_name + " is " + totalCost + " Thank you!");
          connection.query("UPDATE products SET stock_quantity = stock_quantity - " + quantityNeeded + "WHERE item_id = " + itemNeeded);
        } else{
          console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + " to complete your order.");
        };
        userPrompt();
      })
}
  