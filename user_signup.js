const uid ="abc123";
var firstName = "Naitik";
var lastName = "Mehta"; 
var fullName = "Naitik Mehta";
var email = "naitik@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = false;

// fullName = prompt("Enter your full name");
console.log("Your id is: "+uid)
console.log("Full name is: ",fullName)
console.log(email)

//best way
console.log(`
With Unique ID : ${uid}
User is : ${firstName} s${lastName}
and his Email is : ${email}
and uses the password :   ${password}

`);
