const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
};


// Function that takes a key and returns the corresponding value from the sourceObject
function get(key) {
    return sourceObject[key]; // Access the value using the provided key
}

// Function that takes a key and a value, updates the sourceObject, and returns the new value
function set(key, value) {
    sourceObject[key] = value; // Update the property in the sourceObject
    return value; // Return the updated value
}


// Example usage
console.log("get('num'):", get('num'));             // Outputs: 42
console.log("set('num', 100):", set('num', 100));   // Outputs: 100
console.log("get('num'):", get('num'));             // Outputs: 100
console.log("set('str', 'new text'):", set('str', 'new text')); // Outputs: 'new text'
console.log("get('str'):", get('str'));             // Outputs: 'new text'
