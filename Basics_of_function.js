// Declaration of function

function sayHello(name){
    console.log("Hello there Naitik");
    console.log(`Hello there, ${name}. How are you?`);// very important
}

// Calling a function
// when we only refer the function we not use parenthesis
// when we call the function we use parenthesis
// referring a function means we are not calling it but we are just referring it means we are just telling the name of the function

sayHello("naitik");
sayHello("Sammy");


function namaste(){
    return "Hello in India";
}

// returning function means we are returning the value of the function

var greetings = namaste();//part of functional programming
console.log(greetings);