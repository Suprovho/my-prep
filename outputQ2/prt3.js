// flatten an nested object.

function flattenObject(obj, parent) {
  const output = {};
  const finalObject = (obj, parent) => {
    for (let key in obj) {
      const newParent = parent + key;
      const value = obj[key];
      if (typeof value === "object") {
        finalObject(value, newParent + "."); // recursive call
      } else {
        output[newParent] = value;
      }
    }
  };
  finalObject(obj, parent);
  return output;
}

const obj = {
  A: "12",
  B: 23,
  C: {
    P: 25,
    O: {
      L: 56,
    },
    Q: [1, 2], // it will treat array as obj.. as type of array is also obj
  },
};

console.log(flattenObject(obj, ""));
