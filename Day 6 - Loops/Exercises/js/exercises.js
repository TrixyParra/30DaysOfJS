// ToDo: Day 6 - Loop Exercises 

// ! Exercises - Level 1 

// * 1. Iterate 0 to 10 using for loop, do the same using while and do while loop. 
// for loop 
for (let i = 0; i <= 10; i++) {
    console.log(i); 
} 
// 0 
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7 
// 8 
// 9 
// 10 

// while loop 
let i = 0; 
while (i <= 10) {
    console.log(i); 
    i++ 
} 
// 0 
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7 
// 8 
// 9 
// 10 

// do while loop 
let iExample = 0; 
do {
    console.log(iExample); 
    iExample++ 
} while (iExample <= 10) 
// 0 
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7 
// 8 
// 9 
// 10 

// * 2. Iterate 10 to 0 using for loop, do the same using while and do while loop. 
// for loop 
for (let i = 10; i >= 0; i--) {
    console.log(i); 
} 
// 10 
// 9 
// 8 
// 7 
// 6 
// 5 
// 4 
// 3 
// 2 
// 1 
// 0  

// while loop 
let iEx = 10; 
while (iEx >= 0) {
    console.log(iEx); 
    iEx--
} 
// 10 
// 9 
// 8 
// 7 
// 6 
// 5 
// 4 
// 3 
// 2 
// 1 
// 0 

// do while loop 
let newI = 10; 
do {
    console.log(newI); 
    newI-- 
} while (newI >= 0) 
// 10 
// 9 
// 8 
// 7 
// 6 
// 5 
// 4 
// 3 
// 2 
// 1 
// 0 

// * 3. Iterate 0 to n using for loop. 
let n = 5 
for (let i = 0; i <= n; i++) {
    console.log(i); 
} 
// 0 
// 1 
// 2 
// 3 
// 4 
// 5 

// * 4. Write a loop that makes the following pattern using console.log(): 
// # 
// ## 
// ### 
// #### 
// ##### 
// ###### 
// ####### 

var x, y, h; 
for (let x = 1; x <= 8; x++) {
    for (y = 1; y < x; y++) {
        h = h + ('#'); 
    }
    console.log(h); 
    h = ''; 
} 
// undefined // ? 
// # 
// ## 
// ### 
// #### 
// ##### 
// ###### 
// ####### 

// * 5. Use loop to print the following pattern: 
// 0 x 0 = 0 
// 1 x 1 = 1 
// 2 x 2 = 4 
// 3 x 3 = 9 
// 4 x 4 = 16 
// 5 x 5 = 25 
// 6 x 6 = 36 
// 7 x 7 = 49 
// 8 x 8 = 64 
// 9 x 9 = 81 
// 10 x 10 = 100 

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`); 
} 
// 0 x 0 = 0 
// 1 x 1 = 1 
// 2 x 2 = 4 
// 3 x 3 = 9 
// 4 x 4 = 16 
// 5 x 5 = 25 
// 6 x 6 = 36 
// 7 x 7 = 49 
// 8 x 8 = 64 
// 9 x 9 = 81 
// 10 x 10 = 100 

// * 6. Using loop print the following pattern: 
// i    i^2   i^3 
// 0    0     0 
// 1    1     1 
// 2    4     8 
// 3    9     27 
// 4    16    64 
// 5    25    125 
// 6    36    216 
// 7    49    343 
// 8    64    512 
// 9    81    729 
// 10   100   1000 

console.log('i    i^2    i^3'); 

for (let i = 0; i <= 10; i++) {
    console.log(`${i}    ${i**2}    ${i**3}`); 
} 
// i    i^2   i^3 
// 0    0     0 
// 1    1     1 
// 2    4     8 
// 3    9     27 
// 4    16    64 
// 5    25    125 
// 6    36    216 
// 7    49    343 
// 8    64    512 
// 9    81    729 
// 10   100   1000 

// * 7. Use for loop to iterate from 0 to 100 and print only even numbers. 
for (let i = 2; i <= 100; i=i+2) {
    console.log(i); 
} 
// 2 
// 4 
// ... 
// 100 


// * 8. Use for loop to iterate from 0 to 100 and print only odd numbers. 
for (let i = 1; i <= 100; i=i+2) {
    console.log(i); 
} 
// 1 
// 3 
// 5 
// ... 
// 99 

// * 9. Use for loop to iterate from 0 to 100 and print only prime numbers. 
// looping from lowest number to highest number 
for (let i = 0; i <= 100; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1; 
            break; 
        } 
    } 

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i); 
    } 
} 
// 1 
// 3 
// 5 
// 7 
// 11 
// 13 
// 17 
// 19 
// 23 
// 29 
// 31 
// 37 
// 41 
// 43 
// 47 
// 53 
// 59 
// 61 
// 67 
// 71 
// 73 
// 79 
// 83 
// 89 
// 97 

// * 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers. 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]; 
let sum = 0; 
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i] 
} 
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`); 
// The sum of all numbers from 0 to 100 is 5050. 

