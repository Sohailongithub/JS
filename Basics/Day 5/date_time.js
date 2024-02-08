// Dates 

// let myDate = new Date();
// console.log(myDate, `This is normal date in JavaScript`);

// console.log(myDate.toDateString(), ` : This is Date String Method`);
// console.log(myDate.toLocaleString(), `: This is Locale String Method`);
// console.log(myDate.toISOString(), ` : This is ISO String Method`);

let createMyDate = new Date (2017,0,15);
// console.log(`That's my birthday ${createMyDate.toLocaleString()}`);

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date ();

// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: 'long'  
}));

