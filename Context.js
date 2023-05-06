 sayHello();//this will work because of global context in other language it will not work 

 function sayHello() {
    console.log('Hello');  
    } //this function wrapped in global context so that it can be called anywhere in the program

    if(2 == "2") {
    console.log('This is true');
    }
    else {
        console.log('This is false');
    }

    var myName = "Naitik";
    if(myName === window.myName) {
        // window is not defined in nodejs it is defined in browser it is a global object
        console.log('This is again a true statement');
    }
