// let car = ["honda", "Toyota", "Hyundai", "Kia"];
// let bike = ["KTM", "harley", "Trihump"];

// console.log(car);
// console.log(bike);

// // car.push(bike);
// console.log(car.concat(bike)); // It will give us One Single array
// console.log(car.length); 
// console.log(typeof car.concat(bike));

// let arr = "sohail";

// console.log(Array.isArray(arr));
// console.log(Array.from(arr));
// console.log(Array.from(arr[5]));
// console.log(Array.of(arr));

let numberOfPerson = [1,2,3,4,5];

let str = numberOfPerson.join('-');
console.log(str);

let arr = [1,2,3,5,6];
str = '';

for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i < arr.length - 1) {
        str += '--';
    }
}

console.log(str);


let arr1 = ["sohail", "Aftab", "Alexa" ];
let str1 = '';

for (let i = 0; i < arr1.length; i++) {
    str1 += arr1;
    if (i < arr1.length - 1){
        str1 += '-'
    }
}
console.log(typeof str1 );
