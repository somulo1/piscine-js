const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null ) {
        return obj;
    }
    
    if (Array.isArray(obj)) {
        return obj.map(deepCopy);
    }
    
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    
    if (typeof obj === 'function') {
        return obj;
    }
    
    const copy = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
};