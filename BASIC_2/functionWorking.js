
var x=1;
a();
b();
console.log(x);

function a(params) {
  var x=10;
   console.log(x); 
}

function b(params) {
   var x=100;
    console.log(x);
}

//!Output->
// 10
// 100
// 1

//working->

//** as we have seen in hosting in gexc.. x will be initialized as undefined then fun a and b code  now for func a another execution context will be created where the var will be declared undefined then it will be initialized when the code is run and output will be printed on to the console but here all the variables are stored in local scope and each function has their separate execution context and its local scope where variable are stored and once the function is executed the execution context is deleted or pop out of call stack.. and we have declared function at top as we learned how hoisting work in js   */


//! WINDOW and this difference ->

//    • window object is created by the JS engines of the respective browsers when global execution context is created.
// 	• whenever an execution context is created a "this" variable is also created.
// 	• at the global level "this" points to the global object( window object in case of browsers).
// 	• anything that is not inside a function is the "global space".
// 	• whenever we create any variables or functions in the "global space", they get attached to the global object( window object in case of browsers).
	
// 	so to access the variables/function defined in the global space , 
// 	we can use any of the below:
//* 		console.log(window.a);
//* 		console.log(a);
//* 		console.log(this.a)             //at the global space level, where this points to the window object.


//! Not defined and undefined ->

// 1.Undefined is a Special Placeholder which is used to reserve memory for the variables in the memory creation phase. Even before a single line of code is executed JS engine assigns undefined to the variables.

// 2.Not Defined means if we try to console or access any variable which is not declared in the code then we get Not Defined error.

// 3. JS is a loosely typed language or weakly typed language means it does not attaches its variables to specific data types like in C++ and java.

// 4.Remember undefined !== not defined.



