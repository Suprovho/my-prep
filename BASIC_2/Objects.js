//! PLAYING WITH OBJ.

// adding new property to an empty object or existing property using . or objName[key]=value.

const obj = {
  a: "hello",
  age: 22,
};

obj.name = "suprovho";

const id = "123#25";

obj[id] = true; // use this when we have to dynamically name the key.

console.log(obj);

const obj2 = [{ fruits: "apple" }, { vegetable: "potato" }];

const updatedObj = [{ snacks: "chips" },{drinks:"old monk"},...obj2];

console.log(updatedObj);

// continue..

const obj3={
  drinks:"Fanta",
  dessert:"Ice Cream",
}

const updatedObj2=[...obj2,obj3];

console.log(updatedObj2);

//Delete an object.

// delete obj3; // or 
delete obj3.drinks

console.log(obj2);

// assign

const target = { a: 1, b: 2 };
const source = { c: 4, d: 5 };

const returnedTarget = Object.assign({},target, source); // its like concat copying all the properties from the source object and move to target object and it returns the final obj

console.log(returnedTarget);

const keys=Object.keys(updatedObj2);
const values=Object.values(updatedObj2[0]);

console.log(keys);
console.log(values);

