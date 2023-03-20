/**
 * every array method
 * 
 * PRAMETER:-
 * function which returns boolean value
 * 
 * it will run that function on each and every element of array 
 * and will check that for every element that function returning true or not 
 * if it returns true for every elemnts then it will return true 
 * if any of the element function returns false then it will return false
 * 
 * it will not run this function for empty elements
 */

const array1 = [22, 20, 25, 29, 24, 42];

console.log(array1.every((element) => element > 18));

const survey = [
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "No"}
];

let result = survey.every(isSameAnswer);

function isSameAnswer(el, index, arr) {
    console.log("el:- ", el);
    console.log("index:- ", index);
    console.log("arr:- ", arr);
    if (index === 0) {
        return true;
    } else {
        return (el.answer === arr[index - 1].answer);
    }
}

console.log(result);