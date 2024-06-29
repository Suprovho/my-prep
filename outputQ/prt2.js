let x = {},
  y = { name: "Ronny" },
  z = { name: "John" };
x[y] = { name: "Vivek" };
x[z] = { name: "Akki" };
console.log(x[y]);

function runFunc() {
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello" + "78");
}
runFunc();

let a = 0;
let b = false;
console.log(a == b);
console.log(a === b);

// var x = 23;
// (function () {
//   var x = 43;
//   (function random() {
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();

//Output is NaN.
// random() function has functional scope since x is declared and hoisted in the
// functional scope.

// Rewriting the random function will give a better idea about the output:

// function random(){
// var x; // x is hoisted
// x++; // x is not a number since it is not initialized yet
// console.log(x); // Outputs NaN
// x = 21; // Initialization of x
// }


let hero = {
    powerLevel: 99,
    getPower(){
    return this.powerLevel;
    }
    }
    let getPower = hero.getPower;
    let hero2 = {powerLevel:42};
    console.log(getPower()); //undefined
    console.log(getPower.apply(hero2));//42

    //Reason - The first output is undefined since when the function is invoked, it is invoked referencing the global object:



 