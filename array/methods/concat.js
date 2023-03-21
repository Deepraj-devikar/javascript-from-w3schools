/**
 * can perform concatenation operation between 2 arrays
 * 
 * SYNTAX:- array1.concat(array2, array3, ..., arrayX)
 * PARAMETERS:- array1 is required remaining arrays are optional
 * RETURN:- An array	The content from the joined arrays.
 */

const array1 = ['Deepraj', 'Anjay'];
const array2 = ['Aman', 'Sunil'];
const array3 = ['Sidhart', 'Sidhonand'];

// concatenation operation
const array4 = array1.concat(array2, array3);

// check all 4 arrays
console.log("array1:- ", array1);
console.log("array2:- ", array2);
console.log("array3:- ", array3);
console.log("array4:- ", array4);

/**
 * OUTPUT:-
 * array1:-  [ 'Deepraj', 'Anjay' ]
 * array2:-  [ 'Aman', 'Sunil' ]
 * array3:-  [ 'Sidhart', 'Sidhonand' ]
 * array4:-  [ 'Deepraj', 'Anjay', 'Aman', 'Sunil', 'Sidhart', 'Sidhonand' ]
 */

