/*
Think of at least five places in the world you’d like to visit.
• 1.Store the locations in an array. Make sure the array is not in alphabetical order.
• 2.Print your array in its original order.
• 3.Print your array in alphabetical order without modifying the actual list.
• 4.Show that your array is still in its original order by printing it.
• 5.Print your array in reverse alphabetical order without changing the order of the original list.
• 6.Show that your array is still in its original order by printing it again.
• 7.Reverse the order of your list. Print the array to show that its order has changed.
• 8.Reverse the order of your list again. Print the list to show it’s back to its original order.
• 9.Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed.
• 10.sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
order has changed.
*/

//• 1. Store the locations in an array. Make sure the array is not in alphabetical order.

let myVistPlaces : string [] = ["SAUDIA", "DUBAI", "AMERICA", "TURKEY", "CANADA", "LONDON"];

//• 2.Print your array in its original order.

console.log(myVistPlaces);

//• 3.Print your array in alphabetical order without modifying the actual list.

let copyOfArray = myVistPlaces.slice();
let sortedArray = copyOfArray.sort();

console.log(sortedArray);

//• 4.Show that your array is still in its original order by printing it.

console.log(myVistPlaces);

//• 5.Print your array in reverse alphabetical order without changing the order of the original list.
let copyOfArray2 = myVistPlaces.slice();
let reverseOfArray = copyOfArray2.reverse();
console.log(reverseOfArray);

//• 6.Show that your array is still in its original order by printing it again

console.log(myVistPlaces);

//• 7.Reverse the order of your list. Print the array to show that its order has changed.

let reverseOfArray2 = myVistPlaces.reverse();
console.log(reverseOfArray2);

//8.Reverse the order of your list again. Print the list to show it’s back to its original order.

let reverseAgain = reverseOfArray2.reverse();
console.log(reverseAgain);

// • 9.Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

let sortAlphabeticalArray = myVistPlaces.sort();
console.log(sortAlphabeticalArray);

// • 10.sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let reverseSortedArray = sortAlphabeticalArray.reverse();
console.log(reverseSortedArray);

 // -------------END--------------//