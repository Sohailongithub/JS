// While Loop

// while (condition) {
    
// }

let odd = 1
while (odd <= 10) {
    console.log(`Odd value  is ${odd}`);
    odd = odd + 2
}

let even = 0
while (even < 10) {
    console.log(`Even Value is ${even}`);
    even = even + 2
}

let carModel = ['Honda', 'Kia', 'MG'];

let index = 0;

while (index < carModel.length) {
    console.log(`Car Model is ${carModel[index]}`);
    index++
}

let bikeModel = ['hero', 'KTM', 'TVS'];
let i = 0;

while (i < bikeModel.length) {
    console.log(`Bike Model  ${bikeModel[i]}`);
    i++
}

let fruit = ["apple","mango","banana"];
let item = 0;

while (item < fruit.length){
    console.log(`${fruit[item]} is a fruit`);
    item++
}

num = [1,2,3,4,5];
sqNum = []



for (let i = 0; i < num.length; i++){
    sqNum.push(num[i] * num[i])
};

console.log(sqNum);
