
//! THIS keyword.

"use strict";

// this in global space 

console.log(this); // this keyword in global space will always have global object as its value. ex- window,etc

//* inside function scope

function x() {
    console.log(this);
}
x();

//* this keyword run different in strict mode and in non strict mode.

// in function it return undefined or null  but in normal mode due to this substitution it will be replaced with global object.

// this keyword value will depend on how the function is called in strict mode.

x() // undefined

const obj={
    a: 10,
    x: function() { 
      console.log(this); 
    }
}

obj.x(); // output will be the object  and if we do this.a then it will be 10 in line 28.

// in js if we create function inside object its called method.

//* call ,apply and bind (sharing methods).

// it is use to set the value of this or modify the value this or override.

const obj2={
    name: "suprovho",
    printName: function() { 
      console.log(this.name); 
    }
}

const obj3={
    name: "hello"
}

obj2.printName.call(obj3); 


//* this inside arrow function.

// arrow function don't have this binding.
const obj4={
    name: "suprovho",
    printName: function() { 
      const y=()=>{
        console.log(this);
      }
      y(); 
    },
};

obj4.printName();  // the value of this inside arrow function will be its enclosing lexical context so here the value will be the object obj4.


//* this inside DOM element

// it refer to the html elements.