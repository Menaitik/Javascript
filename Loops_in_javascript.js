// Now we see how to use loops in javascript
//list of loops in javascript
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for in l
// 1 way to use loops in javascript

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

const myStates = ["Rajasthan",
    "Delhi",
    "Assam",
    "Maharashtra",
    1947
];

for(let i=0;i<myStates.length;i++){
    if(typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);
}

//continue keyword is used to skip the current iteration and continue with the next iteration.
//break keyword is used to break the loop.



let i=5;
while(i<=50)
{
    console.log(i);
    i+=5;
}

let j=5;
do{
    console.log(j);
    j+=2;
}while(j>5&&j<=10);


// Now we see for each loop in javascript
// for each is a method of array


myStates.forEach((s) =>(console.log(s)));//this  is much more easier than for loop


// Now we see for in loop and for of loop in javascript

const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"];

//for of majorly used in array
for(const n of names){
    console.log(n);
}

const symbols = {   
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline.in"
};

for(const n in symbols){
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}

