/**
 * map 
 */

const numbers = [4, 9, 16, 25];
const newArr1 = numbers.map(Math.sqrt)

const newArr2 = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newArr1);
console.log(newArr2);