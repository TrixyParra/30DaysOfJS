// ToDo: Day 3 - Exercises 

// ToDo: Exercises - Level 1 
// * 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types. 
let firstName = "Homer" 
let lastName = "Simpson" 
let country = "USA" 
let city = "Los Angeles" 
let isMarried = true 
let year = 2022 

console.log(typeof firstName) // string 
console.log(typeof lastName) // string 
console.log(typeof country) // string 
console.log(typeof city) // string 
console.log(typeof isMarried) // boolean 
console.log(typeof year) // number 

// * 2. Check if type of '10' is equal to 10 
console.log(typeof '10' == 10) // false -> one is a string the otherer a boolean 

// * 3. Check if parseInt('9.8') is equal to 10 
console.log(parseInt('9.8') == 10) // false -> would be 9 == 10 which is false 

// * 4. Boolean value is either true or false. 
// Write three JavaScript statement which provide truthy value. 
console.log(true == true) // true 
console.log((5 > 2)) // true 
console.log((3 == '3')) // true 
// Write three JavaScript statement which provide falsy value. 
console.log(null === undefined) // false 
console.log((5 < 2)) // false 
console.log((3 === '3')) // false 

// * 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3        - true 
console.log((4 > 3)) // true 
// 4 >= 3       - true 
console.log((4 >= 3)) // true 
// 4 < 3        - false 
console.log((4 < 3)) // false 
// 4 <= 3       - false 
console.log((4 <= 3)) // false 
// 4 == 4       - true 
console.log(4 == 4) // true 
// 4 === 4      - true 
console.log(4 === 4) // true 
// 4 != 4       - false 
console.log(4 != 4) // false 
// 4 !== 4      - false 
console.log(4 !== 4) // false 
// 4 != '4'     - false 
console.log(4 != 4) // false 
// 4 == '4'     - true 
console.log(4 == '4') // true 
// 4 === '4'    - false 
console.log(4 === '4') // false 
// Find the length of python and jargon and make a falsy comparison statement. 
console.log('python'.length) // 6 
console.log('jargon'.length) // 6 
console.log('python'.length < 'jargon'.length) // false 

// * 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log() 
// 4 > 3 && 10 < 12             - true 
console.log(4 > 3 && 10 < 12) // true 
// 4 > 3 && 10 > 12             - false 
console.log(4 > 3 && 10 > 12) // false 
// 4 > 3 || 10 < 12             - true 
console.log(4 > 3 || 10 < 12) // true 
// 4 > 3 || 10 > 12             - true 
console.log(4 > 3 || 10 > 12) // true 
// !(4 > 3)                     - false 
console.log(!(4 > 3)) // false 
// !(4 < 3)                     - true 
console.log(!(4 < 3)) // true 
// !(false)                     - true 
console.log(!(false)) // true 
// !(4 > 3 && 10 < 12)          - false 
console.log(!(4 > 3 && 10 < 12)) // false 
// !(4 > 3 && 10 > 12)          - true 
console.log(!(4 > 3 && 10 > 12)) // true 
// !(4 === '4')                 - true 
console.log(!(4 === '4')) // true 
// There is no 'on' in both dragon and python 
console.log(!'dragon'.includes('on') && !'python'.includes('on')) // false 

// * 7. Use the Date object to do the following activities 
// What is the year today? 
console.log(new Date().getFullYear()) // 2022 
// What is the month today as a number? 
console.log(new Date().getMonth() + 1) // 8 
// What is the date today? 
console.log(new Date().getDate()) // 23 
// What is the day today as a number? 
console.log(new Date().getDay()) // 2 
// What is the hours now? 
console.log(new Date().getHours()) // 2 
// What is the minutes now? 
console.log(new Date().getMinutes()) // 24 
// Find out the numbers of seconds elapsed from January 1, 1970 to now. 
console.log(new Date().getTime()) // 1661246745144 


// ToDo: Exercises - Level 2 
// * 1. Write a script that prompts the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h). 
// Enter base: 20 
// Enter height: 10 
// The area of the triangle is 100 
// prompt('State a base and height value of a triangle and calculate the area of a triangle (area = 0.5 x b x h). Make sure to also state your answer in a sentence.', 'Base: 20  Height: 10  The area of the triangle is 100') 

// * 2. Write a script that prompts the user to enter side a, side b, and side c of the triangle and calculate the perimeter of a triangle (perimeter = a + b + c). 
// Enter side a: 5 
// Enter side b: 4 
// Enter side c: 3 
// The perimeter of the triangle is 12 
// prompt('State a side A, side B, and side C value of a triangle and calculate the perimeter of a triangle (perimeter = a + b + c). Make sure to also state your answer in a sentence.', 'Side A: 5  Side B: 4  Side C: 3  The perimeter of the triangle is 12') 

