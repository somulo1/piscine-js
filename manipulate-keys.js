function filterKeys(obj, func) {
    let result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (func(key)) {
            result[key] = value;
        }
    }
    return result;
}

function mapKeys(obj, func) {
    let result = {};
    let newKey;
    for (const [key, value] of Object.entries(obj)) {
        newKey = func(key)
        result[newKey] = value
    }
    return result
}

function reduceKeys(obj, func, initial) {
    let result, start;
    const keys = Object.keys(obj)
    
        if (initial === undefined) {
            result = keys[0]
            start = 1;
        } else {
            result = initial;
            start = 0;
        }
        for (let i = start; i < keys.length; i++) {
            result = func(result, keys[i])
        }
        return result;
    }



const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
console.log(mapKeys(nutrients, (k) => `-${k}`))
console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))

