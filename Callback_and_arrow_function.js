// function isEven(number) {
//     // if (number % 2 === 0) {
//     //     return true;
//     // }   
//     // return false;   
    
//     // OR
//     return number % 2 === 0;// best way to write this code 
// }

var isEven = (number)=> {// => is called arrow function works same as function because it is a function in arrow function return is required
    return number % 2 === 0;
};
console.log(isEven(3));

//callback function they have no name but they are passed as an argument to another function
// var result = [2,3,6,8].every(isEven);//every is a callback function here we passed reference of isEven function
// every give true if all the elements of array are even

// console.log(result);

//now we will use callback function with arrow function

var result = [2,4,6,8].every((e)=>// e is a parameter of arrow function    
     e % 2 === 0
); //if we not using return keyword then we have to remove curly braces and write code in one line
console.log(result);