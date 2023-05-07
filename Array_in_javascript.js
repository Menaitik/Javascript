// An array is a special variable, which can hold more than one value at a time.

// Declaring an array:
// var cars = ["Saab", "Volvo", "BMW"];

var countries = ["India", "USA", "Japan", "Russia", "China"];

// new approach to create an array using new keyword:


var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

// accessing the array elements:

console.log(states[0]);
console.log(states.length);

for(let i=0;i<states.length;i++){
    console.log(states[i]);
}

// replace an element in an array:

states[0] = "Punjab";


var user = ["Naitik", "naitik@123",3,34,true];
console.log(user);

// but this is not a good practice to store different types of data in an array.
// the best practice is to store the data in an object.


// dump out the start and end elements of an array: using pop and push methods

user.pop();
user.pop();//pop method removes the last element of an array
console.log(user);
user.push("false");//push method adds the element at the end of an array
console.log(user);

user.unshift("New value");//unshift method adds the element at the start of an array
console.log(user);

user.shift();//shift method removes the first element of an array   

console.log(user);

console.log(user.indexOf(3));//indexOf method returns the index of the element in an array

// returns -1 if the element is not present in the array

console.log(Array.from("Naitik"));//Array.from method converts the string into an array or we can convert any iterable object into an array using this method