/*'
Do the following to create a program that simulates how websites ensure that everyone has a 
unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print 
a message that the person will need to enter a new username. If a username has not been used, print 
a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 
accepted.
*/

import { log } from "console";

let current_users: string [] = ["ShahzaD","Sami","BilaL","Abdul hadi","Rizwan",];

let new_users : string [] = ["Shahzad","bilal","Adnan","Faraz","Amjad"];

    // We will used forEach method
new_users.forEach(new_user =>{
    let new_userlower = new_user.toLowerCase();

    // We will used some() method
    let takenCurrentUser = current_users.some(current_user => current_user.toLowerCase()
    === new_userlower)    // True or False

    // Now we will aplply condition.
    if(takenCurrentUser){
        console.log(`${new_user} need to enter a new username`);
    }else{
        console.log(`${new_user} the username is available.`);
        current_users.push(new_user);
    }

})

console.log(current_users);
   



