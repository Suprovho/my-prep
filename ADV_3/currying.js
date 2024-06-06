 
 //* currying is like presetting some argument inside a function.

//*  using bind

let add=function(a,b){
 // a = 2; 
  console.log(a+b);
}

let addByTwo=add.bind(this,2); // we are presetting 2 as a.

addByTwo(3); // 5


//* using closures

let multiply=function (x) {
    return function (y){
      console.log(x*y);
    }
}

let MultiplyByTwo = multiply(2); // same as above

MultiplyByTwo(3); // 6

// infinite currying


function add() {
  return function(b){
    if (b) return add(a+b);
    return a;
  }
}

console.log(add(4)(5)(7)(9)());