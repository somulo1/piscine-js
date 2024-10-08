// Function to find the index of the first occurrence
function indexOf(arr, value, fromIndex) {
    fromIndex = 0
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

// Function to find the index of the last occurrence
function lastIndexOf(arr, value, fromIndex ) {
    fromIndex = arr.length - 1
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

// Function to check if a value is in the array
function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

// Test cases
// console.log(indexOf([1, 2, 3, 4, 2], 2));        // Output: 1
// console.log(lastIndexOf([1, 2, 3, 4, 2], 2));    // Output: 4
// console.log(includes([1, 2, 3, 4], 3));          // Output: true
// console.log(includes([1, 2, 3, 4], 5));          // Output: false
function indexOf(arr, val, start = 0) {
    if (start < 0) {
        start = Math.max(arr.length + start, 0); // Handle negative start indices
    }
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;  // Return the index when found
        }
    }
    return -1;  // Return -1 if not found
}

function lastIndexOf(arr, val, start = arr.length - 1) {
    if (start >= arr.length) {
        start = arr.length - 1;  // Handle start index beyond array length
    }
    if (start < 0) {
        start = Math.max(arr.length + start, 0); // Handle negative start indices
    }
    for (let i = start; i >= 0; i--) {
        if (arr[i] === val) {
            return i;  // Return the index when found
        }
    }
    return -1;  // Return -1 if not found
}

function includes(arr, val, start = 0) {
    return indexOf(arr, val, start) !== -1;  // Use indexOf to check inclusion
}