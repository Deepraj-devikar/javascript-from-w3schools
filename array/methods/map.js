/**
 * map 
 */

const numbers = [4, 9, 16, 25];
const newArr1 = numbers.map(Math.sqrt)

const myFunction2 = (num) => {
  return num * 10;
}

const newArr2 = numbers.map(myFunction2)
const newArr3 = numbers.map((num) => {
  return num * 10;
})

function myFunction(num) {
  return num * 10;
}

console.log(newArr1);
console.log(newArr2);
