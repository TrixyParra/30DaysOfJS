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
console.log(itCompanies.join(', ').includes('oo')); // true //? print companies  