console.log("Sohail");

const accountId = 154;
let accountEmail = "sohail.com";
var accountPassword = "12345";
accountCity = "mumbai"

// accountId = 2 ; This cannot be done becasue const is a permanent type of variable

accountEmail = "sohail.org";
accountPassword = "54321";
accountCity = "delhi";
// Javascript always reads an empty variable as undefined
let accountState;

console.table([accountId, accountEmail,accountPassword,accountCity, accountState]);

// Never use a var type of variable it will change your initial values 

