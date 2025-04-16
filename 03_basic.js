

function myName() {
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
}
  // myName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
//}

function addTwoNumber(number1, number2) {

    // let result = number1 + number2
    // console.log("mayank"); // undefined
    // return result
     return number1 + number2 // undefined
    
}

const result = addTwoNumber(2,5)
// console.log("Result: ", result); // undefined


function loginUserMessage(username ="mayank") {
 if(!username){
   console.log("plese provide a username");
   return // undefined
  }
  return `${username} just logged in` // undefined
}

// console.log(loginUserMessage("mayank")) // undefined
console.log(loginUserMessage("satyam")) // mayank just logged in
