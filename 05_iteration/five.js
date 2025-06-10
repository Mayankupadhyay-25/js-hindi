const coding =["js", "py", "rb", "swift"];
//coding.forEach ( function (val) {
   // console.log(val);
//})

//coding.forEach( (item)  => {
  //  console.log(item);
//})

//function printMe(item){
  //  console.log(item);
//}
//coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        language: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
    {
        languageName: "Ruby",
        languageFileName: "rb",
    },
    {
        languageName: "Swift",
        languageFileName: "swift",
    },
]

myCoding.forEach ((item) => {
    console.log(item.languageName);
})