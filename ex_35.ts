/*
Think of at least three different animals that have a common characteristic. Store the names 
of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print 
a sentence such as Any of these animals would make a great pet!
*/

let animals_names = ['goat', 'sheep', 'cow', 'buffalo'];


// for of method
for(let i of animals_names){
    console.log(`${i} is a domestic animals`)
};

    console.log(`\n All these animals ${animals_names[0]}, ${animals_names[1]}, ${animals_names[2]} and ${animals_names[3]} meat is halal in Islam.\n`);
