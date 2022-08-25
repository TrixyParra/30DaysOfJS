// ToDo: Day 4 Lecture - Conditionals 

// * Conditionals 
// Conditional statements are used for make decisions based on different conditions. By default , statements in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways:
// Conditional execution: a block of one or more statements will be executed if a certain expression is true. 
// Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover if, else , else if statements. The comparison and logical operators we learned in the previous sections will be useful in here. 

// Conditions can be implementing using the following ways: 
// if 
// if else 
// if else if else 
// switch 
// ternary operator 


//* If 
// In JavaScript and other programming languages the key word if is used to check if a condition is true and to execute the block code. To create an if condition - we need if keyword, condition inside parenthesis, and block of code inside a curly brackets {} 

// Syntax 
// if (condition) {
        // this part of code runs for truthy condition 
// } 

// Example  
let num = 3 
if (num > 0) {
  console.log(`${num} is a positive number`)
} 
//  3 is a positive number 

// As you can see in the condition example above, 3 is greater than 0, so it is a positive number. The condition was true and the block of code was executed. However, if the condition is false, we won't see any results. 

let isRaining = true 
if (isRaining) {
  console.log('Remember to take your rain coat.')
} 
// The same goes for the second condition, if isRaining is false the if block will not be executed and we do not see any output. 

// In order to see the result of a falsy condition, we should have another block, which is going to be else. 


//* if else 
// If condition is true the first block will be executed, if not the else condition will be executed. 

// Syntax 
// if (condition) {
        // this part of code runs for truthy condition 
// } else {
        // this part of code runs for false condition 
// } 

// Examples 
let number = 3 
if (number > 0) {
  console.log(`${number} is a positive number`) 
} else {
  console.log(`${number} is a negative number`) 
} 
//  3 is a positive number 

number = -3 
if (number > 0) {
  console.log(`${number} is a positive number`) 
} else {
  console.log(`${number} is a negative number`) 
} 
//  -3 is a negative number 

let itIsRaining = true 
if (itIsRaining) {
  console.log('You need a rain coat.') 
} else {
  console.log('No need for a rain coat.') 
}
// You need a rain coat. 

itIsRaining = false 
if (itIsRaining) {
  console.log('You need a rain coat.') 
} else {
  console.log('No need for a rain coat.') 
}
// No need for a rain coat. 

// The last condition is false, therefore the else block was executed. What if we have more than two conditions? In that case, we would use else if conditions. 


//* If Else if else 
// We make decisions not by checking one or two conditions instead we make decisions based on multiple conditions. 
// As similar to our daily life, programming is also full of conditions. 
// We use else if when we have multiple conditions. 

// Syntax
// if (condition) {
        // code
// } else if (condition) {
        // code
// } else {
        //  code
// } 

// Examples 
let a = 0 
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
} 
// 0 is zero 

// if else if else
let weather = 'sunny' 
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
} 
// Go out freely. 


//* Switch 
// Switch is an alternative for if else if else else. 
// The switch statement starts with a switch keyword followed by a parenthesis and code block. 
// Inside the code block we will have different cases. 
// Case block runs if the value in the switch statement parenthesis matches with the case value. 
// The break statement is to terminate execution so the code execution does not go down after the condition is satisfied. 
// The default block runs if all the cases don't satisfy the condition. 

// Syntax 
// switch(caseValue){
//     case 1:
       // code
//      break
//     case 2:
      // code
//      break
//     case 3:
      // code
//      break
//     default:
      // code
// } 

// Examples 
let weatherNow = 'cloudy' 
switch (weatherNow) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for a rain coat.')
} 
// It might be cold, you need a jacket. 

// Switch - More Examples 
let dayUserInput = prompt('What day is today ?') 
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
} 
// Today is Thursday - day I tried this example 

// Examples to use conditions in the cases 
let numExample = prompt('Enter number'); 
switch (true) {
  case numExample > 0:
    console.log('Number is positive');
    break;
  case numExample == 0:
    console.log('Numbers is zero');
    break;
  case numExample < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
} 
// Number is positive  - put 50 as a random chosen number 


//* Ternary Operators 
// Another way to write conditionals is using ternary operators. 

let itsRaining = true
itsRaining
  ? console.log('You need a rain coat.') 
  : console.log('No need for a rain coat.') 
// You need a rain coat. 