function bigFunc() {
  let newArray = new Array(700).fill("🚀");
  return (element) => newArray[element];
}
let getElement = bigFunc(); // Array is created only once
console.log(getElement(599));
console.log(getElement(670));

// The following code outputs 2 and 2 after waiting for one second
// Modify the code to output 0 and 1 after one second.

function randomFunc() {
  for (let i = 0; i < 2; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}
randomFunc();

// change to let.

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}


function sum(num1,num2) {
"use strict";
  num1=100;
  num2=200;
  return arguments[0]+arguments[1];
}

sum(10,20) // output - 300 because js override the value;
// we can prevent it using use strict
