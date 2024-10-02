// Function that takes one argument and returns it
function id(arg) {
    return arg;
}

// Function that takes an array or a string and returns its length
function getLength(input) {
    return input.length;
}

// Example usage
console.log("id(5):", id(5));                // Outputs: 5
console.log("id('hello'):", id('hello'));    // Outputs: 'hello'
console.log("getLength([1, 2, 3]):", getLength([1, 2, 3]));  // Outputs: 3
console.log("getLength('hello'):", getLength('hello'));      // Outputs: 5
