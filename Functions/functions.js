function sayMyName() {
    console.log("Hello World");
    console.log('S');
    console.log('O');
    console.log('H');
    console.log('A');
    console.log('I');
    console.log('L');
}

//sayMyName();

function addTwoNumber (a,b) {
    console.log(a+b);
}
// console.log(addTwoNumber(10,5));
//addTwoNumber(5,10);

let myName = () => {
    return "Sohail"
} 
//console.log(myName());

let loginUser = (username) => {
    return `${username} just logged in `
}

// console.log(loginUser("Sohail"));

function myEmail (email) {
    return `${email} is correct`
}

// console.log(myEmail("SohailShaikh@2379@live.com"));

let getClarity = () => {
    if (getClarity === undefined) {
        console.log("Sohail don't get the clarity");
    } else {
        console.log("He got the clarity");
    }
}

console.log(getClarity("Yess"));