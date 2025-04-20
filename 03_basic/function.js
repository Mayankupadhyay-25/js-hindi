

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
//console.log(loginUserMessage("satyam")) // mayank just logged in


function calculateCartPrice(...num1) {
  return num1
}
// console.log(calculateCartPrice(200,300,400,3557));


const user = {
  username: "mayank",
  price: 299,
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
  username: "satyam",
  price: 599,
})

const myArray = [200,300,500,100]

function returnSecondValu(getArray) {
  return getArray[1]  // undefined

}
// console.log(returnSecondValu(myArray)); // 300
console.log(returnSecondValu([200,300,500,1000])); // 300