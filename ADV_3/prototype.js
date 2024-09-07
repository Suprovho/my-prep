// inheritance in JS => When an object trying to access variables and properties of another object

// prototype is an Object that get attach to function/method/object and this object has some hidden properties

// Whenever we create object/ function/ methods/ array/ variable , these all are attached with some hidden properties, which we call prototype

//  _proto_ is reference to prototype ( or it points towards prototype ), if we want to access prototype, we do _proto_

// prototype object has a prototype of its own, and so on until an object is reached with null as its prototype,  this is called prototype chaining

let object={
    name:"suprovho",
    city:"NYC"
}

let object2={
    name:"Ady"
}

// never do this its for understanding purpose.

object2.__proto__= object;

// now object 2 can have access to all the ele of object.

console.log(object2.city);


Function.prototype.myBind=function() { //  setting myBind to Function.prototype will gave access to all my function to access myBind func   
    console.log("hello");
}

function a() {
    
}

a.myBind(); // hello.



