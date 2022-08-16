// * Lecture - Data Types 

// * Primitive Data Types 
// Primitive data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it. Primitive data types are compared by its values. 
let numOne = 3 
let numTwo = 3 

console.log(numOne == numTwo) // true 

let js = 'JavaScript' 
let py = 'Python' 

console.log(js == py) // false 

let lightOn = true 
let lightOff = false 

console.log(lightOn == lightOff) // false 

// * Non-Primitive Data Types 
// Non-primitive data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created. 
// An array is a list of data values in a square bracket. Arrays can contain the same or different data types. Array values are referenced by their index. In JavaScript array index starts at zero. I.e., the first element of an array is found at index zero, the second element at index one, and the third element at index two, etc. 
let array = [1, 2, 3] 
array[0] = 10 

console.log(array) // (3) [10, 2, 3] 

// Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal. 
let nums = [1, 2, 3] 
let numbers = [1, 2, 3] 

console.log(nums == numbers)  // false 

let userOne = {
name:'Asabeneh', 
role:'teaching', 
country:'Finland' 
} 

let userTwo = {
name:'Asabeneh', 
role:'teaching', 
country:'Finland' 
} 

console.log(userOne == userTwo) // false 

// Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects. 
// Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object. 
let list = [1, 2, 3] 
let secondList = list 

console.log(list == secondList)  // true 

let firstUser = {
name:'Asabeneh', 
role:'teaching', 
country:'Finland' 
}

let secondUser = userOne 

console.log(firstUser == secondUser)  // true 


// * Numbers 
// Numbers are integers and decimal values which can do all the arithmetic operations. 

// * Declaring Number Data Types 
let age = 35 
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2 
let mass = 72         // mass in Kilogram 
const PI = 3.14       // pi a geometrical constant 

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant 
const bodyTemp = 37      // oC average human body temperature, which is a constant 

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp) 
// 35 9.81 72 3.14 100 37 

// * Math Object 
// In JavaScript the Math Object provides a lots of methods to work with numbers.  
const pi = Math.PI 

console.log(PI)                            // 3.141592653589793 

// Rounding to the closest number 
// if above .5 up if less 0.5 down rounding 

console.log(Math.round(PI))                // 3 to round values to the nearest number 

console.log(Math.round(9.81))              // 10 

console.log(Math.floor(PI))                // 3 rounding down 

console.log(Math.ceil(PI))                 // 4 rounding up 

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value 

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value 

const randNum = Math.random() // creates random number between 0 to 0.999999 
console.log(randNum)   // 0.8071832378472583 -> will change on each refresh 

// Let us  create random number between 0 to 10 

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10 
console.log(num)   // 1 -> will change on each refresh

//Absolute value 
console.log(Math.abs(-10))      // 10 

//Square root
console.log(Math.sqrt(100))     // 10 

console.log(Math.sqrt(2))       // 1.4142135623730951 

// Power 
console.log(Math.pow(3, 2))     // 9 

console.log(Math.E)             // 2.718 

// Logarithm 
// Returns the natural logarithm with base E of x, Math.log(x) 
console.log(Math.log(2))        // 0.6931471805599453 
console.log(Math.log(10))       // 2.302585092994046 

// Returns the natural logarithm of 2 and 10 respectively 
console.log(Math.LN2)           // 0.6931471805599453 
console.log(Math.LN10)          // 2.302585092994046 

// Trigonometry 
Math.sin(0) 
Math.sin(60) 

Math.cos(0) 
Math.cos(60) 

// * Random Number Generator 
// The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999... 
let randomNumber = Math.random() // generates 0 to 0.999... 

// The random() method to generate a random number between 0 and 10: 
let randomNum = Math.random()         // generates 0 to 0.999 
let numBtnZeroAndTen = randomNum * 11 

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99 

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen) 
console.log(randomNumRoundToFloor)    // this gives between 0 and 10 


