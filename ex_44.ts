/*
Write a function that accepts an array of items a person wants on a sandwich. The function 
should have one parameter that collects as many items as the function call provides, and it should 
print a summary of the sandwich that is being ordered. Call the function three times, using a different 
number of arguments each time.
*/

function mySandwiches(...items : string []){
    return `I want sandwich of ${items}`;

};

let Collects1 = mySandwiches('mayo sauce', ' grilled chicken');
let Collects2 = mySandwiches('chilly sauce', ' chicken tikka');
let Collects3 = mySandwiches('mayo garlic sauce', ' malai boti chicken');

console.log(Collects1);
console.log(Collects2);
console.log(Collects3);

