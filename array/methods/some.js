/**
 * like every some will work
 * every will check for all true some will check for any true
 */

const ages = [3, 10, 18, 20];

console.log(ages.some(checkAdult));
function checkAdult(age) {
  return age > 18;
}