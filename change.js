

// Function to get the value from sourceObject based on the key
function get(key) {
    return sourceObject[key]; // Always return the original value
}

// Function to set a new value for the specified key in sourceObject
function set(key, value) {
    sourceObject[key] = value; // Update the value in sourceObject
    return value; // Return the updated value
}
