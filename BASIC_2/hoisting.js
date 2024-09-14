
getName();
console.log(x);

console.log(getName); // it will print the function code

var x=7;

function getName() {
    console.log("namaste js");
} 

// namaste js 
//undefined

//! why behaving like this ->

//** because in first line only js assign memory to all the var and function inside global excon.. , concept of execution context  so x is initialized as undefined in first and second whole function code is stored even before the code is run all these things happen so thats why when we run the code the function get invoked in line 2 even tough the function code is in line 8 and x is printed as undefined.. */

//diff between undefined and not defined

//** if we remove the line 7 and run the code it will show not defined because js will find x in memory space and as its not initialized it will throw an error of not defined but when x is initialized js will store its value as undefined before the code is run or at a tie of creating execution context.. */

// incase this type of case ->

let getName2=()=>{
    console.log("namaste js");
} 

getName2();

//* if we call the func like before it will throw an error as function is not defined because it will behave as normal variable not as function before the code is run and it will be set as undefined.. like other variable so when we are invoking before it trows an error


