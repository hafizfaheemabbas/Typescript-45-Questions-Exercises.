/*You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/

const myFriends: string [] = ["shahzad", "bilal", "huazafa", "faheem", "adnan", "faraz"];
console.log(myFriends);
console.log(`We have three more friends to invite on dinner.\n`);

myFriends.unshift("amjad");
console.log(myFriends);

myFriends.splice(3, 0, "abdul hadi")
console.log(myFriends);

myFriends.push("talha");
console.log(myFriends);

for(let i = 0; i < myFriends.length; i++){
    console.log(`Mr. ${myFriends[i]} you are invited to my dinner.\n`)
}
