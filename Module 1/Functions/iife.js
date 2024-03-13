// Immediatly Invoked Function Expressions (IIFE)
// (Function Defination)(Function Execution)

// It's use to invoke a function immediatly 

// Sometimes global scope pollution causes problem in the code which have variables and many other declarations to minimize that we use IIFE 

// If you are using Two IIFE in one file always use " ; " explicately to end and move on to other functions 

// named IIFE 
(function chai () {
    console.log(`CONNECTED `);
}) ();

//un-named iife using arrow functions 
((aurcode) => {
    console.log(`KONNECTED `);
}) ()

