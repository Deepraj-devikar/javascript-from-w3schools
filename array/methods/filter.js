/**
 * takes one function which returns true or false 
 * 
 * that function will run for each and every element of the array
 * then will generate new array with those elements which gives retrun true
 */

const persons = [
    {name: 'Deepraj', age: 26},
    {name: 'Priya', age: 22},
    {name: 'Uday', age: 25},
    {name: 'Devendra', age: 28},
    {name: 'Rudresh', age: 17},
    {name: 'Rdhesh', age: 12}
];

const ageAbove18 = (person) => person.age > 18;

const maturePersons = persons.filter(ageAbove18);

console.log('persons:- ', persons);
console.log('mature persons:- ', maturePersons);