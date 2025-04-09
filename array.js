// Array

const myArr = [0, 2, 3, 4, 5,]
const myHeros = ['Ironman', 'Thor', 'Hulk', 'Captain America']

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//console.log(myArr[1]);

// Array Methods

// myArr.push(6) // Add to the end of the array
// myArr.push(7)
// myArr.pop() // Remove from the end of the array

// myArr.unshift(0) // Add to the beginning of the array
// myArr.shift()

//console.log (myArr.includes(9)); // Check if the array includes a value
//console.log(myArr.indexOf(3)); // Get the index of a value

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr); // Convert array to string

// slice,splice

console.log("A ", myArr); // Slice the array from index 0 to 3 (not included)

const myn1 = myArr.slice(1,3) // Slice the array from index 1 to 3 (not included)

console.log(myn1);
console.log("B ", myArr); // Original array remains unchanged

const myn2 = myArr.splice(1,3)
console.log("C ", myArr); 
console.log(myn2);