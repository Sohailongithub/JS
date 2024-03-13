//for

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
    
}

// For Loop Outer and Inner loop  I try to archive Tables from 1 to 12

for (let i = 1; i <= 12; i++) {
    console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 12; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    
    }
    
}

// Break and continue 

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`5 is the best `);
        continue;
    }
    console.log(`Value of ${index}`);
    
}

// Array 

let myArray = ['sphinix', 'space', 'sclopia']

for (let index = 0; index < myArray.length; index++) {
    console.log(`${myArray}`);
    
}
    console.log(myArray.length);