/*
Modify the make_shirt() function so that shirts are large by default, with a message that reads 
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
size with a different message.
*/

// function make_shirt(size : string, label : string){
//     // return size + label;
//     return `My shirt size is ${size} and label is ${label}`
// }

// let myFun = make_shirt(' Large ', ' I love Typescript ');
// console.log(myFun);

//making as default

// function make_shirt(label : string, size : string = "Large"){
//     // return size + label;
//     return `My shirt size is ${size} and label is ${label}`
// }

// let myFun = make_shirt(' I love Typescript ');
// console.log(myFun);


// making medim as a default

// function make_shirt(label : string, size : string = 'Medium'){
//     return size + label;
// }

// let myFun = make_shirt(' I love Typescript ');
// console.log(myFun);

// making shirt of any size

function make_shirt(label : string, size : string){
    // return size + label;
    return `My shirt size is 'any size' and label is ${label}`
}

let myFun = make_shirt(' Happy Birthday ',' any size ');
console.log(myFun);
