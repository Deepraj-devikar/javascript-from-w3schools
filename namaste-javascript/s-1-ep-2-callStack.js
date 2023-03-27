/**
 * Call stack maintains the `order of execution` of exxecution context
 * 
 * 1) at the very start of program call stack will have `global execution context`
 * 2) if global execution conext `found any function call` in it then it will `have another execution context in call stack` that is of that function body
 * 3) and if that function body `having again one function call` in it then it will `have one more execution context in call stack` that is of that function body on so on
 * 
 */

/**
 * CODE
 */
var n = 2;
function square (num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);
console.log(square2);
console.log(square4);

/**
 * EXPLANATION OF CODE PHASE FOR ABOVE CODE
 * 
 * in memory phase we have allocate memory for n, function square, square2 and square4 according to respective identifier type
 * 
 * NOW IN CODE PHASE
 * 1) at very first we are in global scope and in our call stack `global execution context will come` and it will be `first entry` in our call stack
 * 2) it will run code in global scope one by one
 * 3) it will store value 2 for n
 * 4) will `skip function square defination because nothing to execute` their in code phase until this function gets call
 * 5) now we got call for function square and its result will be store in square2
 * 6) `when we give call to any function that time we gets new entry in our call stack` that entry is for that function which we are calling
 * 7) and `execution context creates for that function` it will also have 2 phases (i.e. memory phase and code phase) 
 *      A) here will allocate memory for all the identifiers in that function block
 *      B) and in code phase all the instructions in the function block will be executed one by one
 *      C) and result will be return if their is not any return statement then it will return undefined
 *      D) after return `execution context for this specific function call will be deleted and also will be removed from call stack`
 *      E) so now entry for this specific function block is removed from call stack and it returned value 4
 * 8) so square(n) will return 4 and 4 will be store in square2
 * 9) now we again got call for function square and its result will be store in square4
 * 10) we will get again new entry in call stack that entry is for square(4) which we are calling
 * 11) and execution context will create for square(4) it will have 2 phases (i.e. memory phase and code phase)
 *      A) here again will allocate memory for all identifiers in that function block
 *      B) and in code phase all the instuctions in function block will be executed one by one
 *      C) and result will be return 16
 *      D) after return execution context for this specific function call will be deleted and also will be removed from call stack
 *      E) so now entry for this specific function block is removed from call stack and it returned value 16
 * 12) so square(4) will return 16 and 16 will be store in square4
 * 13) now we got call for function console.log its result we are not storing any where
 * 14) we will get new entry in call stack that entry is for console.log(square2) square2 in passing as an argument value of square2 is 4 for now
 * 15) execution context will creates for console.log function it will also have 2 phases (i.e. memory phase and code phase)
 * 16) console.log will log value that is 4 in console and return undefined 
 *      and execution context will be deleted for this specific console.log(square2) function call 
 *      and entry for this specific function call will be removed from call stack
 * 17) now we got again call for console.log
 * 18) we will get new entry in call stack that entry is for console.log(square4) square4 is passing as an argument value of square4 is 16 for now
 * 19) execution context will create for console.log function it will also have 2 phases (i.e. memory phase and code phase)
 * 20) console.log will log value 16 in console and return undefined
 *      and execution context will be deleted for this specific console.log(square4) function call
 *      and entry for this specific function call will be removed from call stack
 * 21) now at the end global execution context will also be removed from the call stack
 */