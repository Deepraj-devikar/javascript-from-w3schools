/**
 * it takes one function
 * run that function on all elements one after another
 * return of first element is the first argument for second element
 * 
 * reduceRight is works from right to left
 * 
 * SYNTAX:-
 * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 */

const numbers = [175, 50, 25];

function myFunc(total, num) {
  return total - num;
}

console.log(numbers.reduce(myFunc));