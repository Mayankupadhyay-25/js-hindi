let  a = 300
//globle scope

if (true) {
let a= 44
const b = 45
//var c = 35
//blockscopes
// console.log("INNER: ", a) // 44;
}

// console.log(a) // 44
//console.log(b) // 45 
// console.log(c) // 35       ;


function one(){
    const username = "mayamk"

    function two(){
        const website = "youtube";
    //     console.log(username); // mayamk
     }
    //console.log(website); // undefined

    two()
    
}
//  one()

if (true){
        const username =  "mayank" 
        if (username ==="mayank") {
            const website = " youtube.com"
            //console.log(username + website); // undefined
        }
        // console.log(website); // undefined
}
//console.log(username); // undefined



//+++++++++++++++++ interesting ++++++++++++++++

console.log(addone(5))// 6

function  addone(num){
    return num + 1

}
 
(addTwo(5)) 

const addTwo = function(num){
    return num + 2
}       


