/**
 * it takes function which returns true or false
 * it will run that function on all elements 
 * and will check for that element which satisfy the condition and return that element's index
 */

const persons = [
    {name: 'Deepraj', edu: 'CS'},
    {name: 'Priya', edu: "COM"},
    {name: 'Uday', edu: 'E'},
    {name: 'Devendra', edu: "M"},
    {name: 'Kunal', edu: "E"},
    {name: 'Rudresh', edu: 'MED'},
];

const findElectricEngg = (person) => person.edu == 'E';

const ElectricEnggIndex = persons.findIndex(findElectricEngg);
// will return 2 only not 2 and 4
// it reurns first index which is matched

console.log("ElectricEnggIndex:- ", ElectricEnggIndex);