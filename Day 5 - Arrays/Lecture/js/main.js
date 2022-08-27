// ToDo: Day 5 Lecture Notes - Arrays 

// * Arrays 
// In contrast to variables, an array can store multiple values. 
// Each value in an array has an index, and each index has a reference in a memory address. 
// Each value can be accessed by using their indexes. 
// The index of an array starts from zero, and the index of the last element is less by one from the length of the array. 
// An array is a collection of different data types which are ordered and changeable(modifiable). 
// An array allows storing duplicate elements and different data types. 
// An array can be empty, or it may have different data type values. 


//* How to Create an Empty Array 
// In JavaScript, we can create an array in different ways. 
// It is very common to use const instead of let to declare an array variable. If you ar using const it means you do not use that variable name again.

// Using Array Constructor 
// Array() 
// Syntax 
const arr = Array() 
// or 
// let arr = new Array() 
console.log(arr) // [] 

// Using Square Brackets([]) 
// Syntax 
// This is the most recommended way to create an empty list 
const arrEx = [] 
console.log(arrEx) // [] 


//* How to Create an Array with Values 
// Array with initial values. 
// We use length property to find the length of an array. 

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers 
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits 
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables 
const animalProducts = ['milk', 'meat', 'butter', 'yogurt'] // array of strings, products 
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB'] // array of web technologies 
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries 

// Print the array and its length

console.log('Numbers:', numbers) // Numbers: (6) [0, 3.14, 9.81, 37, 98.6, 100] 
console.log('Number of numbers:', numbers.length) // Number of numbers: 6 

console.log('Fruits:', fruits) // Fruits: (4) ['banana', 'orange', 'mango', 'lemon'] 
console.log('Number of fruits:', fruits.length) // Number of fruits: 4 

console.log('Vegetables:', vegetables) // Vegetables: (5) ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']  
console.log('Number of vegetables:', vegetables.length) // Number of vegetables: 5 

console.log('Animal products:', animalProducts) // Animal products: (4) ['milk', 'meat', 'butter', 'yogurt'] 
console.log('Number of animal products:', animalProducts.length) // Number of animal products: 4 

console.log('Web technologies:', webTechs) // Web technologies: (7) ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB'] 
console.log('Number of web technologies:', webTechs.length) // Number of web technologies: 7 

console.log('Countries:', countries) // Countries: (5) ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] 
console.log('Number of countries:', countries.length) // Number of countries: 5 

// Array can have items of different data types 
const arrayExample = [
    'Asabeneh', 
    250, 
    true, 
    { country: 'Finland', city: 'Helsinki' }, 
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] } 
] // arr containing different data types
console.log(arrayExample) 
// (5) ['Asabeneh', 250, true, {…}, {…}]    - string, number, boolean, object, object 


//* Creating an Array Using Split 
// As we have seen in the earlier section, we can split a string at different positions, and we can change it to an array. 
let js = 'JavaScript' 
const charsInJavaScript = js.split('') 

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"] 

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
const companies = companiesString.split(',') 

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"] 

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.' 
const words = txt.split(' ') 

console.log(words) 
// the text has special characters think how you can just get only the words // ? Check 
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"] 


//* Accessing Array Items Using Index 
// We access each element in an array using their index. 
// An array index starts from 0. 

// Example 
// ['banana', 'orange', 'mango', 'lemon']   - index for each is 0, 1, 2, 3 

const fruitsArray = ['banana', 'orange', 'mango', 'lemon']; 

let firstFruit = fruitsArray[0]; // we are accessing the first item using its index 
console.log(firstFruit) // banana 

let secondFruit = fruitsArray[1]; 
console.log(secondFruit); // orange 

let lastFruit = fruitsArray[3];
console.log(lastFruit); // lemon 

// Last index can be calculated as follows

let lastIndex = fruitsArray.length - 1; 
lastFruit = fruitsArray[lastIndex]; 
console.log(lastFruit); // lemon 

// Another Example 
const numbersArray = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers 

console.log(numbersArray.length)  // => to know the size of the array, which is 6 
console.log(numbersArray)         // -> [0, 3.14, 9.81, 37, 98.6, 100] 
console.log(numbersArray[0])      //  -> 0 
console.log(numbersArray[5])      //  -> 100 

let lastIndexExample = numbersArray.length - 1; 
console.log(numbersArray[lastIndexExample]); // -> 100 

