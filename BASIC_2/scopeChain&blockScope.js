
function a() {
    var b=10;
    c();
    function c() {
        console.log(b);
    }
}

a();

//!output->

//10

/**
 *! output was 10 because of scope chain 
 *
 ** 1. Scope of a variable or function is directly dependent on the lexical environment.
 * 
 ** 2. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
 * 
 ** 3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
 * 
 ** 4. The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
 * 
 ** 5. The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.
 *
 *! Refer the pic of scope chain  
 */
 

//! LET and CONST ->

let g=10;
const b=10;
 
//* ->  let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
//* ->  js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
//* ->  level of strictness ... var<<let<<const.
//* ->  var     // no temporal dead zone, can redeclare and re-initialize, stored in GEC
//*     let    // use TDZ, can't re-declare   stored in separate memory 
//*     const // use TDZ, can't re-declare, can't re-initialize, stored in separate memory and it should be initialized and declared in same line.. else it will show syntax error.

//* ->  syntax error is similar to compile error. while type and reference error falls under run time error.
//* ->  syntax error ... violation of JS syntax
//*     type error ...  while trying to re-initialize const variable
//*     reference error ... while trying to access variable which is not there in global memory.

const f=20;

// f=21 // error

console.log(f)


//  const f=20; //Invalid

//  const a; syntax error 

// let c;

// c=20 // error



// let c=20;  // error


//! NOTE:

// However, you can change the properties of an object that is assigned to a const or let variable. For example, the following code is valid:

const MY_OBJECT = {
    name: 'John Doe',
    age: 30
};

MY_OBJECT.name = 'Jane Doe'; // This is valid.

//* This is because the const and let keyword only prevents you from reassigning the variable itself, not from changing the values of its properties.



//!BLOCK SCOPE && shadowing in let and const ->


// Block :- It is used to combine multiple statement into one statement so that we can use it at those places where javascript expects to have single statement.

// Scope :- scope of a variable or a function is the place where these are accessible.
// Block scope :-  The variables and function present within the scope of a block section. And block follows the lexical scope chain pattern while accessing the variable.
// Shadowing :-  Providing same name to the variable as of those variable which are present in outer scope.

const x=10; //* it store like normal const script ... tdz 
{
    const a=20;
    console.log(a); //*20 it is stored in block scope 
    {
        const a=30;
        console.log(a); //*30 same here but diff 
    }
}
console.log(x); //*10

//!incase of var

var a = 100;
{
 var a = 10;
 let b = 20;
 const c =30; 
 console.log(a); //10
 console.log(b); //20
 console.log(c); //30
}
 console.log(a); // 10
//!  console.log(b); // error 
//!  console.log(c); // error 

//* So in block  var a = 10; it update the value of var a in global scope as it is present in global scope not in block scope. 

//* if we set let a =100 in line 72 instead of var and in line 74 then a separate scope is created(script) can be called as tdz for first one and let a=10 is present in block scope.. both are different same for const.


//* The shadow should not cross the scope of original otherwise it will give error.
//* shadowing let with var is illegal shadowing and gives error..
