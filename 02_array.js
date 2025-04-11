const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["batman", "superman", "wonderwoman"];

marvel_heros.push(dc_heros); // Add dc_heros to the end of marvel_heros

// console.log(marvel_heros); // ["thor", "ironman", "spiderman", ["batman", "superman", "wonderwoman"]]
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros); // Concatenate dc_heros to marvel_heros
// console.log(marvel_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros]; // Spread operator to combine arrays          

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6 ], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("mayank"))
console.log(Array.from("mayank")) // Convert string to array
console.log(Array.from({name: "mayank", age: 21})) // Convert object to array   

let score1 = 100
let score2 = 200
let score3 = 300    

console.log(Array.of(score1, score2, score3)) // Convert variables to array