// Function that takes an array or string and returns its first element or character
function first(input) {
    return input[0];
}

// Function that takes an array or string and returns its last element or character
function last(input) {
    return input[input.length - 1];
}

// Function that takes an array or string and returns an array containing the last and first elements or characters
function kiss(input) {
    return [last(input), first(input)];
}

// Example usage
console.log("first([1, 2, 3]):", first([1, 2, 3]));        // Outputs: 1
console.log("last([1, 2, 3]):", last([1, 2, 3]));          // Outputs: 3
console.log("kiss([1, 2, 3]):", kiss([1, 2, 3]));          // Outputs: [3, 1]

console.log("first('hello'):", first('hello'));             // Outputs: 'h'
console.log("last('hello'):", last('hello'));               // Outputs: 'o'
console.log("kiss('hello'):", kiss('hello'));               // Outputs: ['o', 'h']
