// Use .some() when you just need a yes/no answer.
// Use .find() when you need the actual element that matches the condition. or to find a particular element

const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

// Check if any user has the id of 2
const exists = users.some((user) => user.id === 2);
console.log(exists); // true

// Find the user with the id of 2
const foundUser = users.find((user) => user.id === 2);
console.log(foundUser); // { id: 2 } 

//* if we put certain condition like >2 or >3 etc in find then it will return first ele that satisfy the cond so we should use filter for such case

//* diff btw some and includes.

//* some allows you to use a callback function, giving you more control over what you are checking for, including complex conditions. used for objects.

//*includes() check for primitive datatype strings or number in an array or strings.
