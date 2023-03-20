/**
 * define array properties
 */

const persons = [
    {name: 'Deepraj', edu: 'CS'},
    {name: 'Priya', edu: "COM"},
    {name: 'Uday', edu: 'E'},
    {name: 'Devendra', edu: "M"},
    {name: 'Kunal', edu: "E"},
    {name: 'Rudresh', edu: 'MED'},
];

Array.prototype.myEdu = function (personIndex) {
    return this[personIndex].edu;
}

console.log(persons.myEdu(2));