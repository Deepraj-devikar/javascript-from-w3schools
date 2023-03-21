/**
 * Question:- What's the difference between undefined and null?
 * 
 * 
 */

/**---------------SMILARITIES---------------------------- */
/**undefined and null both belongs to Javascripts 7 primitive types */
const primitiveTypes = ['String', 'Number', 'Null', 'Undefined', 'Boolean', 'Symbol', 'Bigint'];

/**undefined and null both are falsy values */
console.log(!!null); //logs false
console.log(!!undefined); //logs false

console.log(Boolean(null)); //logs false
console.log(Boolean(undefined)); //logs false

/**undefined is default value we can see if we not assigned value to variable 
 * OR a function that not returning any value 
 * OR a property dose not exists in object */
let _thisIsUndefined;
const doNothing = () => {};
const someObj = {
    a : "ay",
    b : "bee",
    c : "si"
};

console.log(_thisIsUndefined); //logs undefined
console.log(doNothing()); //logs undefined
console.log(someObj["d"]); //logs undefined

/**null is value that represent no value */
fs.readFile('path/to/file', (e,data) => {
    console.log(e); //it logs null when no error occurred
    if(e){
        console.log(e);
    }
    console.log(data);
});

/**Comparision of null and undefined */
console.log(null == undefined); // logs true
console.log(null === undefined); // logs false