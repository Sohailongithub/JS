let arr = [1,5,2,4,3];

// console.log(arr);

// Array Investigation 

// arr.push(6)
// // arr.pop()
// arr.unshift(15);
// arr.shift();

// let myArr = arr.join()
// console.log(arr);
// console.log(myArr);
// console.log(typeof myArr);

let myArray = [1,2,3,4,5];

console.log('OG Array ', myArray);
console.log('Slice', myArray.slice(3,5));

console.log('Splice', myArray.splice(1,3,));

console.log('modifided after splice', myArray);

console.log('Inject new element in the array ', myArray.splice(1,3,6,7));
console.log('After injecting new elements ', myArray);
