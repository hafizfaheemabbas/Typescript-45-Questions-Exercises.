/*
Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
of magicians’ names. Because the original array will be unchanged, return the new array and store it 
in a separate array. Call show_magicians() with each array to show that you have one array of the 
original names and one array with the Great added to each magician’s name.
*/
let NewMagiciansNames1: string [] = ["shahzad","bilal","huazafa","faheem","adnan","faraz","amjad"];

let MagiciansNamescopy = [...NewMagiciansNames1];

function make_great(great : string){
    let withGreat = "";
    
    for(let item of NewMagiciansNames1){
        withGreat += `${great} ${item}\n`;
    }
    return withGreat;
};

let mygreats = make_great('Hello');
let myArrays = mygreats.split('\n');
console.log(myArrays);
// orignal Array
console.log(NewMagiciansNames1);