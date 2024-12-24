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

// without using inbuilt function and method
function isPalindrom(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr === str;
}

// function isPalindrom(str) {
//     reverseStr = str.split('').reverse().join('')
//     return reverseStr === str
// }

console.log(isPalindrom('mom')); // true
console.log(isPalindrom('cat')); // false


// ---------------------------------------------------------------------------------

// Write a function to remove duplicate elements from an array

// function removeDuplicateArr(arr) {

//     let tempArr = [];

// }