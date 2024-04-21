
const num=123;
console.log(num.toFixed(2)); //123.00

const b1=12.123;
console.log(b1.toPrecision(2));//12




console.log(Math);
let m1=123;
let m2=23.3456; 
let m3=-13;
console.log(Math.exp(m1))//exponent
console.log(Math.abs(m3));
console.log(Math.round(m2));
console.log(Math.ceil(m2));//24  // gives the next integer greater than or closer to decimal  
console.log(Math.floor(m2));//23 
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));
console.log(Math.random());// always remember that Random method always ranges from 0  o 1(in b/w includes Decimal points)
console.log(Math.random()*10);// once we put on the 10 then it ranges from 1 to 10
console.log(Math.ceil(Math.random()*20));// once we put on the 10 then it ranges from 1 to 20
console.log(Math.floor(Math.random()*10));// once we put on the 10 then it ranges from 1 to 10

console.log(Math.ceil(Math.random()*90));

 //The real confusion comes here that is 

 console.log("The real confusion comes here into play");
 console.log("2"!=0);//true
 console.log("3"==3);//true
 console.log("3"=="3");//true
 console.log("2">1);//true

 //Now we will check for strict check and its syntax is ===

console.log("2"===2);//False
console.log("2"==="2");//results true


// !always remember the precedence start from left 

console.log("2"+1+1);//211
console.log(1+1+"2");//22
