const user ={
    name: "mayank",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to wensite`);
    }

}

// user.welcomeMessage() // undefined 
// user.username = "satyam "
// user.welcomeMessage() // undefined
// console.log(this);

// const chai = () => {
//     let username = "mayank"
//     console.log(this);
// }

//   chai() // undefined

//   const addTwo = (num1, num2) =>{
//     return num1 + num2
//   }


// const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) =>  {username:"mayank"}
    
  
  console.log(addTwo(2,3)); // 5