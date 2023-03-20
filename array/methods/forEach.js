/**
 * it take function 
 * and perform that functions operation on each and every element of array
 */

const persons = [
    {name: 'Deepraj', edu: 'CS'},
    {name: 'Priya', edu: "COM"},
    {name: 'Uday', edu: 'E'},
    {name: 'Devendra', edu: "M"},
    {name: 'Kunal', edu: "E"},
    {name: 'Rudresh', edu: 'MED'},
];

console.log("before persons:- ", persons);

persons.forEach((person, index, personArr) => {
    personArr[index] = {...person, name: `I am ${person.name}`};
})

console.log("after persons:- ", persons);