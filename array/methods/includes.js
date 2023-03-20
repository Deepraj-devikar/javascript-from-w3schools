/**
 * SYNTAX:-
 * array.includes(element, start)
 * 
 * check array having element from start or not
 * 
 */

const numbers = [5, 7, 8, 11, 16, 19, 21, 22, 25];

const afterIndex = 2;

console.log(`numbers ${numbers.includes(16, afterIndex) ? '' : 'not '}having 16 number after index ${afterIndex}`);