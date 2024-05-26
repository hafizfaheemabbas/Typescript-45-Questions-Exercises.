/*
6. Stripping Names: 
Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/

let myName: string = "     Hafiz Faheem Abbas     ";
console.log(myName);
console.log(myName.trim());

let myName1: string = "\tHafiz Faheem Abbas";         // used for tab/space
console.log(myName1);

let myName2: string = "\nHafiz Faheem Abbas";         // used for new line
console.log(myName2)



