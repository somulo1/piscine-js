async function all(promises) {
    if (!promises) return {};
    
    const result = {}; // Use const for a result object
    let errorOccurred; // Renamed for clarity
    for (const [key, value] of Object.entries(promises)) {
        if (typeof value !== "object" || value === null) { // Check for non-object values and null
            result[key] = value; // Assign synchronous value directly
            continue;
        }
        
        await value
            .then(res => result[key] = res) // Resolve the promise
            .catch(err => errorOccurred = err); // Capture any error
    }
    
    if (errorOccurred) throw errorOccurred; // Throw the captured error if any
    return result; // Return the final object
}
// Example usage:
const promises = {
    a: Promise.resolve(1),
    b: 2, // Synchronous value
    c: new Promise((resolve) => setTimeout(() => resolve(3), 100)),
};
all(promises).then(console.log); // { a: 1, b: 2, c: 3 }