// Another Example 
const webTechsArray = [
    'HTML', 
    'CSS', 
    'JavaScript', 
    'React', 
    'Redux', 
    'Node', 
    'MongoDB'
]; // List of web technologies 
  
console.log(webTechsArray);  // all array items (7) ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'] 
console.log(webTechsArray.length); // => to know the size of the array, which is 7 
console.log(webTechsArray[0]);     //  -> HTML 
console.log(webTechsArray[6]);     //  -> MongoDB 
  
let lastIndexEx = webTechsArray.length - 1; 
console.log(webTechsArray[lastIndexEx]); // -> MongoDB 

// Another Example 
const countriesArray = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]; // List of countries 
  
console.log(countriesArray);   // -> all countries in array (11) ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'] 
console.log(countriesArray[0]);   //  -> Albania 
console.log(countriesArray[10]);  //  -> Kenya 
  
let lastIndexOfArray = countriesArray.length - 1;
console.log(countriesArray[lastIndexOfArray]); //  -> Kenya 

// Another Example 
const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
]; // List of food products 
  
console.log(shoppingCart) // -> all shoppingCart in array (8) ['Milk', 'Mango', 'Tomato', 'Potato', 'Avocado', 'Meat', 'Eggs', 'Sugar'] 
console.log(shoppingCart[0]) //  -> Milk 
console.log(shoppingCart[7]) //  -> Sugar 
  
let lastIndexOfArr = shoppingCart.length - 1;
console.log(shoppingCart[lastIndexOfArr]) //  -> Sugar 


//* Modifying Array Element 
// An array is mutable (modifiable). 
// Once an array is created, we can modify the contents of the array elements. 

const numbersArr = [1, 2, 3, 4, 5]; 
numbersArr[0] = 10;      // changing 1 at index 0 to 10 
numbersArr[1] = 20;      // changing  2 at index 1 to 20 

console.log(numbersArr); // [10, 20, 3, 4, 5] 

const countriesArr = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]; 

countriesArr[0] = 'Afghanistan';  // Replacing Albania by Afghanistan 
let lastIndexOfArrayEx = countriesArr.length - 1; 
countriesArr[lastIndexOfArrayEx] = 'Korea'; // Replacing Kenya by Korea 

console.log(countriesArr); // (11) ['Afghanistan', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Korea'] 


// * Methods to Manipulate An Array 
// There are different methods to manipulate an array. 
// Some of the available methods to deal with arrays: Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift 

//* Array Constructor 
// Array() 
// Array: To create an array. 

const array = Array(); // creates an an empty array 
console.log(arr); // [] 

const eightEmptyValues = Array(8); // it creates eight empty values 
console.log(eightEmptyValues); // (8) [empty × 8] 


//* Creating Static Values With Fill 
// fill() 
// fill: Fill all the array elements with a static value 

const arrayEx = Array(); // creates an an empty array 
console.log(arrayEx); // [] 

const eightXvalues = Array(8).fill('X'); // it creates eight element values filled with 'X' 
console.log(eightXvalues); // ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'] 

const eight0values = Array(8).fill(0); // it creates eight element values filled with '0' 
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0] 

const four4values = Array(4).fill(4); // it creates 4 element values filled with '4' 
console.log(four4values); // [4, 4, 4, 4] 


//* Concatenating Array Using Concat 
// concat() 
// concat: To concatenate two arrays. 

const firstList = [1, 2, 3]; 
const secondList = [4, 5, 6]; 
const thirdList = firstList.concat(secondList); 

console.log(thirdList); // [1, 2, 3, 4, 5, 6] 

const fruitsArr = ['banana', 'orange', 'mango', 'lemon'];                 // array of fruits 
const vegetablesArr = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']; // array of vegetables 
const fruitsAndVegetables = fruitsArr.concat(vegetablesArr);                 // concatenate the two arrays 

console.log(fruitsAndVegetables); // (9) ['banana', 'orange', 'mango', 'lemon', 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] 


//* Getting Array Length 
// .length 
// Length: To know the size of the array 

const numbersArrExample = [1, 2, 3, 4, 5]; 
console.log(numbersArrExample.length); // -> 5 is the size of the array 


//* Getting Index Of an Element in an Array 
// indexOf() 
// indexOf: To check if an item exist in an array. 
// If it exists it returns the index else it returns -1. 

const numbersArrayExample = [1, 2, 3, 4, 5]; 

