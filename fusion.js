function fusion(obj1, obj2) {
    const result = {}
    const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
    
    allKeys.forEach(key => {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            if (Array.isArray(obj1[key])) { 
                if (Array.isArray(obj2[key])) {
                    result[key] = [...obj1[key], ...(obj2[key])]
                } else {
                    result[key] = obj2[key]
                }
            } else if (typeof obj1[key] === 'string') {
                if ( typeof obj2[key] === 'string') {
                    result[key] = obj1[key] + ' ' + obj2[key];
                } else {
                    result[key] = obj2[key]
                }
            } else if (typeof obj1[key] === 'number') {
                if (typeof obj2[key] === 'number') {
                    result[key] = obj1[key] + obj2[key]
                } else {
                    result[key] = obj2[key]
                }
            } else if (typeof obj1[key] === 'object') {
                if (typeof obj2[key] === 'object') {
                    result[key] = fusion(obj1[key], obj2[key]);
                } else {
                    result[key] = obj2[key]
                }
            }
        } else if (obj1.hasOwnProperty(key)) {
            result[key] = obj1[key]
        } else if (obj2.hasOwnProperty(key)) {
            result[key] = obj2[key]
        }
    });
    return result
}

// Example usage
// const obj1 = { a: 'Hello', b: 1 , c: ['Foo', 'tah'] };
// const obj2 = { b: 2, c: ['Bar', 'lah'], d: 'Baz' };

// //const fused = fuseObjects(obj1, obj2);
// fusion(obj1, obj2)
// console.log(fusion(obj1, obj2));

console.log(fusion({ a: { b: 1 } }, { a: 1 }))
//console.log(fusion({ a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }));
// console.log(fusion());
// console.log(fusion());
// console.log(fusion());