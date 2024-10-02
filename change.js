
// Backup of the original values
const originalValues = { ...sourceObject };

// Function to get the original value from originalValues
function get(key) {
    return originalValues[key]; // Always return the original value
}

// Function to set a new value in sourceObject and return the updated value
function set(key, value) {
    sourceObject[key] = value; // Update the value in sourceObject
    return value; // Return the updated value
}

// Example usage
console.log("get('num'):", get('num')); // Should output: 42
console.log("set('num', 100):", set('num', 100)); // Should output: 100
console.log("get('num'):", get('num')); // Should still output: 42
console.log("set('str', 'new text'):", set('str', 'new text')); // Should output: new text
console.log("get('str'):", get('str')); // Should still output: 42
