var temperature;

// TODO : Go to google and get data

temperature = 20;

if (temperature < 20) {
    console.log("It's very cold outside");
}

if (temperature < 30) {
    console.log("It's moderate outside");
}


// allow user to access course if he:
//  logged in from email
// logged in from google
// logged in from facebook


var email1 = "naitik@gmail.com";
var password = "123456";

var isLoggedInFromEmail = false;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = false;


// if(isLoggedInFromEmail) {
//     console.log("Course accessed Logged in from Email");
// }
// else if(isLoggedInFromGoogle) {
//     console.log("Course accessed Logged in from Google");
// }
// else if(isLoggedInFromFacebook) {
//     console.log("Course accessed Logged in from Facebook");
// }

// OR

if(isLoggedInFromEmail || isLoggedInFromGoogle || isLoggedInFromFacebook) {
    console.log("Course accessed");
}
else {
    console.log("Course access denied");
}