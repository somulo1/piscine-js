// Define the original individual object (renaming from 'person' to avoid conflicts)
const individual = {
    name: "Samwel",
    age: 30,
    country: "US"
};

// Create clone1 and clone2 as deep copies of the individual object
const clone1 = { ...individual };  // Spread operator to create a shallow copy
const clone2 = Object.assign({}, individual);  // Another method to create a shallow copy

// samePerson is a reference to the individual object (modifications to individual will affect samePerson)
const samePerson = individual;

// Modify the individual object (age increased by 1, and country set to 'FR')
individual.age += 1;
individual.country = "FR";

// Logging the objects to verify changes
console.log("individual:", individual);
console.log("clone1:", clone1);
console.log("clone2:", clone2);
console.log("samePerson:", samePerson);
