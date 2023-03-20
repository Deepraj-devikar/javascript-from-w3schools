/**
 * sort method will take one function 
 * functions have to design like if we have sort in accending order
 * 1 == 1 return 0
 * 1 < 2 return -1
 * 2 > 1 return 1
 */

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});

console.log(points);