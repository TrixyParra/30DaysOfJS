// ToDo: Day 5 - Exercises 

// ! Exercises - Level 1 

// * 1. Declare an empty array. 
const emptyArray = Array(); 
console.log(emptyArray); // [] 
// or 
const emptyArrayExample = []; 
console.log(emptyArrayExample); // [] 

// * 2. Declare an array with more than 5 number of elements. 
const arrayOfFiveElements = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

// * 3. Find the length of your array. 
console.log(arrayOfFiveElements.length); // 9 

// * 4. Get the first item, the middle item and the last item of the array. 
// First Item 
const firstItem = arrayOfFiveElements[0]; 
console.log(firstItem); // 1 

// Middle Item 
const middleItem = arrayOfFiveElements[4]; 
console.log(middleItem); // 5 

// Last Item 
const lastIndex = arrayOfFiveElements.length - 1; 
const lastItem = arrayOfFiveElements[lastIndex]; 
console.log(lastItem); // 9 

// * 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5. 
const mixedDataTypes = [20, true, 5, 'food', 'night', false, 10, 16, {firstName: 'Forest', lastName: 'Gump'}, 3]; 
console.log(mixedDataTypes.length) // 10 

if (mixedDataTypes.length > 5) {
    console.log('Good job!'); 
} else {
    console.log('Try again!'); 
} 
// Good job! 

// * 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon. 
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']; 

// * 7. Print the array using console.log(). 
console.log(itCompanies); // (7) ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] 

// * 8. Print the number of companies in the array. 
console.log('Number of companies:', itCompanies.length); // Number of companies: 7 

// * 9. Print the first company, middle and last company. 
// First Company 
const firstCompany = itCompanies[0]; 
console.log(firstCompany); // Facebook 

// Middle Company 
const middleCompany = itCompanies[3]; 
console.log(middleCompany); // Apple 

// Last Company 
const lastIndexOfCompany = itCompanies.length - 1; 
const lastCompany = itCompanies[lastIndexOfCompany]; 
console.log(lastCompany); // Amazon 

// * 10. Print out each company. 
console.log(itCompanies[0]); // Facebook 
console.log(itCompanies[1]); // Google 
console.log(itCompanies[2]); // Microsoft 
console.log(itCompanies[3]); // Apple 
console.log(itCompanies[4]); // IBM 
console.log(itCompanies[5]); // Oracle 
console.log(itCompanies[6]); // Amazon 

// * 11. Change each company name to uppercase one by one and print them out. 
console.log(itCompanies[0].toUpperCase()); // FACEBOOK 
console.log(itCompanies[1].toUpperCase()); // GOOGLE 
console.log(itCompanies[2].toUpperCase()); // MICROSOFT 
console.log(itCompanies[3].toUpperCase()); // APPLE 
console.log(itCompanies[4].toUpperCase()); // IBM 
console.log(itCompanies[5].toUpperCase()); // ORACLE 
console.log(itCompanies[6].toUpperCase()); // AMAZON 

