/*
Working with one of the programs from Exercises 14 through 18, print a message indicating 
the number of people you are inviting to dinner.
*/

let myFriends : string [] = ["shahzad","bilal","huazafa","faheem","adnan","faraz","amjad"];

console.log(`I am inviting ${myFriends.length} friends to my dinner which are following.\n`)

for(let i = 0; i < myFriends.length; i++ ){

    console.log(`${i + 1}. ${myFriends[i]}`);
}