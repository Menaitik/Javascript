// In this we will see how to fill and filter an array

var testArray = [2,4,6,3,1,5,9,8];

// console.log(testArray.fill("h"));//fill function is used to fill the array with a value

console.log(testArray.fill("h",2,5));//fill function is used to fill the array with a value 
// //it takes three arguments first is the value to be filled second is the index from where to start filling and third is the index where to stop filling
// last is not included 


// now we will see how to filter an array
const myNumber = [23,24,25,55,66,77,87,98];

const result = myNumber.filter((num) => num > 55);//filter function is used to filter the array

console.log(result);