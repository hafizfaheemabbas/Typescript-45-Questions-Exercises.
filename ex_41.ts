/*
Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
prints the name of each magician in the array.
*/

let magiciansNames: string [] = ["shahzad","bilal","huazafa","faheem","adnan","faraz","amjad"];

function show_magicians(){
    for(let magiciansName of magiciansNames){
        console.log(magiciansName);
    }
};

    show_magicians();               // calling the function