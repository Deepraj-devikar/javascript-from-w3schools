/**
 * it takes function which returns true or false
 * it will run that function on all elements 
 * and will check for that element which satisfy the condition and return that element
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

const ElectricEngg = persons.find(findElectricEngg);
// will return Uday only not Uday and Kunal
// it reurns first value which is matched

console.log("ElectricEngg:- ", ElectricEngg);