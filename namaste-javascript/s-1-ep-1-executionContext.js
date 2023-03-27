/**
 * execution context is created and run for function, block, global (this types of entities)
 * for every different entity their will be different execution context
 * :-
 * 1) execution context will have 2 table or block we can say (i.e. Memory, Code)
 * 2) execution context will work in `2 phases` (i.e. memory creation phase, code execution phase)
 * 3) In memory creation phase it will create memory for every identifiers with respect to type of identifiers they are 
 *      (types of identifier:- var, const, let, function, variable without var let const) 
 *      the way of value assign in memory creation phase is different for every type of identifier
 *      and according to that only we can use those type of identifiers in code phase before initializing it
 * 4) In code phase it will run every instuction one by one according to identifiers current value in memory table 
 *      and also it can update identifiers value on assignment or initialization operation
 */

console.log(a); // logs undefined because in memory creation phase undefined is stored in a

// console.log(e); // Uncaught ReferenceError: Cannot access 'e' before initialization
// because we declared e with let

// console.log(g);
// ReferenceError: Cannot access 'g' before initialization

/**
 * in memory creation phase will be store as `global` and will have `value => undefined` in memory creation phase
 * in code phase after execution of this line will 10 will be store
 */
var a = 10;

/**
 * in memory creation phase will be store as `script` and will have `value => undefined` in memory creation phase
 * in code phase after execution of this line will 30 will be store
 */
let e = 30;

/**
 * in memory creation phase will be store as `script` and will have `value => undefined` in memory creation phase
 * in code phase after execution of this line will 50 will be store
 */
const g = 50;

b(); // we can see correct execution of function b
b();
// and both time it will print undefined because in function body log c before its declaration 

/**
 * in memory creation phase will be store as `global` and will have `value => function body` which we have provided same to same
 * so we call this function before its defination without any problem
 * in code phase function declaration will be skiped
 */
function b() {
    console.log(c);

    // console.log(f);
    // ReferenceError: Cannot access 'f' before initialization

    // console.log(h);
    // ReferenceError: Cannot access 'h' before initialization

    /**
     * its memory creation will be performed `during execution of b();` both the time
     * in memory creation phase will be store as `local` and will have `value => undefined` in memory creation phase
     * in code phase after execution of this line will 20 will be store
     */
    var c = 20

    /**
     * its memory creation will be performed `during execution of b();` both the time
     * in memory creation phase will be store as `local` and will have `value => undefined` in memory creation phase
     * in code phase after execution of this line will 40 will be store
     */
    let f = 40;

    /**
     * its memory creation will be performed `during execution of b();` both the time
     * in memory creation phase will be store as `local` and will have `value => undefined` in memory creation phase
     * in code phase after execution of this line will 60 will be store
     */
    const h = 60;

    d();

    /**
     * in memory creation phase will be store as `local` and will have `value => function body` which we have provided same to same
     */
    function d() {
        console.log("I am d");
    }
}