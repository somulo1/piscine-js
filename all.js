async function all(obj) {
    var result = {};
    if (Object.keys(obj).length === 0) return {};
    for (let key in obj) {
        result[key] = await obj[key];
    }
    return result;
}