// Non Singleton Object, Object Literal 
let obj = {
    KVA: 125,
    Gen: {KVA: 250, Year: 2000}
    };

    // console.log('1',obj);
    // console.log('2',obj.KVA);
    // console.log('3',obj.Gen.Year);
    // console.log('4',obj.Gen.Year);


 // Singleton Object    
let car = new Object(
    {
        model: "z1", RPM: 250,
        speed: "120KMS" 
        }
    );

    car.id = "245df2hvg1kj";

// console.log(car);
// console.log(car.model);

///////I was using let that is why it was over writing the object now I am using const so it won't overwrite the value 
const obj1 = {number: '1', isThere: true, name: 'sphix'}; 
const obj2 = {number1: '2', isTheree: false, nameo: 'canopus'}; 

const obj3 =  Object.assign({}, obj1, obj2);
// console.log(obj3);

// to spread the object in one single {} will usee dot dot dot notation this is a latest version of spreading objects and arrays both
const obj4 = {...obj1, ...obj2};
// console.log(obj4);

let user = [
        {
        name: "user1",
        email: "live.com"
        },
        {
            name: "User 2",
            email: "live.com"
        },
        {
            name: "User 3",
            email: "live.com"
        }
    ]

// user[1].email

// console.log(user);

// let keysOfObj = Object.keys(user[0]);
// console.log(keysOfObj);
// console.log(Object.values(user));
// console.log(Object.entries(user));

console.log(obj1.hasOwnProperty('sphix'));