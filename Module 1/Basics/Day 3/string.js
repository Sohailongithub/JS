// In this chapter we have learn about string interpolations which is a modern way of printing a string 

let name = "sohail ";
let age = 23;
let programmingLanguage = "JavaScript "

//this is a traditional way of printing a string 

//// console.log("Hi, I'm ", name ," My age is ", age , " I'm Learning " , programmingLanguage );

//this is the modern way for printing a string 
console.log(`Hi, I'm ${name} my age is ${age} I'm learning ${programmingLanguage} `);

// there is an another way also to define a string 
//this is also a way to define a string 
let newName = new String ('Sohail Shaikh ');
/// console.log(newName);

// If I want to know about the prototype of a string 
///// console.log(newName.__proto__); //It will give us object, In the browser it will give us the length also with key and value pairs where key wil be starts from 0 and pair will be the string first character.

//similarly we can find the length of the string.
// //console.log(newName.length);

//if we want to know the characters position we can get that via methods eg 
// //console.log(newName.indexOf('k'));

//similarly we can know the characters also  
// //console.log(newName.charAt(0));
// //console.log(newName.charAt(4));

// This is a method to get a piece of a string in this method we cannot use negative numbers and it does not accept that 
// console.log(newName.substring(0, 6));

//In the slice method negative values also entertain and it will help us to access the values in reverse format

////this is a normal access to a string
// console.log(newName.slice(0, 6));

////In this one we will accesss the string from reverse format 
console.log(newName);
// console.log(newName.slice(4 , 2));
console.log(newName.slice(-0 , -1));


// Concatination method 

// let Str1 = "Hello ";
// let Str2 = "World ";
// let Str3 = "Sphinix ";
// console.log(Str1.concat(" ", Str2));
// console.log(Str2.concat(" ", Str1));
// console.log(Str1.concat(" ", Str3));
// console.log(Str3.concat(" ", Str2));
// console.log(`${Str2} of ${Str3}`);



