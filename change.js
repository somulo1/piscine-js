

// Backup of the original values
const originalValues = { ...sourceObject };

// Function to get the value from sourceObject based on the key
function get(key) {
    return originalValues[key]; // Always return the original value
}

// Function to set a new value for the specified key in sourceObject
function set(key, value) {
    sourceObject[key] = value; // Update the value in sourceObject
    return value; // Return the updated value
}

// Example usage
console.log("get('num'):", get('num')); // Outputs: 42
console.log("set('num', 100):", set('num', 100)); // Outputs: 100
console.log("get('num'):", get('num')); // Outputs: 42 (original value remains intact)
console.log("set('str', 'new text'):", set('str', 'new text')); // Outputs: 'new text'
console.log("get('str'):", get('str')); // Outputs: 42 (original value remains intact)
