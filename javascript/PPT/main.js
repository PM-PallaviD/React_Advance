


// PUSH METHODE 
const array = ['abc', 1, 2, 3, 'xyz'];
console.log(array)
array.push("pallavi", 9, 0)
document.write(array)

// POP METHODE 
const array5 = [A, B, C, D, E, F];
console.log(array5)
array5.pop(C, D)
document.write(array5)

// SHIFT METHODE 
const array3 = [5, 6, 7, 8, 9];
array3.shift(6)
document.write(array3)

// UNSHIFT METHODE 
const array2 = [3, 4, 5, 6];
array2.unshift(4)
document.write(array2)


// LENGTH 
const array4 = [1, 2, 4, 5, 6];
document.write(array4.length)

// INDEXOF METHODE 
const array6 = [9, 8, 7, 6, 5];
document.write(array6.indexOf(8))



// SLICE METHOD 
let languages = ["JavaScript", "Python", "C", "C++", "Java"];

// ------------------------------ slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

//-------------------------------- slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1); // [ 'C', 'C++', 'Java' ]

// ------------------------------slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
console.log(new_arr2); // [ 'Python', 'C', 'C++' ]


// SPLICE METHOD 
let prime_numbers = [2, 3, 5, 7, 9, 11];

// -------------------------------replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);

// Output: [ 9 ]
//         [ 2, 3, 5, 7, 13, 11 ]


// FLAT METHOD 
// 3 nested arrays 
let numbersArray = [1, 2, [3, 4, [5, 6, [7, 8]]]];

//------------------ reducing nesting by flattening the array to depth 2 
let flattenArray = numbersArray.flat(2);

//------------------ new flatten array
console.log(flattenArray);

// Output:
// [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]


// JOIN METHOD 
let message = ["JavaScript", "is", "fun."];

// join all elements of array using space
let joinedMessage = message.join(" ");
console.log(joinedMessage);
// Output: JavaScript is fun.

// CONCATE METHOD 
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]

// join two arrays 
let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

/* Output:
[
  2, 3, 5, 7,
  2, 4, 6, 8 
]
*/

// MAP METHOD 
let numbers = [2, 4, 6, 8, 10];

// function to return the square of a number
function square(number) {
  return number * number;
}

// apply square() function to each item of the numbers list
let square_numbers = numbers.map(square);
console.log(square_numbers);

// Output: [ 4, 16, 36, 64, 100 ]