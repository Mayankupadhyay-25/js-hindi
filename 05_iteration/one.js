// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("Found 5!");   
//     }
//     console.log(element);
// }
       
//console.log(element);


for (let i = 0; i <= 10 ; i++) {
    //console.log(`outer loops value: ${i}`);
    for (let j = 0; j <= 10; j++) {
     //console.log(`inner loops value: ${j}and the inner loop${i}`);
    //console.log(i + '*' + j + '=' + i * j);
    
    }
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
      
}

//  break and continue

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        //console.log("found 5")
        break; // exit the loop
    }
    //console.log(`value of i is ${index} `)
    
}
// continue statement

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log("found 5")
        continue; // exit the loop
    }
    console.log(`value of i is ${index} `)
}