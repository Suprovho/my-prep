
console.log("value of age is",age);  // undefined

// let age = 30; // error

var age = 30;

console.log("value of age is",age); // 30

// due to TDZ we can not access age before initialization in let and const

// but incase of var its in global scope so we can initialize later 


myFunc2();

var myFunc2=()=>{
    console.log("first");
};

myFunc2();

function myFunc2() {
    console.log("second");
}

myFunc2();

var myFunc2=()=>{
    console.log("third");
};

myFunc2();

// first it will print second then first then again first because line 17 act as a normal variable at a time of creating GEC so first it is undefined so function will point to second.. one but later when my fun.. 2 got the func.. and again invoked it print first then after that it will point to that only its overriding with latest one.

var variable=10;

(()=>{
    console.log(variable); // 10
    variable=20;
    console.log(variable); // 20
})();

console.log(variable); // 20
var variable=30;

// because of var is global scope hoisting concept.

var a=10;

(()=>{
foo=100;
console.log(a);
var foo=100;
a=20;
console.log(a);
})();

console.log(foo); // error because foo is in function scope and it get deleted after execution.
console.log(a);

a=30;