const user = {
    username : 'Sohail',
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();
// user.welcomeMessage(this);

// console.log(this);

const spaceship = (model) => (`this is my spaceship and It's model is ${model}`);


console.log(spaceship(151515));