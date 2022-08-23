// ToDo: Day 3 Lecture 

//* Booleans 
// A boolean data type represents one of the two values: true or false. Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false.

//Example: Boolean Values
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false 

//* Truthy Values 
// All numbers(positive and negative) are truthy except zero 
// All strings are truthy except an empty string ('') 
// The boolean true 

//* Falsy Values 
// 0 
// 0n 
// null 
// undefined 
// NaN 
// the boolean false 
// '', "", ``, empty string 


//* Undefined 
// If we declare a variable and if we do not assign a value, the value will be undefined. 
// In addition to this, if a function is not returning the value, it will be undefined. 

let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet 


//* Null 
// has no value 
let empty = null
console.log(empty) // -> null , means no value 


//* Operators 

//* Assignment Operators 
// An equal sign in JavaScript is an assignment operator. It uses to assign a variable. 

let name = 'Asabeneh' 
let country = 'Finland' 

// =    x = y    x = y        y is stored in x 
// +=   x += y   x = x + y    x + y result is stored in x 
// -=   x -= y   x = x - y    x - y result is stored in x 
// *=   x += y   x = x * y    x * y result is stored in x 
// /=   x /= y   x = x / y    x / y result is stored in x 
// %=   x %= y   x = x % y    x % y result is stored in x 
// **=  x **= y  x = x ** y   x ** y result is stored in x 

//* Arithmetic Operators 
// Arithmetic operators are mathematical operators. 

// Addition(+): a + b 
// Subtraction(-): a - b 
// Multiplication(*): a * b 
// Division(/): a / b 
// Modulus(%): a % b 
// Exponential(**): a ** b 

let numOne = 4 
let numTwo = 3 
let sum = numOne + numTwo 
let diff = numOne - numTwo 
let mult = numOne * numTwo 
let div = numOne / numTwo 
let remainder = numOne % numTwo 
let powerOf = numOne ** numTwo 

console.log(sum, diff, mult, div, remainder, powerOf) // 7, 1, 12, 1.33, 1, 64 

const PI = 3.14 
let radius = 100          // length in meter 

//Let us calculate area of a circle 
const areaOfCircle = PI * radius * radius 
console.log(areaOfCircle)  //  314 m   31400 

const gravity = 9.81      // in m/s2 
let mass = 72             // in Kilogram 

// Let us calculate weight of an object 
const weight = mass * gravity 
console.log(weight)        // 706.32 N(Newton) 

const boilingPoint = 100  // temperature in oC, boiling point of water 
const bodyTemp = 37       // body temperature in oC 

// Concatenating string with numbers using string interpolation 
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
) 
/* 
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */ 


 //* Comparison Operators 
// In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value. 

// ==    Equal in value only: Equivalent               x = y 
// ===   Equal in value & data type: Exactly equal     x === y 
// !=    Not equal                                     x != y 
// >     Greater than                                  x > y 
// <     Less than                                     x < y 
// >=    Greater than or equal to                      x >= y 
// <=    Less than or equal to                         x <= y 

// Example: Comparison Operators 
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true - no values 
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false 

// As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==. The following link https://dorey.github.io/JavaScript-Equality-Table/ has an exhaustive list of comparison of data types. 

//* Logical Operators 
// The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). 
// The && operator gets true only if the two operands are true. 
// The || operator gets true either of the operand is true. 
// The ! operator negates true to false and false to true. 

// && Ampersand Operator Example
const checkOne = 4 > 3 && 10 > 5         // true && true -> true
const checkTwo = 4 > 3 && 10 < 5         // true && false -> false
const checkThree = 4 < 3 && 10 < 5         // false && false -> false

// || Pipe OR Operator, Example

const checkFour = 4 > 3 || 10 > 5         // true  || true -> true
const checkFive = 4 > 3 || 10 < 5         // true  || false -> true
const checkSix = 4 < 3 || 10 < 5         // false || false -> false

// ! Negation examples

let checkSeven = 4 > 3                     // true
let checkSevenNew = !(4 > 3)                  //  false
let isLightOnEx = true
let isLightOff = !isLightOn           // false
let isMarriedEx = !false                // true 

//* Increment Operator 
// In JavaScript we use the increment operator to increase a value stored in a variable. 
// The increment could be pre or post increment. Let us see each of them: 

// Pre-increment 
let count = 0
console.log(++count)        // 1 
console.log(count)          // 1 

// Post-increment 
let countExTwo = 0
console.log(countExTwo++)        // 0 
console.log(countExTwo)          // 1 
// We use most of the time post-increment. At least you should remember how to use post-increment operator. 

//* Decrement Operator 
// In JavaScript we use the decrement operator to decrease a value stored in a variable. 
// The decrement could be pre or post decrement. Let us see each of them: 

// Pre-decrement 
let countExThree = 0 
console.log(--countExThree) // -1 
console.log(countExThree)  // -1 

// Post-decrement 
let countExFour = 0 
console.log(countExFour--) // 0 
console.log(countExFour)   // -1 

//* Ternary Operators
// Ternary operator allows to write a condition. 
// Another way to write conditionals is using ternary operators. Look at the following examples:

let isRainingEx = true
isRainingEx
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.') 
// You need a rain coat. 

