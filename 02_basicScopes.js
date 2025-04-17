let  a = 300
//globle scope

if (true) {
let a= 44
const b = 45
//var c = 35
//blockscopes
console.log("INNER: ", a) // 44;
}

console.log(a) // 44
//console.log(b) // 45 
// console.log(c) // 35       ;
