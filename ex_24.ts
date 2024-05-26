/*
You don’t have to limit the number of tests you create to 10. If you want to try more 
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array.
*/

// • Tests for equality and inequality with strings.
// • Tests using the lower case function.

let personalName = "Faheem";
console.log(personalName == "Faheem");                // true    equal to
console.log(personalName !== "faheem");               // true    not equal to

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
//   to, and less than or equal to.

let myNum = 27;
console.log(myNum == 27);                             //true     equal to
console.log(myNum !== 27);                            //false    not equal to
console.log(myNum > 20);                              //true     greater than
console.log(myNum < 24);                              //false    less than
console.log(myNum <= 27);                             //true     less than equal to
console.log(myNum >= 25);                             //true     greater than equal to

//• Tests using "and" and "or" operators.

let num1 = 20;
let num2 = 10;

console.log(num1 > 10 && num2 < 10);                  // && operator, If one statement is true & second statement is false then output will be false

console.log(num1 > 20 || num2 < 15);                  // || operator, If one statement is true & second statement is false then output will be true

// • Test whether an item is in an array
// • Test whether an item is in an array
// • Test whether an item is not in an array.

let myArray = [27, 18, "car"]
let myString = "faheem"

console.log(Array.isArray(myArray));                    // true

console.log(Array.isArray(myString));                   // false

