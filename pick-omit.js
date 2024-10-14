function pick(obj, keys) {
    const keyArr = Array.isArray(keys) ? keys : [keys];
    const entries = Object.entries(obj).filter(([key]) => keyArr.includes(key));
    return Object.fromEntries(entries);    
}

function omit(obj, keys) {
    const keyArr = Array.isArray(keys) ? keys : [keys];
    const entries = Object.entries(obj).filter(([key]) => !keyArr.includes(key));
    return Object.fromEntries(entries)
}
// // Example usage
// const obj = { name: 'Alice', age: 25, city: 'Nairobi' };

// // Picking keys
// console.log(pick(obj, 'name')); // { name: 'Alice' }
// console.log(pick(obj, ['name', 'city'])); // { name: 'Alice', city: 'Nairobi' }

// // Omitting keys
// console.log(omit(obj, 'name')); // { age: 25, city: 'Nairobi' }
// console.log(omit(obj, ['name', 'city'])); // { age: 25 }