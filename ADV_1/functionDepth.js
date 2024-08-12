
//! function statement aka function declaration ->

function hey() {
    console.log("a is called");
}

//* so a normal function declaration with name is called function statement or function declaration.

//! function expression ->

let b = function(){
    console.log("b is called");
};



//* function used as a values is called function expression.
//* diff between these two is hoisting .. as learned in earlier section that it is treated as normal variable. 

//! anonymous function ->

// function() {
//     console.log("anonymous function");
// }

//* it is used when function should be used as values.. otherwise it will show syntax error. ex- line 12

//! named function expression ->

let c = function xyz(){
    console.log("b is called");
};

//* function expression with named function but xyz func act as a local variable ex->

xyz(); // reference error


//* parameters are te local variables available to fun and arguments are the values passed.. 

//! first class function aka first class citizens   ->


//* the ability to use function as a value and pass as an argument or return  is called first class function.


const a = function () {
    return ()=>{
        console.log("hello");
    }
}

console.log(a());



