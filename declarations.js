// Create a constant string with special characters
const escapeStr = "`\\/\"'";

// Create a constant array with values 4 and '2'
const arr = Object.freeze([4, '2']);

// Create an object with primitive values
const obj = Object.freeze({
    str: "Hello",         // String value
    num: 42,              // Number value
    bool: true,           // Boolean value
    undef: undefined      // Undefined value
});

// Create a nested object with a frozen array and frozen object inside
const nested = Object.freeze({
    arr: Object.freeze([4, undefined, '2']), // Frozen array
    obj: Object.freeze({                     // Frozen object with 3 properties
        str: "Nested String",   // String value
        num: 100,               // Number value
        bool: false             // Boolean value
    })
});

// Logging the variables to see the output
console.log("escapeStr:", escapeStr);
console.log("arr:", arr);
console.log("obj:", obj);
console.log("nested:", nested);

// Trying to modify the frozen objects to confirm they can't be changed
try {
    arr[0] = 99;
    obj.str = "New value";
    nested.arr[0] = 99;
    nested.obj.str = "Modified String";
} catch (error) {
    console.error("Error modifying frozen objects:", error);
}

console.log("After attempting modifications:");
console.log("arr:", arr);
console.log("obj:", obj);
console.log("nested:", nested);
