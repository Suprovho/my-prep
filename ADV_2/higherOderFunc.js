
//! Higher Order Functions ->

// Function that takes another function as argument(callback function) or return a function is known as Higher order functions.

//* the ability to use function as a value/variable and pass as an argument or return  is called first class function.

//*Callback Function: In Higher Order, Function passed in ARGUMENT is called callback Function. here it can be first class function or normal function.

//* If we use Array.property.function-name. This function is accessible to any array in your code.

// EXAMPLE: ->

const radius=[1,2,3,4,5];

const area= function (radius) {
    return Math.PI*radius*radius; // first class function.. 
}

const circumference= function (radius) {
    return 2*Math.PI*radius;
}

const diameter=function (radius) {
    return 2*radius;
}

Array.prototype.calculate = function (logic) {  //logic here is  callback function 
    const output=[];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i])); 
    }
    return output;
}

// console.log(radius.calculate(area));

// NOTE: Follow DRY(Don't Repeat Yourself) principle while coding.

//! CALLBACK HELL ->

//* Callback passed into another function as an argument and another function passed into the callback function as nested callback. So code go horizontally inside vertically. So the callback code as unmaintainable ans unreadable. It's also known as pyramid doom

//* 


const radius2=[2,3,4,6,10];


const area2=function (radius) {
    return Math.floor(Math.PI*radius*radius);
}

Array.prototype.calculate2=function (cb) {
    const output=[];
    for (let i = 0; i < this.length; i++) {
        output.push(cb(this[i]));
    }
    return output;
}

console.log(radius.calculate2(area2));