isRainingEx = false 
isRainingEx
  ? console.log('You need a rain coat.') 
  : console.log('No need for a rain coat.') 
// No need for a rain coat.  

let number = 5 
number > 0
  ? console.log(`${number} is a positive number`) 
  : console.log(`${number} is a negative number`) 
// 5 is a positive number 

number = -5 
number > 0
  ? console.log(`${number} is a positive number`) 
  : console.log(`${number} is a negative number`) 
// -5 is a negative number 

//* Operator Precedence 
// the "pemdas" of the operators - order in which goes first to last 
// I would like to recommend you to read about operator precedence from this link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 


//* Window Methods 

//* Window alert() Method 
// The alert() method displays an alert box with a specified message and an OK button. 
// It is a builtin method and it takes on argument. 
// Do not use too much alert because it is destructing and annoying, use it just to test. 

// alert(message)
// * alert('Welcome to 30DaysOfJavaScript') 

//* Window prompt() method 
// The window prompt method displays a prompt box with an input on your browser to take input values and the input data can be stored in a variable. 
// The prompt() method takes two arguments. The second argument is optional.

// prompt('required text', 'optional text')
// let numberEx = prompt('Enter number', 'number goes here')
// console.log(numberEx) // number goes here -> or null if cancel is clicked 

//* Window confirm() method 
// The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. 
// A confirm box is often used to ask permission from a user to execute something. 
// Window confirm() takes a string as an argument. 
// Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

// const agree = confirm('Are you sure you like to delete? ') 
// console.log(agree) // result will be true or false based on what you click on the dialog box 

// These are not all the window methods we will have a separate section to go deep into window methods. 


//* Date Object 
// Current time and date is created using JavaScript Date Object. 
// The object we create using Date object provides many methods to work with date and time. 
// The methods we use to get date and time information from a date object values are started with the word "get" because it provides the information. 

// getFullYear()       get the year as a four digit number (yyyy)       Ex: 2022 
// getMonth()          get the month as a number (0-11)                 Ex: 0 
// getDate()           get the day as a number (1-31)                   Ex: 4 
// getHours()          get the hour (0-23)                              Ex: 0 
// getMinutes()        get the minute (0-59)                            Ex: 56 
// getSeconds()        get the second (0-59)                            Ex: 41 
// getMilliseconds()   get the milliscond (0-999)                       Ex: 341 
// getTime()           get the time (milliseconds since Jan. 1, 1970)   Ex: 1578092201341 
// getDay()            get the weekday as a number (0-6)                Ex: 6 

//* Creating a Time Object 
// Once we create time object. The time object will provide information about time. Let us create a time object 
// We have created a time object and we can access any date time information from the object using the get methods we have mentioned on the table. 

const now = new Date()
console.log(now) // current date and time - Tue Aug 23 2022 00:34:58 GMT-0700 (Pacific Daylight Time) 

//* Getting Full Year 
// Let's extract or get the full year from a time object. 

const nowYear = new Date()
console.log(nowYear.getFullYear()) // 2022 

//* Getting Month 
// Let's extract or get the month from a time object. 

const nowMonth = new Date()
console.log(nowMonth.getMonth()) // 7, because the month is August,  month(0-11) -> January starts with 0 

//* Getting Date 
// Let's extract or get the date of the month from a time object. 

const nowDate = new Date()
console.log(nowDate.getDate()) // 23, because the day of the month is 23rd,  day(1-31) 

//* Getting Day 
// Let's extract or get the day of the week from a time object. 

const nowDay = new Date() 
console.log(nowDay.getDay()) // 2, because the day is Tuesday which is the 2nd day 
//  Sunday is 0, Monday is 1 and Saturday is 6 
// Getting the weekday as a number (0-6) 

//* Getting Hours 
// Let's extract or get the hours from a time object. 

const nowHours = new Date() 
console.log(nowHours.getHours()) // 0, because the time is 00:34:58 

//* Getting Minutes 
// Let's extract or get the minutes from a time object. 

const nowMinutes = new Date() 
console.log(nowMinutes.getMinutes()) // 34, because the time is 00:34:58 

//* Getting Seconds 
// Let's extract or get the seconds from a time object. 

const nowSeconds = new Date() 
console.log(nowSeconds.getSeconds()) // 58, because the time is 00:34:58 

//* Getting Time
// This method give time in milliseconds starting from January 1, 1970. 
// It is also known as Unix time. We can get the unix time in two ways:

// Using getTime()
const nowTime = new Date() 
console.log(nowTime.getTime()) // 1661241317477 - this is the number of seconds passed from January 1, 1970 to August 23, 2022 00:55:17 

// Using Date.now()
const allSeconds = Date.now() 
console.log(allSeconds) // 1661241317477 - this is the number of seconds passed from January 1, 1970 to August 23, 2022 00:55:17 

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true 

// Let us format these values to a human readable time format. Example:

const current = new Date()
const year = current.getFullYear() // return year
const month = current.getMonth() + 1 // return month(0 - 11)
const date = current.getDate() // return date (1 - 31)
const hours = current.getHours() // return number (0 - 23)
const minutes = current.getMinutes() // return number (0 -59)

console.log(`${month}/${date}/${year} ${hours}:${minutes}`) // 8/23/2022 0:58 