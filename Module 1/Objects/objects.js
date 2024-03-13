let obj = {
    name:"Sohail",
    age: 22, 
    location: "Mumbai",
    number: 12345678
}

console.log(obj.name);
console.log(obj["name"]);

obj.greeting = function(){
    console.log(`Hello JS User ${this.name}`);
}
console.log(obj.greeting());

console.log(obj["location"]);