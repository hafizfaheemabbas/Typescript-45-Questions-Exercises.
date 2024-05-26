/*
Start with a copy of your program from Exercise 41. Write a function called make_great() that 
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
show_magicians() to see that the list has actually been modified.
*/

let NewMagiciansNames: string [] = ["shahzad","bilal","huazafa","faheem","adnan","faraz","amjad"];

function make_great(great : string){
    for(let item of NewMagiciansNames){
        console.log(great, item);
    }
};

    make_great(` Hello, How are you Mr.`);               // calling the function