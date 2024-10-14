function invert(obj) {
    const entries = Object.entries(obj)
    const revEntries = entries.map(([key, value]) => [value, key])

    return Object.fromEntries(revEntries)
}


const person = {name: "Alice", age: 23}
console.log(invert(person))