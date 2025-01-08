// Write a function logFunctionCalls that takes an array of functions and executes them in LIFO order (Last In, First Out), 
// meaning the last function added to the array is the first to be executed.

// function logFunctionCalls(functions) {
//     // Write your code here
//     for (let i = functions.length - 1; i >= 0; i--) {
//         functions[i]();
//     }
// }

// const func1 = () => console.log("Function 1 executed");
// const func2 = () => console.log("Function 2 executed");
// const func3 = () => console.log("Function 3 executed");

// logFunctionCalls([func1, func2, func3]);


// ---------------------------------------------------------------------------------

// write a function that returns a reverse of a string

// function reverseStr(str){
//     let newStr = '';

//     for(let i = str.length - 1; i >= 0; i--){
//         newStr += str[i];
//     }

//     return newStr;
// }

// console.log(reverseStr('abhishek'));

// ---------------------------------------------------------------------------------

// Write a function that returns the longest word in a sentence

// function findLongestWord(sentence) {

//     const words = sentence.split(" ");

//     let longestWord = '';

//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;

// }

// console.log(findLongestWord("Hi my name is abhishek"));


// ---------------------------------------------------------------------------------

// Write a funnction to check weather the given string is palindrom or not?

// without using inbuilt method
// function isPalindrom(str) {
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i]
//     }
//     return newStr === str;
// }

// function isPalindrom(str) {
//     reverseStr = str.split('').reverse().join('')
//     return reverseStr === str
// }

// console.log(isPalindrom('mom')); // true
// console.log(isPalindrom('cat')); // false


// ---------------------------------------------------------------------------------

// Write a function to remove duplicate elements from an array

// const array = [1, 2, 3, 2, 3, 4];

// using in build methods
// function removeDuplicate(arr) {

//     let newArr = [];

//     arr.forEach((ele) => {
//         if (!newArr.includes(ele)) {
//             newArr.push(ele)
//         }
//     })

//     return newArr;

// }

// without using inbuilt methods
// function removeDuplicate(arr) {

//     let newArr = [];

//     for (let i = 0; i <= arr.length - 1; i++) {

//         let isDuplicate = false;

//         for (let j = 0; j <= newArr.length - 1; j++) {
//             if (newArr[j] === arr[i]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if (!isDuplicate) {
//             newArr.push(arr[i])
//         }

//     }

//     return newArr;

// }

// console.log(removeDuplicate(array))


// ---------------------------------------------------------------------------------

// write a function to find the largest number in an array

// const array = [1, 2, 3, 2, 3, 50, -2, -5];

// using inbuilt methods
// function largestNumber(arr) {

//     // -Infinity means negative Infinity it helps when our incoming array has -ve values
//     let largestNum = -Infinity;

//     for (let num of arr) {
//         if (num > largestNum) {
//             largestNum = num
//         }
//     }
//     return largestNum;
// }

// without using inbuilt methods
// function largestNumber(arr) {

//     let largestNum = arr[0];

//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] > largestNum) {
//             largestNum = arr[i]
//         }
//     }
//     return largestNum;
// }

// console.log(largestNumber(array))


// ---------------------------------------------------------------------------------

// write a function to check weather 2 string are anagram are not
// means - we have to check weather 2 string have same character or not 

// function checkAnagram(str1, str2) {
//     // Normalize both strings by converting to lowercase
//     const normalizedStr1 = str1.toLowerCase();
//     const normalizedStr2 = str2.toLowerCase();

//     // Check if the lengths of the strings are the same
//     if (normalizedStr1.length !== normalizedStr2.length) return false;

//     // Sort the characters of both strings and compare them
//     const sortedStr1 = normalizedStr1.split('').sort().join('');
//     const sortedStr2 = normalizedStr2.split('').sort().join('');

//     return sortedStr1 === sortedStr2;
// }

// console.log(checkAnagram("listen", "silent")); // true
// console.log(checkAnagram("cat", "mon")); // false


// ---------------------------------------------------------------------------------

// Write a function to calculate factorial of a number. Eg: 5 = 5 * 4 * 3 * 2 * 1

// function factorial(num) {

//     if (num < 0) return "factorial of negative number is not defined"

//     let result = 1;

//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }

//     return result;

// }

// console.log(factorial(5)) // 120
// console.log(factorial(0)) // 1
// console.log(factorial(-3)) // factorial of negative number is not defined


// ---------------------------------------------------------------------------------

// Write a function to remove all white spaces characters from a string

// function removeWhitespace(str) {
//     return str.split(/\s+/).join('')
// }

// console.log(removeWhitespace("  Hello   World  ")); // "HelloWorld"
// console.log(removeWhitespace("  JavaScript  is  awesome  ")); // "JavaScriptisawesome"


// ---------------------------------------------------------------------------------


