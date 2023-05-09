// this keyword in javascript is a reference variable which holds the reference of the current execution context.

// TODO part 1 for this keyword

console.log(this);

// For all regular function calls, this points to window object.

console.log(this);


var user = {    
    firstName : "Naitik",
    courseCount : 4,
    getCourseCount : function () {  
        console.log("Line 16", this);
    },
};
user.getCourseCount();//this is not a regular function call this is a method call

//so in regular function call this points to window object but in method call this points to the object which is calling the method