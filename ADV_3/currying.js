 
 //* currying is like presetting some argument inside a function.

//*  using bind

let add=function(a,b){
 // b = 2; 
  console.log(a+b);
}

let sub=function(a,b){
  console.log(a-b);
}

let subByTwo=sub.bind(this,3)

subByTwo(2);

let addByTwo=add.bind(this,2); // we are presetting 2 as b.

addByTwo(3); // 5


//* using closures

let multiply=function (x) {
    return function (y){
      console.log(x*y);
    }
}

let div=function(x) {
   return function (y) {
    console.log(x/y);
   }
}

let divByTwo = div(4); // same as above

divByTwo(2);

let MultiplyByTwo = multiply(2); // same as above

MultiplyByTwo(3); // 6




function evaluate(operation){
  return function (a) {
    return function (b) {
      if(operation==="sum")return a+b;
      else if(operation==="sub")return a-b;
      else if(operation==="div")return a/b;
      else if(operation==="mul")return a*b;
      else return "Invalid operation";
    };
  };
};


console.log(evaluate("mul")(10)(10));

// infinite currying

                          
function add2(a) {
  return function(b){
    if (b) return add2(a+b); // do debugging for better understanding.
    return a;
  }
}

console.log(add2(4)(5)(7)(9)());