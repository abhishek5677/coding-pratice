// Write a function logFunctionCalls that takes an array of functions and executes them in LIFO order (Last In, First Out), 
// meaning the last function added to the array is the first to be executed.

function logFunctionCalls(functions) {
    // Write your code here
    for (let i = functions.length - 1; i >= 0; i--) {
        functions[i]();
    }
}

const func1 = () => console.log("Function 1 executed");
const func2 = () => console.log("Function 2 executed");
const func3 = () => console.log("Function 3 executed");

logFunctionCalls([func1, func2, func3]);
