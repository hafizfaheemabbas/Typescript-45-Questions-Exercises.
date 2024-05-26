/*
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner.*/

//  Ist method with loop

let myFriends: string [] = ["shahzad","bilal","huazafa","faheem","adnan","faraz","amjad"];

for(let i = 0; i < myFriends.length; i++){
    console.log(`Mr. ${myFriends[i]}! you are invited to my dinner on friday.\n`)
}

//2nd method with map

myFriends.map((i)=>{
    console.log(`Mr. ${i}! you are invited to my dinner on friday.\n`)
})
