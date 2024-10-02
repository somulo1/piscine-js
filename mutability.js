// Provided code (already in the environment):

// Create clone1 and clone2 as shallow copies of the person object
const clone1 = { ...person };  // Using spread operator to create a shallow copy
const clone2 = Object.assign({}, person);  // Using Object.assign to create another shallow copy

// samePerson is a reference to the original person object
const samePerson = person;

// Modify the person object
person.age += 1;
person.country = 'FR';

// Logging to verify the results
console.log("person:", person);
console.log("clone1:", clone1);
console.log("clone2:", clone2);
console.log("samePerson:", samePerson);
