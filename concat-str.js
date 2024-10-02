// Function that concatenates two arguments as strings
function concatStr(arg1, arg2) {
    return String(arg1) + String(arg2);  // Convert both arguments to strings before concatenating
}

// Example usage
console.log("concatStr('Hello, ', 'world!'):", concatStr('Hello, ', 'world!')); // Outputs: Hello, world!
console.log("concatStr(1, 2):", concatStr(1, 2));                             // Outputs: 12
console.log("concatStr('foo', 'bar'):", concatStr('foo', 'bar'));             // Outputs: foobar
console.log("concatStr([1, 2], [3, 4]):", concatStr([1, 2], [3, 4]));         // Outputs: 1,23,4
