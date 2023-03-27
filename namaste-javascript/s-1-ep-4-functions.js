/**
 * FUNCTIONS
 * A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).
 */

var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

/**
 * 1) in memory phase memory will be assign to all of the identifiers (i.e. x, a, b)
 * 2) x is identifier with var type, a and b are identifier with funcition type
 *      A) x will get  assign memory in memory phase and value will be store undefined
 *      B) a and b will get memory in memory phase and value function body will be store in respective identifier
 * 3) now in code phase call stack will created with global execution context
 * 3) first instruction `var x = 1` in code identifier x value will be change 1 will be store their
 * 4) invocation of function a() appear so execution context of function a will created and entered to call stack
 *      A) function a execution context will be created with its scope so all the global variables it will get in its scope (x, a, b are global variables)
 *      B) execution context of function a also will have 2 phases (i.e. memory phase and code phase)
 *      C) now memory phase is started but before that it will give memory to global variables and then memory phase will start
 *      D) x is again identifier in local scope of function so it will give memory to identifier x in local scope identifier type is var so undefined value will be store in their
 *      E) now we have execution context of function a in top of the call stack
 *      F) first instruction `var x = 10` in code identifier x value will be change 10 will be store their
 *      G) but now we have to focus that we have 2 copies of x one in global scope and another in local scope
 *          a) so now it will first check x in local scope if it found x in local scope then perform its oiperation with that x which is in local scope and the x in global scope will be keep as it is
 *          b) if not found x in local scope then it will find x in global scope and perform its operation with that x which is in global scope
 *      H) so x in local scope that identifiers value will be change and x in global scope will be keep as it is
 *      I) now encountered console log to check which value is in x so we will be get 10
 *      J) execution of function a is ended so execution context of function a will deleted and removed from call stack
 * 5) invocation of function b() appear so execution context of function b will created and entered to call stack
 *      A) function b execution context will be created with its scope so all the global variables it will get in its scope (x, a, b are global variables)
 *      B) execution context of function b also will have 2 phases (i.e. memmory phase and code phase)
 *      C) now memory phase is started but before that it will give memory to global variables and then memory phase will start
 *      D) x is again identifier in local scope of function so it will give memory to identifier x in local scope identifier type is var so undefined value will be store in their
 *      E) now we have execution context of function b in top of the call stack
 *      F) first instruction `var x = 100` in code identifier x value will be change 100 will be store their
 *      G) but now we have to focus that we have 2 copies of x one in global scope and another in local scope 
 *          a) so now it will first check x in local scope if it found x in local scope then perform its operations with that x which is in local scope and the x in global scope will be keep as it is
 *          b) if not found x in local scope then it will find x in global scope and perform its operations with that x which is in global scope
 *      H) so x is in local scope that identifiers value will be change and x in global scope will be keep as it is
 *      I) now encountered console log to check which value is in x so we will get 100 because x is found in local scope and their value of x is 100
 *      J) execution of function a is ended so execution context of function b will deleted and removed from call stack
 * 6) now in our call stack global execution context is on top of the stack and it have global scope
 * 7) now encountered console log to check which value is in x so we will get 1 because x is found in global scope and their value of x is 1
 */