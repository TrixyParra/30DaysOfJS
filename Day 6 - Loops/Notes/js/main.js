// ToDo: Day 6 Notes - Loops 

// * Loops 
// In programming languages, to carry out a repetitive task we use different kinds of loops. 
// The following examples are the commonly used loops in JavaScript and other programming languages. 


//* for Loop 
// loops until it meets the condition 
// an increment/decrement is needed or it will be an endless loop 
// used when we know how many times to iterate the loop 

// For Loop Structure 
// for(initialization, condition, increment/decrement){
       // code goes here 
// } 

for (let i = 0; i <= 5; i++) {
    console.log(i);                 // will loop through i and increment (i++) till it meets condition (i <= 5) 
}  
// 0  
// 1  
// 2 
// 3 
// 4 
// 5 

for (let i = 5; i >= 0; i--) {
    console.log(i);                // will loop through i and decrement (i--) till it meets condition (i >= 0) 
} 
// 5 
// 4 
// 3 
// 2 
// 1 
// 0 

for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`); 
} 
// 0 * 0 = 0 
// 1 * 1 = 1 
// 2 * 2 = 4 
// 3 * 3 = 9 
// 4 * 4 = 16 
// 5 * 5 = 25 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']; 
const newArr = []; 
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())                 // looped through countries by it's index and condition 
} 
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"] 

// Adding all elements in the array 

const numbers = [1, 2, 3, 4, 5]; 
let sum = 0; 
for (let i = 0; i < numbers.length; i++) {
  sum  = sum + numbers[i]  // can be shortened, sum += numbers[i]   --> looped through numbers by it's index 

} 
console.log(sum);  // 15        --> 0+1=1 -> 1+2=3 -> 3+3=6 -> 6+4=10 -> 10+5=15 

// Creating a new array based on the existing array 

const numbersEx = [1, 2, 3, 4, 5]; 
const newArrEx = []; 
let sumEx = 0; 
for (let i = 0; i < numbersEx.length; i++) {
  newArrEx.push(numbersEx[i] ** 2) 

} 
console.log(newArrEx);  // [1, 4, 9, 16, 25]        --> creates new array looping through numbersEx by index 

const countriesEx = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']; 
const newArray = []; 
for (let i = 0; i < countriesEx.length; i++) {
  newArray.push(countriesEx[i].toUpperCase()) 
} 
console.log(newArray); 
// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"] 
// looped through countries by it's index and condition to create new array 


//* while loop 
// will loop only while the condition is true 
// used when you don't know how many times you need to iterate 

let i = 0;
while (i <= 5) {
  console.log(i); 
  i++               // if there's no increment/decrement, it's an endless loop 
} 
// 0 
// 1 
// 2 
// 3 
// 4 
// 5 


//* do while loop 
// will loop and do what it's told while condition is met 
// runs at least once before checking condition --> ex: i = 6 would console 6 because it runs first before consition so does not include and console condition 

let iExample = 0; 
do {
  console.log(iExample); 
  iExample++ 
} while (iExample <= 5) 
// 0 
// 1 
// 2 
// 3 
// 4 
// 5 


//* for of loop
// We use for of loop for arrays. 
// A very handy way to iterate through an array if we are not interested in the index but the item of each element in the array. 

// for of loop Structure 
// for (const element of arr) {
       // code goes here 
// } 

// Examples 

const numbersArray = [1, 2, 3, 4, 5]; 

for (const num of numbersArray) {
  console.log(num);                     // --> will loop through whole array and console all numbers of array 
} 
// 1 
// 2 
// 3 
// 4 
// 5 

for (const num of numbersArray) {
  console.log(num * num); 
} 
// 1 
// 4 
// 9 
// 16 
// 25 

// adding all the numbers in the array
let sumOfArray = 0; 
for (const num of numbersArray) {
  sumOfArray = sumOfArray + num 
	// can be also be shortened like this, sum += num 
    // after this we will use the shorter synthax (+=, -=, *=, /= etc.) 
} 
console.log(sumOfArray) // 15        --> 0+1=1 -> 1+2=3 -> 3+3=6 -> 6+4=10 -> 10+5=15 

const webTechs = [
  'HTML', 
  'CSS', 
  'JavaScript', 
  'React', 
  'Redux', 
  'Node', 
  'MongoDB'
]; 

for (const tech of webTechs) {
  console.log(tech.toUpperCase());              // loops through array and consoles all to uppercase 
} 
// HTML 
// CSS 
// JAVASCRIPT 
// REACT 
// NODE 
// MONGODB 

for (const tech of webTechs) {
  console.log(tech[0]); // gets only the first letter of each element 
} 
// H 
// C 
// J 
// 2 R  
// N 
// M 

const countriesArray = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']; 
const newArrExample = []; 
for(const country of countriesArray) {
  newArrExample.push(country.toUpperCase())         // loops through array and consoles new array all to uppercase 
} 

console.log(newArrExample); 
// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"] 


//* break 
// Break is used to interrupt a loop. 

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break; 
    } 
    console.log(i); 
} 
// 0 
// 1 
// 2 
// The above code stops if 3 is found in the iteration process 
// does not console where it stops or meets condition 


//* continue 
// We use the keyword continue to skip a certain iterations. 

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue; 
    } 
    console.log(i); 
} 
// 0 
// 1 
// 2 
// 4 
// 5 
// The above code continues past if condition to meet the for condition 


//! not discussed yet but included in video tutorials 
//* forEach 
// used when interested in the item, index, array 

//* for in 
// used with objects 

// * Link to All Loops Videos 
// https://www.youtube.com/playlist?list=PLj2_sGY1obtvZjihl771UnLEhKecBGary 