//singleton

//object literals

const mySym = Symbol("key1")
const JsUser ={
name: "mayank",
"full name": "mayank Upadhyay",
[mySym]: "myKey1",
age: 21,
location: "delhi",
hobbies: ["gaming", "reading"],     
email: "mayank@gmail.com",
isLoggedIn: false,
isLogginDays: ["Monday" , "Saturday"]
}

// console.log(JsUser.email) // Accessing object property
// console.log(JsUser["email"]) 
// console.log(JsUser["full name"]) 
// console.log(typeof JsUser[mySym]) // undefined
// console.log(JsUser) // undefined;

JsUser.email = "mayank@chatgpt.com" // Accessing object property
//Object.freeze(JsUser)
JsUser.email = "mayank@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){   
    console.log("hello mayank")
}
JsUser.greetingtwo = function(){   
    console.log(`hello mayank ${this.name}`)   
}

console.log(JsUser.greeting()) // hello mayank
console.log(JsUser.greetingtwo()) // hello mayank mayank Upadhyay;
