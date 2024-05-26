/*
Write a function called make_album() that builds an Object describing a music album. The 
function should take in an artist name and an album title, and it should return a Object containing 
these two pieces of information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make 
at least one new function call that includes the number of tracks on an album.
*/

function make_album(artistName : string, albumTitle : string){
    return {artistName, albumTitle};

}

let album1 = make_album('Faheem', 'Hum Tum');
let album2 = make_album('Adnan', 'Awaz');
let album3 = make_album('Faraz', 'Jan-e-Sheen');

console.log(album1);
console.log(album2);
console.log(album3);

function make_album1(artistName : string, albumTitle : string, numberOfTracks? : number){
    return {artistName, albumTitle, numberOfTracks };

}

let myalbum1 = make_album1('Faheem', 'Hum Tum', 27);
let myalbum2 = make_album1('Adnan', 'Awaz', 18);
let myalbum3 = make_album1('Faraz', 'Jan-e-Sheen');

console.log(myalbum1);
console.log(myalbum2);
console.log(myalbum3);