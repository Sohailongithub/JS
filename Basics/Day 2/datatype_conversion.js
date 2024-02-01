// this is a number 
let a = 33;

// this is a string 
let b = "33";

// if  we try to convert this string into a number so we will get NaN which means Not a Number let see with an example 

let c = "33abc";

let valueInNumber = Number(c)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// so always remember if your trying to convert a string into a number it will convert but if a string has a number and alphabets then it will no longer be a number it will give you typeOf number but whenever you will print you will get Not a Number NaN so don't reply on numbers on JS

// similarly you can use Number as String as well on line no. 11 

// "33" => 33; number 
// "33 abc " => NaN Not a Number But Type will be number  
// "true " => will be 1 false => 0
// undefined => will be NaN
// Null will be 0

// and if there is a boolean 
let isLoggedIn = 1

let BooleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanIsLoggedIn);

// we get 1 => true; 0 => false 
// "" empty string as false and string as True.

let someNumber = 15;

// let StringSomeNumber = String(someNumber)
// console.log(StringSomeNumber);
// console.log(typeof StringSomeNumber);

// console.log("1" + 2 + 2); // It will print in string format because you initialize it with string 

// console.log(1 + 2 + "2"); // this is same as line 43
// console.log((1 + 2) + "2");// It will print in Number and String because it's using mathamatical term in maths we solve first bracket seprated values 