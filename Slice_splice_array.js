//Now we see how to slice and splice an array
// start point is included and end point is not included

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1,4));//slice function is used to slice the array means to cut the array from a point to another point

// now we will see how to splice an array

users.splice(1,4,"HI","Bye","LOL");//splice function is used to splice the array means to cut the array from a point to another point and also add some elements in the array first argument is the starting point second is the number of elements to be removed and third is the element to be added
console.log(users);