//! PLAYING WITH OBJ.

// adding new property to an empty object or existing property using . or objName[key]=value.

const obj = {
  a: "hello",
  age: 22,
};

obj.name = "suprovho";

const id = "123#25";

obj[id] = true;

console.log(obj);

const obj2 = [{ fruits: "apple" }, { vegetable: "potato" }];

const updatedObj = [...obj2, { snacks: "chips" }];

console.log(updatedObj);

//