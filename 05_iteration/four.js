const myObject ={
    js:'javascript',
    py:'python',
    rb:'ruby',  
    swift:'swift', 
}
for (const key in myObject){
   // console.log(`${key} shortcut ids for ${myObject[key]}`);
}

const programming = ['javascript', 'python', 'ruby', 'swift'];
for (const key  in programming){
    console.log(programming[key]);
}