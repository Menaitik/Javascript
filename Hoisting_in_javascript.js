// Context help you to understand the weired behaviour of hoisting in javascript.

// Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.

//Global context collecting everything information about the program and then execute it.

//Execution context is created in two phases:
// 1. Creation phase
// 2. Execution phase

// Features of Global context:
// Function declarations are scanned and made available
// Variable declarations are scanned and made undefined
tipper("80");
function tipper(a) {
    var bill = parseInt(a);//parseInt is a function which convert string to integer
    console.log(bill + 5);
}
// bigTipper("200");
var bigTipper =  function (a) {
    //now this function is not available in the global context because it is a variable and it is not hoisted
    var bill = parseInt(a);
    console.log(bill + 15);
}
bigTipper("200");


var name = "Naitik";
console.log(name);

// if there are two name variable in the program then the local variable will be given priority over the global variable means execution context will first search for the local variable and if it is not found then it will search for the global variable.
