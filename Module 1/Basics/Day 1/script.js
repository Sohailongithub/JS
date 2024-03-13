// Concatenation:
// Declare two string variables and concatenate them to form a new string.

let firstName = "Ivan";
let lastName = "Gordon";
let fullname = firstName + lastName;
console.log(fullname);

// String Length:
// Find and print the length of a given string.

console.log(fullname.length);

// Accessing Characters:
// Print the first and last characters of a string.
console.log("Fist word is ", fullname[0])
console.log("Last word is ",fullname[fullname.length - 1]);


// Substring:
// Create a substring from a given string, starting from index 2 to index 5.
console.log(fullname.substring(1, 4));


// Uppercase and Lowercase:
// Convert a given string to uppercase and print it.
// Convert the same string to lowercase and print it.
let name1 = "SOHAIL";
console.log(name1.toLowerCase());

let name2 = "sohail";
console.log(name2.toUpperCase());


// String Comparison:
// Compare two strings and print whether they are equal or not.
console.log(name1 === name2);

let s = "a";
let v = "a";
console.log(s === v);


// String Replacement:
// Replace a specific word in a string with another word.

let a = "Hit"
console.log(a);
console.log(a.replace("H", "K"));