// * Strings 
// Strings are texts, which are under single , double, back-tick quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote. 
let space = ' '           // an empty space string 
let firstName = 'Asabeneh' 
let lastName = 'Yetayeh' 
let countryName = 'Finland' 
let city = 'Helsinki' 
let language = 'JavaScript' 
let job = 'teacher' 
let quote = "The saying,'Seeing is Believing' is not correct in 2020." 
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.` 

// * String Concatenation 
// Connecting two or more strings together is called concatenation. 
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName); 
// Asabeneh Yetayeh 

// * Concatenating Using Addition Operator 
// Concatenating using the addition operator is an old way. This way of concatenating is tedious and error-prone. 
// Declaring different variables of different data types
let espacio = ' '
let nombre = 'Asabeneh'
let apellido = 'Yetayeh'
let pais = 'Finland'
let ciudad = 'Helsinki'
let programa = 'JavaScript'
let empleo = 'teacher'
let edad = 250


let nombreCompleto = nombre + espacio + apellido 
let personInfoOne = nombre + '. I am ' + edad + '. I live in ' + pais; // ES5 string addition

console.log(personInfoOne) 
// Asabeneh. I am 250. I live in Finland 

// * Long Literal Strings 
// A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. 
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too." 

console.log(paragraph) 
// My name is Asabeneh Yetayeh. I live in Finland, Helsinki.I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. In the end of 2019, I was thinking to expand my teaching and to reach to global audience and I started a Python challenge from November 20 - December 19.It was one of the most rewarding and inspiring experience.Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and I hope you are enjoying too. 

// * Escape Sequences in Strings 
// In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters: 
/* 

\n: new line 
\t: Tab, means 8 spaces 
\\: Back slash 
\': Single quote (') 
\": Double quote (") 

*/ 
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break 
// I hope everyone is enjoying the 30 Days Of JavaScript challenge.
// Do you ?
console.log('Days\tTopics\tExercises') // Days  Topics  Exercises 
console.log('Day 1\t3\t5') // Day 1 3 5 
console.log('Day 2\t3\t5') // Day 2 3 5 
console.log('Day 3\t3\t5') // Day 3 3 5 
console.log('Day 4\t3\t5') // Day 4 3 5 
console.log('This is a backslash  symbol (\\)') // To write a backslash 
// This is a backslash  symbol (\) 
console.log('In every programming language it starts with \"Hello, World!\"') 
// In every programming language it starts with "Hello, World!" 
console.log("In every programming language it starts with \'Hello, World!\'") 
// In every programming language it starts with 'Hello, World!' 
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020') 
// The saying 'Seeing is Believing' isn't correct in 2020 

// * Template Literals (Template Strings) 
// To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. 

// Syntax
// `String literal text`
// `String literal text ${expression}` 

// Example 1 
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically 

// Example 2 
let theFirstName = 'Asabeneh'
let theLastName = 'Yetayeh'
let theCountry = 'Finland'
let theCity = 'Helsinki'
let theLanguage = 'JavaScript'
let theJob = 'teacher'
let theAge = 250
let theFullName = theFirstName + ' ' + theLastName

let personInfoTwo = `I am ${theFullName}. I am ${theAge}. I live in ${theCountry}.` //ES6 - String interpolation method
let personInfoThree = `I am ${theFullName}. I live in ${theCity}, ${theCountry}. I am a ${theJob}. I teach ${theLanguage}.`
console.log(personInfoTwo) // I am Asabeneh Yetayeh. I am 250. I live in Finland. 
console.log(personInfoThree) // I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript. 

// Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations (comparison, arithmetic operations, ternary operation). 
let x = 2
let y = 3
console.log(`${x} is greater than ${y}: ${x > y}`) // 2 is greater than 3: false 

// * String Methods 
// Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods. There are different string methods that can help us to work with strings. 

//* 1. length: The string length method returns the number of characters in a string included empty space. 
let jS = 'JavaScript' 
console.log(jS.length)         // 10 
let name = 'Asabeneh' 
console.log(name.length)  // 8 

//* 2. Accessing characters in a string: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one. 
let string = 'JavaScript' 
let firstLetter = string[0] 

console.log(firstLetter)           // J 

let secondLetter = string[1]       // a 
let thirdLetter = string[2]        // v 
let lastLetter = string[9] 

console.log(lastLetter)            // t 

let lastIndex = string.length - 1 

console.log(lastIndex)  // 9 
console.log(string[lastIndex])    // t 

//* 3. toUpperCase(): this method changes the string to uppercase letters. 
let stringEx = 'JavaScript' 

console.log(stringEx.toUpperCase())     // JAVASCRIPT 

let firstNameEx = 'Asabeneh' 

console.log(firstNameEx.toUpperCase())  // ASABENEH 

let countryEx = 'Finland' 

console.log(countryEx.toUpperCase())    // FINLAND 

//* 4. toLowerCase(): this method changes the string to lowercase letters. 
let stringExample = 'JavasCript' 

console.log(stringExample.toLowerCase())     // javascript 

let firstNameExample = 'Asabeneh' 

console.log(firstNameExample.toLowerCase())  // asabeneh 

let countryExample = 'Finland' 

console.log(countryExample.toLowerCase())   // finland 

//* 5. substr(): It takes two arguments, the starting index and number of characters to slice. 
//! deprecated 
let stringName = 'JavaScript' 
console.log(stringName.substr(4,6))    // Script 

let country = 'Finland' 
console.log(country.substr(3, 4))   // land 

//* 6. substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index. 
let newString = 'JavaScript' 

console.log(newString.substring(0,4))     // Java 
console.log(newString.substring(4,10))    // Script 
console.log(newString.substring(4))       // Script 

let newCountry = 'Finland' 

console.log(newCountry.substring(0, 3))   // Fin 
console.log(newCountry.substring(3, 7))   // land 
console.log(newCountry.substring(3))      // land 

//* 7. split(): The split method splits a string at a specified place. 
let splitString = '30 Days Of JavaScript' 

console.log(splitString.split())     // Changes to an array -> ["30 Days Of JavaScript"] 
console.log(splitString.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"] 

let frstName = 'Asabeneh' 

console.log(frstName.split())    // Change to an array - > ["Asabeneh"] 
console.log(frstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"] 

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland' 

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"] 
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"] 

//* 8. trim(): Removes trailing space in the beginning or the end of a string. 
let trimString = '   30 Days Of JavaScript   '

console.log(trimString)
console.log(trimString.trim(' '))

let trimFirstName = ' Asabeneh '

console.log(trimFirstName)
console.log(trimFirstName.trim())  // still removes spaces at the beginning and the end of the string 
/* 
   30 Days Of JavasCript   
30 Days Of JavasCript
  Asabeneh 
Asabeneh 
*/ 

//* 9. includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false. 
let includesString = '30 Days Of JavaScript'

console.log(includesString.includes('Days'))     // true
console.log(includesString.includes('days'))     // false - it is case sensitive!
console.log(includesString.includes('Script'))   // true
console.log(includesString.includes('script'))   // false
console.log(includesString.includes('java'))     // false
console.log(includesString.includes('Java'))     // true

let includesCountry = 'Finland'

console.log(includesCountry.includes('fin'))     // false
console.log(includesCountry.includes('Fin'))     // true
console.log(includesCountry.includes('land'))    // true
console.log(includesCountry.includes('Land'))    // false 

//* 10. replace(): takes as a parameter the old substring and a new substring. 
// string.replace(oldsubstring, newsubstring) 
let replaceString = '30 Days Of JavaScript' 
console.log(replaceString.replace('JavaScript', 'Python')) // 30 Days Of Python 

let replaceCountry = 'Finland' 
console.log(replaceCountry.replace('Fin', 'Noman'))       // Nomanland 

//* 11. charAt(): Takes index and it returns the value at that index 
// string.charAt(index) 
let characterString = '30 Days Of JavaScript'
console.log(characterString.charAt(0))        // 3

let characterLastIndex = characterString.length - 1
console.log(characterString.charAt(characterLastIndex)) // t 

//* 12. charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index 
// string.charCodeAt(index) 
let stringCharCode = '30 Days Of JavaScript'
console.log(stringCharCode.charCodeAt(3))        // D ASCII number is 68

let lastIndexCode = string.length - 1
console.log(stringCharCode.charCodeAt(lastIndexCode)) // t ASCII is 116 

//* 13. indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1 
// string.indexOf(substring) 
let stringIndex = '30 Days Of JavaScript'

console.log(stringIndex.indexOf('D'))          // 3
console.log(stringIndex.indexOf('Days'))       // 3
console.log(stringIndex.indexOf('days'))       // -1   - case sensitive 
console.log(stringIndex.indexOf('a'))          // 4
console.log(stringIndex.indexOf('JavaScript')) // 11
console.log(stringIndex.indexOf('Script'))     //15
console.log(stringIndex.indexOf('script'))     // -1 

//* 14. lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1 
//syntax 
// string.lastIndexOf(substring) 
let stringLast = 'I love JavaScript. If you do not love JavaScript what else can you love.' 

console.log(stringLast.lastIndexOf('love'))       // 67
console.log(stringLast.lastIndexOf('you'))        // 63
console.log(stringLast.lastIndexOf('JavaScript')) // 38 

//* 15. concat(): it takes many substrings and joins them. 
// string.concat(substring, substring, substring) 
let stringConcat = '30' 
console.log(stringConcat.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript 

let countryConcat = 'Fin' 
console.log(countryConcat.concat("land")) // Finland 

//* 16. startsWith(): it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false). 
//syntax 
// string.startsWith(substring) 
let startsWithString = 'Love is the best to in this world' 

console.log(startsWithString.startsWith('Love'))   // true 
console.log(startsWithString.startsWith('love'))   // false 
console.log(startsWithString.startsWith('world'))  // false 

let startsWithCountry = 'Finland' 

console.log(startsWithCountry.startsWith('Fin'))   // true 
console.log(startsWithCountry.startsWith('fin'))   // false 
console.log(startsWithCountry.startsWith('land'))  //  false 

//* 17. endsWith(): it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false). 
// string.endsWith(substring) 
let EndString = 'Love is the most powerful feeling in the world' 

console.log(EndString.endsWith('world'))         // true 
console.log(EndString.endsWith('love'))          // false 
console.log(EndString.endsWith('in the world')) // true 

let EndCountry = 'Finland' 

console.log(EndCountry.endsWith('land'))         // true 
console.log(EndCountry.endsWith('fin'))          // false 
console.log(EndCountry.endsWith('Fin'))          //  false 

//* 18. search(): it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern. 
// string.search(substring) 
let searchString = 'I love JavaScript. If you do not love JavaScript what else can you love.' 
console.log(searchString.search('love'))          // 2 
console.log(searchString.search(/javascript/gi))  // 7 

//* 19. match(): it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign. 
let matchString = 'love' 
let patternOne = /love/     // with out any flag 
let patternTwo = /love/gi   // g - means to search in the whole text, i - case insensitive 

// Match syntax
// syntax
// string.match(substring)

let stringMatch = 'I love JavaScript. If you do not love JavaScript what else can you love.' 
console.log(stringMatch.match('love')) 
// ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined] 
let pattern = /love/gi 
console.log(stringMatch.match(pattern))   // ["love", "love", "love"] 

// Let us extract numbers from text using a regular expression. This is not the regular expression section, do not panic! We will cover regular expressions later on. 

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge' 
let regEx = /\d+/ 

// d with escape character means d not a normal d instead acts a digit 
// + means one or more digit numbers, 
// if there is g after that it means global, search everywhere. 

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"] 
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"] 

//* 20. repeat(): it takes a number as argument and it returns the repeated version of the string. 
// string.repeat(n) 
let repeatString = 'love' 
console.log(repeatString.repeat(10)) // lovelovelovelovelovelovelovelovelovelove 


// * Checking Data Types and Casting 

// * Checking Data Types 
// To check the data type of a certain variable we use the typeof method. 
// Different javascript data types
// Let's declare different data types

let myFirstName = 'Asabeneh'      // string 
let mylastName = 'Yetayeh'        // string 
let myCountry = 'Finland'         // string 
let myCity = 'Helsinki'           // string 
let myAge = 250                   // number 
let myJob                         // undefined, because a value was not assigned 

console.log(typeof 'Asabeneh')  // string 
console.log(typeof myFirstName)   // string 
console.log(typeof 10)          // number 
console.log(typeof 3.14)        // number 
console.log(typeof true)        // boolean 
console.log(typeof false)       // boolean 
console.log(typeof NaN)         // number 
console.log(typeof job)         // undefined 
console.log(typeof undefined)   // undefined 
console.log(typeof null)        // object 

// * Changing Data Type (Casting) 
// Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error. 

//* String to Int 
// We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods: 

// parseInt() 
let numberExample = '10' 
let numInt = parseInt(numberExample) 
console.log(numInt) // 10 

// Number() 
let numExample = '10' 
let numIntExample = Number(numExample) 

console.log(numIntExample) // 10 

// Plus sign(+) 
let numEx = '10'
let numIntEx = +numEx 

console.log(numIntEx) // 10 

//* String to Float 
// We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods: 

// parseFloat() 
let numF = '9.81' 
let numFloat = parseFloat(numF)

console.log(numFloat) // 9.81 

// Number() 
let numN = '9.81' 
let numFloatEx = Number(numN) 

console.log(numFloatEx) // 9.81 

// Plus sign(+) 
let numPlus = '9.81' 
let numFloatExample = +numPlus 

console.log(numFloatExample) // 9.81 

//* Float to Int 
// We can convert float numbers to integers. We use the following method to convert float to int: 

// parseInt() 
let numParse = 9.81 
let numInteger = parseInt(numParse) 

console.log(numInteger) // 9 