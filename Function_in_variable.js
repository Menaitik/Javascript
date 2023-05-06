// Define a function that can answer the role of a user.
// A user can be on following roles:
// admin - with all access  
// Sub_admin- with access to create/delete courses
// test_prep - with access to create/delete tests
// user - consume all content
// other - trial user
// Input: getUserRole(name, role)


var getUserRole = function(name, role) {
// this is called function in variable
    if (role == "admin") {
        return `${name} is admin with all access`
    }
    else if (role == "subdomain") {
        return `${name} is sub_admin with access to create/delete courses`
    }
    else if (role == "test_prep") {
        return `${name} is test_prep with access to create/delete tests`
    }
    else if (role == "user") {
        return `${name} is user to consume all content`
    }
    else {
        return `${name} is a trial user`
    }
}

// function getUserRole(name, role) {
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all access`
//             break // break is not necessary because return will stop the function
//         case "subdomain":
//             return `${name} is sub_admin with access to create/delete courses`
//         case "test_prep":
//             return `${name} is test_prep with access to create/delete tests`
//         case "user":
//             return `${name} is user to consume all content`
//         default:
//             return `${name} is a trial user`
//     }
// }

console.log(getUserRole("Naitik", "admin"));
console.log(getUserRole("Sammy", "test_prep"));
console.log(getUserRole("Naitik", "user"));
console.log(getUserRole("Naitik", "other"));
console.log(getUserRole("Naitik", "subdomain"));

