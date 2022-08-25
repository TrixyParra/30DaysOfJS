// ToDo: Day 4 - Exercises 

// ! Exercises - Level 1 
// * 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18. 
// Enter your age: 30 
// You are old enough to drive. 

// let age = prompt('Enter your age:', 30) 

// if (age >= 18) {
//     alert('You are old enough to drive') 
//     console.log('You are old enough to drive') 
// } else {
//     alert('You are not old enough to drive') 
//     console.log('You are not old enough to drive') 
// } 
//You are old enough to drive

// Enter your age:15
// You are left with 3 years to drive. 

// let newAge = prompt('Enter your age:', 15) 

// if (newAge >= 18) {
//     alert('You are old enough to drive') 
//     console.log('You are old enough to drive') 
// } else {
//     alert('You are left with 3 years to drive.') 
//     console.log('You are left with 3 years to drive.') 
// } 
// You are left with 3 years to drive. 

// * 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. 
// Enter your age: 30 
// You are 5 years older than me. 

// let yourAge = prompt('Enter your age:', 30) 
// let myAge = 25 

// if (yourAge > myAge) {
//     console.log('You are 5 years older than me') 
// } else {
//     console.log('I am older than you')
// } 
// You are 5 years older than me 

// * 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways: 
// using if else 
// ternary operator. 
let a = 4 
let b = 3 
// 4 is greater than 3 

// Using if else 
if (a > b) {
    console.log('a is greater than b') 
} else {
    console.log('a is less than b') 
} 
// a is greater than b 

// Using Ternary Operator 
a > b 
    ? console.log('a is greater than b') 
    : console.log('a is less than b') 
// a is greater than b 

// * 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? 
// Enter a number: 2 
// 2 is an even number 

// let number = prompt('Enter a number:', 2) 

// if (number % 2 == 0) {
//     console.log('2 is an even number') 
// } else {
//     console.log('2 is an odd number') 
// } 
// 2 is an even number 

// Enter a number: 9 
// 9 is an odd number. 

// number = prompt('Enter a number:', 9) 

// if (number % 2 == 0) {
//     console.log('9 is an even number') 
// } else {
//     console.log('9 is an odd number') 
// } 
// 9 is an odd number 


// ! Exercises - Level 2 
// * 1. Write a code which can give grades to students according to theirs scores: 
// 90-100, A 
// 70-89, B 
// 60-69, C 
// 50-59, D 
// 0-49, F 

// let score = prompt('Enter your score to receive your grade') 

// if (score >= 90 && score <= 100) {
//     console.log('You got an A') 
// } else if (score >= 70 && score <= 89) {
//     console.log('You got a B') 
// } else if (score >= 60 && score <= 69) {
//     console.log('You got a C') 
// } else if (score >= 50 && score <= 59) {
//     console.log('You got a D') 
// } else if (score >= 0 && score <= 49) {
//     console.log('You got an F') 
// } else {
//     console.log('Entered value was not a number') 
// } 
// You got a B   - sample input: 89 - will change depending on user input number 


// * 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is : 
// September, October or November, the season is Autumn. 
// December, January or February, the season is Winter. 
// March, April or May, the season is Spring 
// June, July or August, the season is Summer 

// let month = prompt('Check if the season is Autumn, Winter, Spring or Summer by entering a month. (Make sure to capitalize the first letter.)') 

// if (month === 'September' || month === 'October' || month === 'November') {
//     console.log('The season is Autumn') 
// } else if (month === 'December' || month === 'January' || month === 'February') {
//     console.log('The season is Winter') 
// } else if (month === 'March' || month === 'April' || month === 'May') {
//     console.log('The season is Spring') 
// } else if (month === 'June' || month === 'July' || month === 'August') {
//     console.log('The season is Summer') 
// } else {
//     console.log('Month was not entered. Please enter a month.') 
// } 
// The season is Summer   - sample input: August - will change depending on user input 

// * 3. Check if a day is weekend day or a working day. Your script will take day as an input. 
// What is the day today? Saturday 
// Saturday is a weekend. 
// What is the day today? Sunday
// Sunday is a weekend. 
// What is the day today? Friday 
// Friday is a working day. 
// What is the day today? Tuesday 
// Friday is a working day. 

// let dayInput = prompt('What day is it today?') 
// let day = dayInput.toLowerCase() 

// switch (day) {
//     case 'sunday' : 
//         console.log('Sunday is the weekend')
//         break 
//     case 'monday' : 
//         console.log('Monday is a work day') 
//         break 
//     case 'tuesday' : 
//         console.log('Tuesday is a working day') 
//         break 
//     case 'wednesday' : 
//         console.log('Wednesday is a working day') 
//         break 
//     case 'thursday' : 
//         console.log('Thursday is a working day') 
//         break 
//     case 'friday' : 
//         console.log('Friday is a working day') 
//         break 
//     case 'Saturday' : 
//         console.log('Saturday is the weekend') 
//         break 
//     default: 
//         console.log('Entered value was not a Day') 
// } 
// Friday is a working day   - sample input: Friday - will change depending on user input 

// ! Exercises - Level 3 
// * 1. Write a program which tells the number of days in a month. 
// Enter a month: January 
// January has 31 days. 
// Enter a month: JANUARY 
// January has 31 day 
// Enter a month: February 
// February has 28 days. 
// Enter a month: FEbruary 
// February has 28 days. 

// todo - finish exercises 