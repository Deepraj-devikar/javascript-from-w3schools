/**
 * SYNTAX:-
 * array.indexOf(item, start)
 * 
 * return index of item after start
 */

const numbers = [5, 7, 8, 11, 16, 19, 21, 22, 25];

const afterIndex = 5;

const number = 16;

console.log(`numbers ${numbers.indexOf(16, afterIndex) == -1 ? '' : 'not '}having 16 number after index ${afterIndex}`);

console.log(`in numbers ${number} number is ${numbers.includes(16, afterIndex) ? `at index ${numbers.indexOf(16, afterIndex)} ` : 'not found ' }after index ${afterIndex}`);