// * 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) 
// prompt('State a length and width value and calculate the area of a rectangle (area = length x width) and the perimeter of rectangle (perimeter = 2 x (length + width)). Make sure to also state your answer(s) in a sentence.', 'Length: 4  Height: 3  The area of the rectangle is 12 and the perimeter of the rectangle is 14') 

// * 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. 
// prompt('State a radius value and calculate the area of a circle (area = pi x r x r) and the circumference of a circle (c = 2 x pi x r) where pi = 3.14. Make sure to also state your answer(s) in a sentence.', 'Radius: 6  The area of the circle is 113.04 and the circumference of the circle is 37.68') 

// * 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2 
// prompt('Calculate the slope, x-intercept and y-intercept of y = 2x -2. State your answer(s) in a sentence.', 'The slope is 2, the x-intercept is (1, 0), and the y-intercept is (0. -2)') 

// * 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point (6,10) 
console.log('m:', ((10-2)/(6-2))) // 2 

// * 7. Compare the slope of above two questions. 
console.log(2 === 2) // true 

// * 8. Calculate the value of y (y = x**2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. 
// x = -3 
console.log(((-3)**2 + 6*-3 + 9) === 0) // true 

// * 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person? 
// Enter hours: 40 
// Enter rate per hour: 28 
// Your weekly earning is 1120 
// prompt('Calculate your weekly earning (pay = hours x rate per hour). State your hour and rate per hour values and state your answer in a sentence.', 'hours: 40  rate per hour: 28  My weekly earning is 1120') 

// * 10. If the length of your name is greater than 7 say, your name is long else say your name is short. 
let name = 'Trixy' 
name.length > 7 ? 
    console.log('your name is long') 
    : 
    console.log('your name is short') // your name is short - only 5 letters 

// * 11. Compare your first name length and your family name length and you should get this output. 
let firstNameEx = 'Asabeneh'
let lastNameEx = 'Yetayeh' 
// Your first name, Asabeneh is longer than your family name, Yetayeh 
firstNameEx.length > lastNameEx.length ? 
    console.log('Your first name, Asabeneh is longer than your family name, Yetayeh') // this one is logged on console 
    : 
    console.log('Your first name, Asabeneh is shorter than your family name, Yetayeh') 

// * 12. Declare two variables myAge and yourAge and assign them initial values find the age difference and output the value.
let myAge = 250 
let yourAge = 25 
// The output should be: 
// I am 225 years older than you. 
let difference = myAge - yourAge 
console.log(`I am ${difference} years older than you.`) // I am 225 years older than you. 

// * 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years. 
// Enter birth year: 1995 
// You are 25. You are old enough to drive 
// let user = prompt('Enter your birth year', '1995') 
// let userAge = 25 
// userAge >= 18 ? 
//     alert('You are 25. You are old enough to drive') // this alert is shown since old enough to drive 
//     : 
//     alert('You are not old enough to drive') 

// Enter birth year: 2005 
// You are 15. You will be allowed to drive after 3 years. 
// let secondUser = prompt('Enter your birth year', '2005') 
// let secondUserAge = 15
// secondUserAge >= 18 ? 
//     alert('You are old enough to drive') 
//     : 
//     alert('You are 15. You will be allowed to drive after 3 years.') // this alert is shown since not olde enough to drive 

// * 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years. 
// Enter number of years you live: 100 
// You lived 3153600000 seconds. 
// prompt('Enter your age', '100') 
let seconds = 3153600000 
// alert(`You lived ${seconds} seconds.`) 
// console.log(`You lived ${seconds} seconds.`) // You lived 3153600000 seconds. 

// * 15. Create a human readable time format using the Date time object 
// YYYY-MM-DD HH:mm 
// DD-MM-YYYY HH:mm 
// DD/MM/YYYY HH:mm 
let month = new Date().getMonth() 
let date = new Date().getDate() 
let currentYear = new Date().getFullYear() 
let hour = new Date().getHours() 
let minutes = new Date().getMinutes() 

console.log(`${currentYear}-${month}-${date}`) // 2022-7-23 
console.log(`${date}-${month}-${currentYear}`) // 23-7-2022 
console.log(`${date}/${month}/${currentYear}`) // 23/7/2022 


// ToDo: Exercises - Level 3 
// * 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ) 
// YYYY-MM-DD HH:mm eg. 2012-01-02 07:05 
const now = new Date() 
const nowMonth = [now.getMonth() + 1].toString().padStart(2, 0) 
const nowDate = now.getDate().toString().padStart(2, 0) 
const nowYear = now.getFullYear() 
const nowHour = [now.getHours() % 12].toString().padStart(2, 0) 
const nowMinutes = now.getMinutes().toString().padStart(2, 0) 
const timeOfDay = now.getHours() > 12 ? 'PM' : 'AM'

console.log(`${nowYear}-${nowMonth}-${nowDate} ${nowHour}:${nowMinutes} ${timeOfDay}`) 
// 2022-08-24 11:36 PM 