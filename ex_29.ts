/*
Make an array of your favorite fruits, and then write a series of independent if statements that 
check for certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
is in your array, the if block should print a statement,
such as You really like bananas!
*/

let favorite_fruits = ["banana", "mango", "graps"];

if(favorite_fruits.includes("orange")){
    console.log(`I really like orange.`);

}else if(favorite_fruits.includes("mango")){
   console.log(`I really like mango shake.`);

}else if(favorite_fruits.includes("apple")){
    console.log(`I really like apple.`);

}else{
    (`fruits are not avialable`);
}