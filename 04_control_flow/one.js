//  if
// const isUserloggedin = true;
// const temperature = 30;

// if ( temperature === 40) {
//     console.log("less then 50");

// }else{

// console.log("temprature is greater then 50");
// }
// <, >, ,=, >=, <+, ==, !=, ===


// const score =200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user has power: ${power} `);  
// }

// console.log(`user has power: ${power} `);

//short hand notation

//const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2") // it is a impicit scope here we asume that this is in the scope.
// but it is not a good practice to use this.

// if (balance < 500) {
//     console.log("less then 500");
// } else if (balance <750){

//     console.log("less then 750");

// }else if (balance < 900) {

// }else {
//     console.log("less then 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromgoogle  = true
const loggedInFormEmail = true
if(userLoggedIn && (debitcard && loggedInFromgoogle && 2==3)) {
    console.log("allow to buy couesre");
}

if (loggedInFromgoogle || loggedInFormEmail) {
    console.log("allow user to logged in");

}