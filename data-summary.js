// primitive

// 7 type : String, Number, Boolearn, Null, Undefined, 
// Symbol, BigInt

/* 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')


console.log(id === anotherid);


//const bigNumber = 56465465453n


// Refrence (Non primitive )

// array, Object, Function 

const heros = ["shaktman", "naagraj","doga" ]
 let myObj = {
    name:"mayank",
    age: 21,
}

const myfunction = function(){
    console.log("hello world");

}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myfunction);
console.log(heros);
console.log(myObj);
*/

//  +++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), heap (non-primitive)

let myName = "mayank"

let anothername = myName
anothername ="satyam"

console.log(myName);
console.log(anothername);

let userOne = {
    email: "magank@gamil.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email
console.log(userOne.email);
console.log(userTwo.email);