// * 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies. 
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]}, are big IT companies.`); 
// Facebook, Google, Microsoft, Apple, IBM, Oracle, and Amazon, are big IT companies. 

// * 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found. 
// Example 1
const indexOfCompany = itCompanies.indexOf('Microsoft'); 

if (indexOfCompany == -1) {
    console.log('Company not found'); 
} else {
    console.log('Company:', itCompanies[indexOfCompany]); 
} 
// Company: Microsoft 

// Example 2 
const indexOfCompanyTwo = itCompanies.indexOf('Tech'); 

indexOfCompanyTwo == -1 
    ? console.log('Company not found') 
    : console.log('Company:', itCompanies[indexOfCompanyTwo]); 
// Company not found 

// * 14. Filter out companies which have more than one 'o' without the filter method. 
const substring = 'oo';

const match = itCompanies.find(element => {
    if (element.includes(substring)) {
        return true; 
    } else {
        console.log('No match found');
    }
}); 
console.log(match); // Facebook 

itCompanies.shift(); 
const newItArray = itCompanies; 
console.log(newItArray); // (6) ['Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] 

const newMatch = newItArray.find(element => {
    if (element.includes(substring)) {
        return true; 
    } else {
        console.log('No match found'); 
    } 
}); 
console.log(newMatch); // Google 

// * 15. Sort the array using sort() method. 
itCompanies.unshift('Facebook'); 

console.log(itCompanies.sort()); // (7) ['Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle'] 

// * 16. Reverse the array using reverse() method. 
console.log(itCompanies.reverse()); // (7) ['Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon'] 

// * 17. Slice out the first 3 companies from the array. 
console.log(itCompanies.slice(0, 3)); // ['Oracle', 'Microsoft', 'IBM'] 

// * 18. Slice out the last 3 companies from the array. 
console.log(itCompanies.slice(4, 7)); // (3) ['Facebook', 'Apple', 'Amazon'] 

// * 19. Slice out the middle IT company or companies from the array. 
console.log(itCompanies.slice(3, 4)); // ['Google'] 

// * 20. Remove the first IT company from the array. 
console.log(itCompanies.shift()); // Oracle 

// * 21. Remove the middle IT company or companies from the array. 
console.log(itCompanies.unshift('Oracle')); 

console.log(itCompanies.slice(3, 4)); // ['Google'] 

// * 22. Remove the last IT company from the array. 
console.log(itCompanies.pop()); // Amazon 

// * 23. Remove all IT companies. 
console.log(itCompanies.splice()); // [] 


// ! Exercises - Level 2 

// * 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file. 
// ?  - will keep in same file instead... 

// * 2. First remove all the punctuations and change the string to array and count the number of words in the array 
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.' 

const regex = /[,.]/g; 
const newText = text.replace(regex, ''); 
console.log(newText); // I love teaching and empowering people I teach HTML CSS JS React Python 
const words = newText.split(' '); 

console.log(words); // (13) ['I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach', 'HTML', 'CSS', 'JS', 'React', 'Python'] 
console.log(words.length); // 13 

// * 3. In the following shopping cart add, remove, edit items 
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']; 

// add 'Meat' in the beginning of your shopping cart if it has not been already added 
shoppingCart.unshift('Meat') 
console.log(shoppingCart); // (5) ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey'] 

// add Sugar at the end of you shopping cart if it has not been already added 
shoppingCart.push('Sugar') 
console.log(shoppingCart); // (6) ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar'] 

// remove 'Honey' if you are allergic to honey 
allergic = false; 
if (allergic) {
    shoppingCart.splice(4, 1) 
    console.log(shoppingCart); 
} else {
    console.log('Honey is still in your shopping cart list:', shoppingCart); 
} // Honey is still in your shopping cart list: (6) ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar'] 

// modify Tea to 'Green Tea' 
shoppingCart[3] = 'Green Tea' 
console.log(shoppingCart); // (6) ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Honey', 'Sugar'] 

// * 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list. 
const countries = [
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
const ethiopiaExists = countries.includes('Ethiopia'); 

if (ethiopiaExists) {
    console.log(ethiopiaExists); 
    console.log(countries[4].toUpperCase()); 
} else {
    countries.push('Ethiopia') 
    console.log(countries); 
} // true   // ETHIOPIA 

// * 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array. 
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]; 
const includesSass = webTechs.includes('Sass'); 

if (includesSass) {
    console.log('Sass is a CSS preprocess'); 
} else {
    webTechs.push('Sass') 
    console.log(webTechs); 
} // (8) ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB', 'Sass'] 

// * 6. Concatenate the following two variables and store it in a fullStack variable. 
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']; 
const backEnd = ['Node','Express', 'MongoDB']; 

const fullStack = frontEnd.concat(backEnd); 

console.log(fullStack); // (8) ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB'] 


// ! Exercises - Level 3 

// * 1. The following is an array of 10 students ages: 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]; 

// Sort the array and find the min and max age 
ages.sort() 
console.log(ages); // (10) [19, 19, 20, 22, 24, 24, 24, 25, 25, 26] 

const minimumAge = Math.min(...ages); 
console.log('The minimum is:', minimumAge); // The minimum is: 19 

const maximumAge = Math.max(...ages); 
console.log('The maximun is:', maximumAge); // The maximun is: 26 

// Find the median age (one middle item or two middle items divided by two) 
//declare median variable
let median;
//if else to check for even or odd
if(ages.length % 2 != 0) {
    //odd case
    //find middle index
    let middleIndex = Math.floor(ages.length / 2) 

    //find median
    median = ages[middleIndex]
} else {
    //even case 
    //find middle index 
    let middleIndex = Math.floor(ages.length / 2) 

    //find median
    median = (ages[middleIndex] + ages[middleIndex - 1]) / 2 
} 
//print median 
console.log(median); // 24 

// Find the average age (all items divided by number of items) 
const average = ages.reduce((a, b) => a + b, 0) / ages.length; 
/* 
The reducer (a, b) => a + b is called for each number in the array, where
    a is the “result so far” 
    b is the next number 
The second argument of the reduce() function call is 0 
    This is the initial value for the sum of the array 
The reduce() function is used to find the sum of the numbers in the array.
The sum is then divided by the length of the array to get the average.
*/ 
console.log(average); // 22.8 

// Find the range of the ages (max minus min) 
const range = maximumAge - minimumAge; 

console.log(range); // 7 

// Compare the value of (min - average) and (max - average), use abs() method. 
const absoluteValueOne = Math.abs(minimumAge - average); 
console.log(absoluteValueOne); // 3.8000000000000007 

const absoluteValueTwo = Math.abs(maximumAge - average); 
console.log(absoluteValueTwo); // 3.1999999999999993 

// * 2. Slice the first ten countries from the countries array. 
const countriesList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]; 
console.log(countriesList); // (193) ... 

const countriesListSlice = countriesList.slice(0, 10); 
console.log(countriesListSlice); // (10) ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria'] 

// * 3. Find the middle country(ies) in the countries array. 
//declare median variable
let middleCountry;
//if else to check for even or odd
if(countriesList.length % 2 != 0) {
    //odd case
    //find middle index
    let middleIndex = Math.floor(countriesList.length / 2) 

    //find median
    middleCountry = countriesList[middleIndex]
} else {
    //even case 
    //find middle index 
    let middleIndex = Math.floor(countriesList.length / 2) 

    //find median
    middleCountry = (countriesList[middleIndex] + countriesList[middleIndex - 1]) / 2 
} 
//print median 
console.log(middleCountry); // Lesotho 

// * 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half. 
const arrayOne = countriesList.slice(0, 97); 
console.log(arrayOne); // (97) ['Afghanistan', ... , 'Lesotho'] 

const arrayTwo = countriesList.slice(97, 193); 
console.log(arrayTwo); // (96) ['Liberia', ... , 'Zimbabwe'] 