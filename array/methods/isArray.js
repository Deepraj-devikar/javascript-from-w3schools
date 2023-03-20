/**
 * The isArray() method returns true if an object is an array, otherwise false.
 */

const numbers = [4, 5, 8, 9];

const person = {name: 'Deepraj'};

console.log(`numbers is ${Array.isArray(numbers) ? '' : 'not '}array`);
console.log(`person is ${Array.isArray(person) ? '' : 'not '}array`);