// * 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
// Sum of All Evens 
let evenSum = 0; 
for (let i = 2; i <= 100; i=i+2) {
    evenSum = evenSum + i 
} 
console.log(`The sum of all evens from 0 to 100 is ${evenSum}.`); 
// The sum of all evens from 0 to 100 is 2550. 

// Sum of All Odds 
let oddSum = 0; 
for (let i = 1; i <= 100; i=i+2) {
    oddSum += i 
} 
console.log(`The sum of all odds from 0 to 100 is ${oddSum}.`); 
// The sum of all odds from 0 to 100 is 2500. 

// * 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array. 
const array = []; 
array.push(evenSum, oddSum); 
console.log(array); 
// (2) [2550, 2500] 

// * 13. Develop a small script which generates an array of 5 random numbers. 
// Using for loop 
const randomArray = [];
for (let i = 0, j = 5; i < j; i++) {
    randomArray.push(Math.floor(Math.random() * 100)) 
} 
console.log(randomArray); 
// (5) [14, 44, 1, 31, 70]  --> will be random on each refresh 

// Using Array.from() method (ES6+) 
let randomArrayTwo = Array.from({length: 5}, () => Math.floor(Math.random() * 100)); 
console.log(randomArrayTwo); 
// (5) [85, 93, 2, 1, 42]  --> will be random on each refresh 

// Using Array.fill() with map() method 
const randomArrayThree = Array(5) // array size is 5
				.fill()
				.map(() => Math.floor(Math.random() * 100)); // numbers from 0-100 (exclusive) 
console.log(randomArrayThree); 
// (5) [75, 29, 12, 4, 83]  --> will be random on each refresh 

// * 14. Develop a small script which generates an array of 5 random numbers and the numbers must be unique. 
// Using for loop 
const randomArrayFour = []; 
for (let i = 0, j = 5; i < j; i++) {
    let randomNumber = Math.floor(Math.random() * 100); 
    if (!randomArrayFour.includes(randomNumber)) {
        randomArrayFour.push(randomNumber); 
    } 
} 
console.log(randomArrayFour); 
// (5) [61, 96, 12, 53, 75]  --> will be random on each refresh 
// (4) [59, 99, 70, 17]  --> will be random on each refresh 
//! if a number is repeated, it will not push it into the array -> making it then an array of only 4 elements 

// Using while conditional 
const randomArr = []; 
while (randomArr.length < 5) {
    let r = Math.floor(Math.random() * 100) + 1; 
    if (randomArr.indexOf(r) === -1) randomArr.push(r); 
} 
console.log(randomArr); 
// (5) [43, 80, 15, 96, 41]  --> will be random on each refresh 

// * 15. Develop a small script which generates a six character random id: 
// 5j2khz 

// const characters = /[a-zA-Z0-9]/;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
let id = ''; 

for ( let i = 0; i < 6; i++ ) {
    id += characters.charAt(Math.floor(Math.random() * characters.length)); 
} 
console.log(id); 
// 3vd9Ad  --> will be random on each refresh 


// ! Exercises = Level 2 

// * 1. Develop a small script which generate any number of characters random id: 
// fe3jo1gl124g 
// xkqci4utda1lmbelpkm03rba 

// 12 characters 
let randomId = ''; 
for (let i = 0; i < 12; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * characters.length)); 
} 
console.log(randomId); 
// k8D5YdmAow2j  --> will be random on each refresh 

// 24 characters 
let newRandomId = ''; 
for (let i = 0; i < 24; i++) {
    newRandomId += characters.charAt(Math.floor(Math.random() * characters.length)); 
} 
console.log(newRandomId); 
// GKiCmNhialg6X5DAjq346hDk  --> will be random on each refresh 

// * 2. Write a script which generates a random hexadecimal number. 
