var mysql = require("mysql");
var inquirer = require("inquirer");


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 8080
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  shop();
});


function shop() {
  
  var questions = {
    name: "addOrPlace",
    type: "rawlist",
    message: "Would you like to [ADD] an item to your cart or [PLACE] an order?",
    choices: ["ADD", "PLACE", "EXIT"]
  };

  inquirer.prompt(questions).then(function(answer) {
      
      if (answer.addOrPlace.toUpperCase() === "ADD") {
        addtoCart();
      }
      else if(answer.addOrPlace.toUpperCase() === "PLACE") {
        placeOrder();
      } else {
        // Exit
        connection.end();
        return;
      }
    });
}


function addtoCart() {
    //var cost = price * quantity;
  
  
  var questions = [
    {
      name: "item",
      type: "input",
      message: "What is the item you would like to add to your Cart?"
    },
    {
      name: "quantity",
      type: "input",
      message: "How many do you want to buy for that item?"
    },
    { name: "price",
      type: "operator",
      message: "Total so far:" + cost,
      
      validate: function(cost) {
        if (isNaN(cost) === false) {
          return true;
        }
        return false;
      }
    }
  ];

  inquirer.prompt(questions).then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      
      var sqlString = "INSERT INTO  products SET ?";
      var cart = {
        product_name: answer.product,
        price: answer.price,
        stock_quantity: answer.quantity
      };
      connection.query(sqlString, cart, function(err) {
          if (err) throw err;
          console.log("Your items were placed into your cart successfully!");
          
          shop();
        }
      );
    });
}

function placeOrder() {
  
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;

    // setup an array of "choices" from the db results
    var cartArray = [];
    for (var i = 0; i < results.length; i++) {
      // push into the array a string like this: "2: Car"
      cartArray.push(results[i].id + ": " + results[i].item_name);
    }

    
    inquirer.prompt([
        {
          name: "ready",
          message: "Are you ready to order?",
          choices: ["YES", "NO"]
         
        },
        {
          name: "pay",
          type: "input",
          message: "How would like to pay for the order?",
          choices:["CASH", "CARD"]
        }
      ])
      .then(function(answer) {

        var order;
        
        // destruct the anser.choice from string ("2: Car") into id and item_name
        var components = answer.choice.trim().split(':');
        for (var i = 0; i < results.length; i++) {
          // test if results id = the first element of the components array (ie: the id)
          if (results[i].id === parseInt(components[0])) {
            order = results[i];
          }
        }

        
        if (chosenItem.highest_bid < parseInt(answer.bid)) {
          
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                cash: answer.cash
              },
              {
                card: answer.card
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Your order was placed successfully!");
              placeOrder();
            }
          );
        }
        else {
          // apologize and start over
          console.log("There is an error");
          placeOrder();
        }
      });
  });
}
