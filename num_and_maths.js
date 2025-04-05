const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length); // binary
//console.log(balance.toFixed(5)); // format to 5 decimal places
//console.log(balance.toFixed(2));

const otherNumber = 26.3545

//console.log(otherNumber.toPrecision(3)); // format to 2 decimal places

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-US')); // format to US locale
//console.log(hundreds.toLocaleString('en-IN')); 

//+++++++++++++++++++++++ Matahs +++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-2));//convert the negetive value in positive value
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));    // round up the value
console.log(Math.floor(4.3)); // round down the value
console.log(Math.sqrt(64)); // square root of number
console.log(Math.pow(2, 3)); // power of number 
console.log(Math.max(2, 3, 4, 5, 6)); // maximum value of number
console.log(Math.min(2, 3, 4, 5, 6)); // minimum value of number
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // random number between 0 and 10
console.log(Math.floor(Math.random() * 50)); // random number between 0 and 100
console.log(Math.floor(Math.random() * 100)); // random number between 0 and 100
 console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 100    

const min =10
const max = 20

console.log (Math.random() * (max - min + 1))  // random number between 10 and 20
console.log (Math.floor (Math.random() * (max - min + 1)) + min) // random number between 10 and 20

