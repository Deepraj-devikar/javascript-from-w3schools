/**
 * returns array iterator object with key value pairs
 * 
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruitEntries = fruits.entries();

for(const fruit of fruitEntries) {
    console.log(fruit);
}