console.log(numbersArrayExample.indexOf(5)); // -> 4 
console.log(numbersArrayExample.indexOf(0)); // -> -1  - doesn't exist since 0 is not in list 
console.log(numbersArrayExample.indexOf(1)); // -> 0 
console.log(numbersArrayExample.indexOf(6)); // -> -1  - doesn't exist since 0 is not in list 

// Check an Element if it Exists in an Array. 
// Check items in a list 

// let us check if a banana exists in the array

const fruitsList = ['banana', 'orange', 'mango', 'lemon']; 

let index = fruitsList.indexOf('banana');  // 0 

if(index === -1){
   console.log('This fruit does not exist in the array');  
} else {
    console.log('This fruit does exist in the array'); 
} 
// This fruit does exist in the array 

// we can use also ternary here
index === -1 
    ? console.log('This fruit does not exist in the array') 
    : console.log('This fruit does exist in the array')  
// This fruit does exist in the array 

// let us check if an avocado exists in the array 

let indexOfAvocado = fruitsList.indexOf('avocado')  // -1, if the element not found index is -1 

if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array');   
} else {
    console.log('This fruit does exist in the array'); 
}
// This fruit does not exist in the array 


//* Getting Last Index Of an Element in an Array 
// lastIndexOf() 
// lastIndexOf: It gives the position of the last item's appearance in the array. 
// If it exists, it returns the index else it returns -1. 

const numbersArrEx = [1, 2, 3, 4, 5, 3, 1, 2]; 

console.log(numbersArrEx.lastIndexOf(2)); // 7 
console.log(numbersArrEx.lastIndexOf(0)); // -1 
console.log(numbersArrEx.lastIndexOf(1)); //  6 
console.log(numbersArrEx.lastIndexOf(4)); //  3 
console.log(numbersArrEx.lastIndexOf(6)); // -1 


//* Check if item is Included in an Array 
// includes() 
// includes: To check if an item exist in an array. 
// If it exists, it returns the true else it returns false. 

const numbersArrayEx = [1, 2, 3, 4, 5]; 

console.log(numbersArrayEx.includes(5)); // true 
console.log(numbersArrayEx.includes(0)); // false 
console.log(numbersArrayEx.includes(1)); // true 
console.log(numbersArrayEx.includes(6)); // false 

const webTechsArr = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies 

console.log(webTechsArr.includes('Node'));  // true 
console.log(webTechsArr.includes('C'));     // false 


//* Checking If It's An Array 
// Array.isArray() 
// Array.isArray: To check if the data type is an array 

const numbersList = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbersList)); // true 

const number = 100; 
console.log(Array.isArray(number)); // false 


//* Converting Array to String 
// toString() 
// toString: Converts array to string 

const numbersListEx = [1, 2, 3, 4, 5]; 
console.log(numbersListEx.toString()); // 1,2,3,4,5 

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']; 
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook 


//* Joining Array Elements 
// join() 
// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. 
// By default, it joins with a comma, but we can pass different string parameter which can be joined between the items. 

const numbersListExample = [1, 2, 3, 4, 5]; 
console.log(numbersListExample.join()) // 1,2,3,4,5   - returns as a string and by default with comma but no space 

// Example 2 
const namesArray = ['Asabeneh', 'Mathias', 'Elias', 'Brook']; 

console.log(namesArray.join()); // Asabeneh,Mathias,Elias,Brook 
console.log(namesArray.join('')); // AsabenehMathiasEliasBrook 
console.log(namesArray.join(' ')); // Asabeneh Mathias Elias Brook 
console.log(namesArray.join(', ')); // Asabeneh, Mathias, Elias, Brook 
console.log(namesArray.join(' # ')); // Asabeneh # Mathias # Elias # Brook 

// Example 3 
const webTechsArrayEx = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]; // List of web technologies 

console.log(webTechsArrayEx.join());       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB" 
console.log(webTechsArrayEx.join(' # '));  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB" 


//* Slice Array Elements 
// slice() 
// Slice: To cut out multiple items in range. 
// It takes two parameters: starting and ending position. 
// It doesn't include the ending position. 

const numbersEx = [1,2,3,4,5]; 

console.log(numbersEx.slice()); // -> it copies all items  (5) [1, 2, 3, 4, 5]
console.log(numbersEx.slice(0)); // -> it copies all items  (5) [1, 2, 3, 4, 5] 
console.log(numbersEx.slice(0, numbers.length)); // it copies all items  (5) [1, 2, 3, 4, 5] 
console.log(numbersEx.slice(1,4)); // -> [2,3,4] // begins at index 1 and it doesn't include the ending position 


