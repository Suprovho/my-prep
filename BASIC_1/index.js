
//! conversion -->

let sc = 1234;
let cs = "sup123"; //? valid -> "123"
console.log(sc);
console.log(typeof sc);
console.log(cs);
console.log(typeof cs);
let isNum = Number(cs);
console.log(isNum, typeof isNum); // it is showing NaN because when we converted into number but the value contain alphabet..
// it not a proper conversion   the valid one is cs="123" then it will show 123 otherwise Nan

//! pass by value and pass by reference..>>>

//? REMEMBER STACK IS FOR PRIMITIVE
//? AND HEAP IS FOR NON PRIMITIVE

let a = {
  name: "Suprovho",
  age: 22,
};

let b = 12; //* pass by value

console.log(b);

let c = b;
c = 123;

console.log(c); // Original value of b will not be changed on changing c as its a primitive data type
console.log(b, "value not changed");

//* pass by ref->

let d = a;
console.log(d);

d.name = "suprovho De Sarkar";

console.log(a, "value changed"); // here the original obj value will also be changed as its pass by ref as d also refer to the original obj

//! so be careful while working with objects or arrays etc which follow pass by reference..

//! X----------------------------------------------------------------X
