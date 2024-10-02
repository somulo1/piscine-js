// Define the original person object (renaming from 'person' to avoid conflicts)
const person = {
    name: "Samwel",
    age: 30,
    country: "US"
};

// Create clone1 and clone2 as deep copies of the person object
const clone1 = { ...person };  // Spread operator to create a shallow copy
const clone2 = Object.assign({}, person);  // Another method to create a shallow copy

// samePerson is a reference to the person object (modifications to person will affect samePerson)
const samePerson = person;

// Modify the person object (age increased by 1, and country set to 'FR')
person.age += 1;
person.country = "FR";

// Logging the objects to verify changes
console.log("person:", person);
console.log("clone1:", clone1);
console.log("clone2:", clone2);
console.log("samePerson:", samePerson);