//* Splice Method in an Array 
// splice() 
// splice: Takes 3 Parameters: Starting position, number of times to be removed, and number of items to be added. 

const numbersExample = [1, 2, 3, 4, 5]; 
numbersExample.splice(); 
console.log(numbersExample);  // -> removes all items  (5) [1, 2, 3, 4, 5] //? 

const numbersSplice = [1, 2, 3, 4, 5]; 
numbersSplice.splice(0, 1); 
console.log(numbersSplice);  // removes the first item  (4) [2, 3, 4, 5] 

const numbersSpliceEx = [1, 2, 3, 4, 5, 6]; 
numbersSpliceEx.splice(3, 3, 7, 8, 9); 
console.log(numbersSpliceEx);  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items 


//* Adding Item to End of an Array Using Push 
// push() 
// Push: adding item in the end of an array. 
// To add item to the end of an existing array we use the push method. 

// Syntax 
/*
const arr  = ['item1', 'item2','item3']; 
arr.push('new item'); 
console.log(arr); 
*/ 
// ['item1', 'item2','item3','new item'] 

const newNumbersArray = [1, 2, 3, 4, 5]; 
newNumbersArray.push(6); 
console.log(newNumbersArray); // -> [1,2,3,4,5,6] 

newNumbersArray.pop(); // -> removes one item from the end of the array 
console.log(newNumbersArray); // -> [1,2,3,4,5]   - 6 is removed 

// Example 2 
let fruitsArrayEx = ['banana', 'orange', 'mango', 'lemon']; 
fruitsArrayEx.push('apple'); 
console.log(fruitsArrayEx);    // ['banana', 'orange', 'mango', 'lemon', 'apple'] 

fruitsArrayEx.push('lime'); 
console.log(fruitsArrayEx);   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime'] 


//* Removing the End Element Using Pop 
// pop() 
// pop: Removing the item in the end. 

const numbersArrayPop = [1, 2, 3, 4, 5]; 
numbersArrayPop.pop(); // -> remove one item from the end 
console.log(numbersArrayPop); // -> [1, 2, 3, 4] 


//* Removing an Element from the Beginning 
// shift() 
// shift: Removing one array element in the beginning of the array. 

const numbersArrayShift = [1, 2, 3, 4, 5]; 
numbersArrayShift.shift(); // -> remove one item from the beginning 
console.log(numbersArrayShift); // -> [2, 3, 4, 5] 


//* Add an Element in the Beginning 
// unshift() 
// unshift: Adding array element in the beginning of the array. 

const numbersArrayUnshift = [1, 2, 3, 4, 5]; 
numbersArrayUnshift.unshift(0); // -> add one item from the beginning 
console.log(numbersArrayUnshift); // -> [0, 1, 2, 3, 4, 5] 


//* Reversing Array Order 
// reverse() 
// reverse: reverse the order of an array. 

const numbersReverse = [1, 2, 3, 4, 5]; 
numbersReverse.reverse(); // -> reverse array order 
console.log(numbersReverse); // [5, 4, 3, 2, 1] 

numbersReverse.reverse(); 
console.log(numbersReverse); // [1, 2, 3, 4, 5]    - reverses array back to initial the second time 


//* Sorting Elements in Array 
// sort() 
// sort: arrange array elements in ascending order. 
// Sort takes a call back function, we will see how we use sort with a call back function in the coming sections. 

const webTechsSort = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]; 
  
webTechsSort.sort(); 
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]    - alphabetical order 
  
webTechsSort.reverse(); // after sorting we can reverse it 
console.log(webTechsSort); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"] 


// * Array of Arrays 
// An Array can store different data types including an array itself. 
// Let us create an array of arrays 

const firstNums = [1, 2, 3]; 
const secondNums = [1, 4, 9]; 

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]; 
console.log(arrayOfArray[0]); // [1, 2, 3]    - first array has index of 0 

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']; 
const backEnd = ['Node','Express', 'MongoDB']; 
const fullStack = [frontEnd, backEnd]; 
console.log(fullStack);   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]] 
console.log(fullStack.length);  // 2 
console.log(fullStack[0]);  // ["HTML", "CSS", "JS", "React", "Redux"] 
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"] 