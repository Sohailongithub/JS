// We will learn by doing investigation

// We have two types of memory 
// Stack Memory () is used for primitive data types 
// Heap Memory () is used for non-primitive data types 

let myName = "sohail "; // This will store in stack memory and a copy will be provided of this variable that is why we are getting both values 
let anotherName = myName;

anotherName = "sphinx";

console.log(myName);
console.log(anotherName);

let arr = [1,2,3,4]; // this will save in heap memory and arr1 is now refering to arr so whatever changes if I will make in arr1 now it also happen in arr 
let arr1 = arr

arr1[1] = 5;
arr1[3] = 6
console.log(arr);
console.log(arr1);


let obj = {
    name: "sohail",
    age: 22
}

let obj1 = obj;

obj1.age = 23; // In the obj1 I have change the value of age so the effect of it has also seen in obj because obj is store in heap memory. and heap memory always gives us reference of the parent object / the object which we are calling from 

console.log(obj);
console.log(obj1);