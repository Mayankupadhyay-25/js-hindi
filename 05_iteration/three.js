// for of

// ["",  "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr){
    //console.log(num)
}

const greetings ="hello worlg"
for (const greet of greetings){ 
   // console.log(`each char is ${greet}`)
    
}

//maps   

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "france")
map.set('IN', "INDIA")

//console.log(map);

for (const [key, value]of map){

   // console.log(key, ':-' , value);
}

const myobject = {
    'game1': 'NFS',
    'game2': 'FIFA', 
    'game3': 'PUBG',  
} 
 for (const [key, value] of myobject){
  
      console.log(key, ':-', value);
    

 }


