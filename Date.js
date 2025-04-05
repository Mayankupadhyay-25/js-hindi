// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // date in string format
// console.log(myDate.toTimeString()); // time in string format
// console.log(myDate.toLocaleString()); // date and time in string format
// console.log(myDate.toLocaleDateString()); // date in string format  
// console.log(typeof myDate); // type of date)    

// let myCreatedDate = new Date( 2023 , 0 , 24 , 5 ,6 )
// console.log(myCreatedDate.toLocaleString()); // date in string format

let myCreatedDate = new Date("2023-03-24")
// console.log(myCreatedDate.toLocaleString()); // date in string format

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // date in string format
// console.log(myCreatedDate.getTime()); // date in string format
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()}`;

newDate.toLocaleString('default', {  
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).split(' ')[0]
; 
