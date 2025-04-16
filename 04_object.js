// const tinderuser  =new object()
const tinderUser = {}

tinderUser.id = "1324abc"
tinderUser.name = "mayank"
tinderUser.isloggedIn = false  

// console.log(tinderUser);

const regularUser = {
    email:"khushi@gmail.com",
    fullname: {
        userfullname : {
            firstname: "khushi",
            lastname: "pandit"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname); // khushi

const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

//  const obj3 ={obj1,obj2}
// const obj5 = Object.assign({},obj1, obj2 , obj4) // shallow copy of object

 const obj3 = {...obj1,...obj2} // spread operator
 //console.log(obj3); // {1: "a", 2: "b", 3: "a", 4: "b"}

 const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "0m@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isloggedIn' ]
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty("islogged")); // [ '1324abc', 'mayank', false ]

 
 const course ={
    coursename:"javascript",
    courseprice:"2000",
    courseInstructor: "mayank",
 }

 //  Course : CourseInstructor

 const { courseInstructor:Instructor} = course // destructuring object
 
 console.log(Instructor); // undefined

 {
    "name": "mayank",
    "coursename: "javascript",
    "price": "free",  
 }