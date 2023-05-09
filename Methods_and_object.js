//Now we see Methods and object in javascript

//object is the backbone of javascript 

var user = {
    firstName : "Naitik",
    lastName : "Mehta",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {//this is the way to define a function in an object
        this.courseList.push(courseName);
    },//this is the way to access the object in the object this refer to current context

    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    }
};
var courseList = true;
console.log(user.firstName);//this is the way to access the object
// . is used to access the object
console.log(user.getCourseCount());//this is the way to access the function in the object
user.buyCourse("React JS course");
console.log(user.getCourseCount());

console.log(user["lastName"]);//this is the another way to access the object but this is not used much

//we can also change the value of the object
user.loginCount = 44;
console.log(user.loginCount);
//dumped out all the values of the object
console.table(user);


var student = {
    firstName : "Naitik",
    lastName : "Mehta",
    ID : 32,
    course : "B.Tech",
    college : "NIT",
    isPassed : true,
};

console.table(student);