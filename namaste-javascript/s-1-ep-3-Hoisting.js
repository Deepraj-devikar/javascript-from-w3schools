/**
 * HOISTING:-
 * hoisting is process where interpreter appears to move the declaration of functions, 
 * variables or classes to the top of their scope, prior to execution of the code
 */

getName(); // Namaste JavaScript
// getName2(); // will give error and will say getName2 is not a function
console.log(x); // undefined
console.log(getName); // f(){...}
console.log(getName2); // undefined

var x = 7;

function getName() {
    console.log('Namaste JavaScript');
}

var getName2 = () => {
    console.log('Namaste JavaScript');
}

getName(); // Namaste JavaScript
getName2(); // Namaste JavaScript
console.log(x); // 7
console.log(getName); // f(){...}
console.log(getName2); // f(){...}

/**
 * code explanation:-
 * 1) in first phase of global execution contex will be allocate memory for all identifiers (i.e. x, getName, getName2)
 * 2) now we will se how the memory will be allocate
 *      A) identifier x is var type of identifier and we are assgning 7 to it
 *      B) identifier getName is function type of identifier and we are assigning one function body to it
 *      C) identifier getName2 is var type of identifier and we are assigning one function body to it
 * 3) in memory phase identifier x will get memory and will store undefined to it in memory phase
 * 4) in memory pahse identifier getName will get memory and will store its function body to it in memory phase
 * 5) in memory phase identifier getName2 will get menmory and will store undefined to it in memory phase (it is just because it is var type of identifier)
 * 6) now in code phase we have to check output for all identifiers before declaration and after declaration of those identifiers 
 *      and have to check how hoisting performs according to type of ifdentifiers
 * 
 * CONCLUSION:-
 * var x = 7 | will get memory in memory phase (global block) and will have value undefined in memory phase
 * function getName() {...} | will get memory in memory phase (global block) and will have value function body in memory phase
 * var getName2 = () => {...} | will get memory in memory phase (global block) and will have value undefined in memory phase
 */