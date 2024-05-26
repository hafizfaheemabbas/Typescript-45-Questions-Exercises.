/*
Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let userNames1 : string [] = ["shahzad","bilal","huazafa","admin","adnan","faraz","amjad"]

userNames1 = []         //empty array

if(userNames1.length > 0){

    for(let i = 0; i < userNames1.length; i++){

        if(userNames1[i] == "admin"){
        console.log(`\nHello ${userNames1[i]}, would you like to see a status report?\n`)
        }else{
        console.log(`Hello ${userNames1[i]}, thank you for logging in again.`)
    }
}
}else{
    console.log(`We need to find some users!`)
}