const name = "Mayank"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repo count is 
    ${repocount}`); // this is morden way of syntex (`` back text) it's known as (string interpolation)
    
    // another way of declearing string is:
    const gameName = new String('mayankkk')

  //  console.log(gameName); // this is object of string

    //console.log(gameName[0]);
    //console.log(gameName.__proto__);

    //console.log (gameName .length); // this is length of string
    //console.log (gameName .toUpperCase()); // this is length of string
    console.log (gameName .charAt(2)); //this is length of string
    console.log (gameName .indexOf('t'))// position of charecter.


    const newString =gameName.substring(0, 4) // this is substring of string
    console.log(newString); // this is substring of string

    const anotherString = gameName.slice(-8, 4) // this is slice of string
    console.log(anotherString); // this is slice of string 

    const newStringOne = "   mayank   "
    console.log(newStringOne); // this is trim of string
    console.log(newStringOne.trim()); // this is trim of string