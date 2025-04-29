const userEmail = []

if (userEmail) {
  console.log("User email is present");
}   else {
  console.log("User email is not present");
}

//falsy values

// -0, 0, "", undefined, BigInt 0n, null, NaN, false
// falsy values are those which are not true or not present in the code.

//truthyValues 

// -1, "0", " ", [], {}, true, BigInt 1n, Symbol(), function(){}
// truthy values are those which are true or present in the code.

// if (userEmail.length === 0 ){
//     console.log("array is empty"); 
// }

const emptyObj = {}

    if (Object.keys(emptyObj).length === 0) {
        console.log("object is empty"); 
    } 

//nullish coalescing operator (??): Null undefine

let val1;
// val1 =5 ?? 10
//  val1 =null ?? 10
//  val1 =undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1); // 5

// Terniary Operator

// (condition) ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console. log("less then 80"): console.log  ("more then 80")