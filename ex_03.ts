/*
3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
and titlecase.*/

const personalName: string = "hafiz faheem abbas";

// lowercase
console.log(personalName.toLowerCase());      

// uppercase
console.log(personalName.toUpperCase());      

// titlecase
let firstLetter: string = personalName.charAt(0).toUpperCase();
let restLetter: string = personalName.slice(1).toLowerCase();

let titlecase = firstLetter + restLetter;

console.log(titlecase);