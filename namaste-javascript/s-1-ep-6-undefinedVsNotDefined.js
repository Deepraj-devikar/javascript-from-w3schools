/**
 * undefined is data type in javascript
 * if we have any variable declared in our code so in memory phase value undefined will be stored for that variable and in code phase after assigned value to that variable its value will be change
 * and if we not have decalred in our code then it will give error of not defined
 * javascript is loosely typed
 */

console.log(a); // undefined
var a = 1;
console.log(a); // 1
// console.log(x); // Uncaught ReferenceError: x is not defined

// don't do this
// a = undefined // we can do this but not to do
// it is not best practice