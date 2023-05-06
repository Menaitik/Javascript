//  Scope chaining is the process of searching all the scopes for the variable and its value. means if the variable is not found in the local scope then it will search for the variable in the parent scope and if it is not found in the parent scope then it will search for the variable in the grandparent scope and so on. 

// parent scope does not have access to the child scope but child scope has access to the parent scope.

// in javascript {} not truely defines the scope but function defines the scope.

var name = "Naitik";
console.log("Line number 1", name);

function sayName() {
    var name = "Mr. N";
    console.log("Line number 5", name);
    sayNameTwo();

    function sayNameTwo() {
        var name = "Mr. Naitik";
        console.log("Line number 10", name);
    }
}

sayName();