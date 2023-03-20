/**
 * DEFINATION:- 
 * The copyWithin() method copies array elements to another position in the array.
 * The copyWithin() method overwrites the existing values.
 * The copyWithin() method does not add items to the array.
 * 
 * SYNTAX:- array.copyWithin(target, start, end)
 * 
 * PARAMETERS:- 
 * target	Required. The index (position) to copy the elements to.
 * start	Optional. The start index (position). Default is 0.
 * end	Optional. The end index (position). Default is the array length.
 * 
 * make changes in array itself
 */

const array1 = ['Deepraj', 'Anjay', 'Sunil', 'Aman', 'Sidhonand', 'Sidhart'];

console.log('before operation:- ', array1);

array1.copyWithin(2, 1, 0);

console.log('after operation:- ', array1);