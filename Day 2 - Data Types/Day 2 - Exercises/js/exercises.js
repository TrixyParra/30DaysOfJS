// ToDo: Day 2 Exercises 

// ToDo: Exercises Level 1 
// * 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'. 
let challenge = '30 Days of JavaScript' 

// * 2. Print the string on the browser console using console.log() 
console.log(challenge) // 30 Days of JavaScript 

// * 3. Print the length of the string on the browser console using console.log() 
console.log(challenge.length) // 21 

// * 4. Change all the string characters to capital letters using toUpperCase() method 
console.log(challenge.toUpperCase()) // 30 DAYS OF JAVASCRIPT 

// * 5. Change all the string characters to lowercase letters using toLowerCase() method 
console.log(challenge.toLowerCase()) // 30 days of javascript 

// * 6. Cut (slice) out the first word of the string using substr() or substring() method 
console.log(challenge.slice(3, 7)) // Days 
console.log(challenge.substring(3, 7)) // Days 

// * 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript. 
console.log(challenge.slice(3, 21)) // Days Of JavaScript 

// * 8. Check if the string contains a word Script using includes() method 
console.log(challenge.includes('Script')) // true 

// * 9. Split the string into an array using split() method 
console.log(challenge.split()) // ['30 Days of JavaScript'] 

// * 10. Split the string 30 Days Of JavaScript at the space using split() method 
console.log(challenge.split(' ')) // (4) ['30', 'Days', 'of', 'JavaScript'] 

// * 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array. 
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(companies.split(',')) // (7) ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon'] 

// * 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method. 
console.log(challenge.replace('JavaScript', 'Python')) // 30 Days of Python 

// * 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method. 
console.log(challenge.charAt(15)) // S 

// * 15. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt() 
console.log(challenge.charCodeAt('J')) // 51 

// * 16. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript 
console.log(challenge.indexOf('30 Days of JavaScript')) // 0 

// * 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction' 
let sentence = 'You cannot end a sentence with because because because is a conjunction' 
console.log(sentence.indexOf('because')) // 31 

// * 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction' 
console.log(sentence.lastIndexOf('because')) // 47 

// * 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction' 
console.log(sentence.search('because')) // 31 

// * 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '. 
let trimExample = ' 30 Days Of JavaScript ' 
console.log(trimExample.trim()) // 30 Days Of JavaScript 

// * 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true 
console.log(challenge.startsWith('30 Days')) // true 

// * 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true 
console.log(challenge.endsWith('Script')) // true 

// * 23. Use match() method to find all the a’s in 30 Days Of JavaScript 
let findA = /a/gi 
console.log(challenge.matchAll('a')) // RegExpStringIterator {} 
console.log(challenge.match(findA)) // (3) ['a', 'a', 'a'] 

// * 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript' 
let firstText = '30 Days of' 
console.log(firstText.concat(' Javascript')) // 30 Days Of JavaScript' 

// * 25. Use repeat() method to print 30 Days Of JavaScript 2 times 
console.log(challenge.repeat(2)) // 30 Days Of JavaScript30 Days Of JavaScript


// ToDo: Exercise: Level 2 
// * 1. Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. 
let statement = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.' 
console.log(statement) // The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. 

// * 2. Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." 
let quote = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"' 
console.log(quote) // "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." 

// * 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal. 
console.log(typeof('10') == 10) // false 
// parseInt() 
// Number() 
// Plus sign(+) 
let stringNumber = '10' 
let stringToInteger = +stringNumber 
console.log(stringToInteger) // 10 
console.log(stringToInteger == 10) // true 

// * 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10. 
console.log(parseFloat('9.8') == 10) // false 
let floatNumber = '9.8' 
let floatStringToNumber = +floatNumber 
console.log(floatStringToNumber) // 9.8 

let floatToInteger = parseInt(floatStringToNumber) 
console.log(floatToInteger) // 9 
console.log(floatToInteger + 1) // 10  
console.log(floatToInteger + 1 == 10) // true 

// * 5. Check if 'on' is found in both python and jargon 
let py = 'Python' 
let j = 'Jargon' 
console.log(py.includes('on')) // true 
console.log(j.includes('on')) // true 

// * 6. I hope this course is not full of jargon. Check if jargon is in the sentence. 
let jargonSentence = 'I hope this course is not full of jargon.' 
console.log(jargonSentence.includes('jargon')) // true 

// * 7. Generate a random number between 0 and 100 inclusively. 
const number = Math.floor(Math.random() * 101) 
console.log(number) // 92 -> will be a different number on each refresh 

// * 8. Generate a random number between 50 and 100 inclusively. 
let minimum = 50 
let maximum = 100 
const num = Math.floor(Math.random() * (maximum - minimum)) + minimum // or (maximum-minimum +1))+minimum or max..-min..)+min..) 
console.log(num) // 79 -> will be a different number on each refresh 

// * 9. Generate a random number between 0 and 255 inclusively. 
const randomNumber = Math.floor(Math.random() * 256) 
console.log(randomNumber) // 177 -> will be a different number on each refresh 

// * 10. Access the 'JavaScript' string characters using a random number. 
let string = 'JavaScript' 
let randomNum = Math.floor(Math.random() *10)
let randomCharacter = string[randomNum] 
console.log(randomCharacter) // i -> will be a different number on each refresh 

// * 11. Use console.log() and escape characters to print the following pattern.
/* 
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/ 
let pattern = '1 1 1 1 1\n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125' 
console.log(pattern) 
/* 
1 1 1 1 1
2 1 2 4 8 
3 1 3 9 27 
4 1 4 16 64 
5 1 5 25 125
*/ 

// * 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction' 
console.log(sentence.substr(31, 23)) // because because because (index, num of characters) 


// ToDo: Exercises: Level 3 
// * 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence. 
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
let loveMatch = /love/gi 
console.log(loveSentence.match(loveMatch)) // (3) ['Love', 'love', 'love'] 
// ? Check if correct 

// * 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction' 
let matchBecause = /because/g 
console.log(sentence.match(matchBecause)) // (3) ['because', 'because', 'because'] 

// ! Still need to do question #3 and #4 
// * 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions). 
const bigSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' 
// ? Check regex 

// * 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' 