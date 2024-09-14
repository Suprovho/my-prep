
// Shallow Copy

//*A shallow copy occurs when you copy the reference of an object to a new variable. In this process, only the top-level properties are copied, while nested objects or arrays still reference the original memory location. This means that if you change the nested properties in one object, those changes will reflect in the other because they share the same memory reference.

var obj={
    name:"suprovho",
    age:22,
    social:{
        facebook:{
            acc1:"adhkashd@facebook.com",
            acc2:"adhk34shd@facebook.com",
        },
        gmail:{
            acc1:"adhkashd@gmail.com",
        },
    },
};

var obj2={...obj};



//Deep Copy

//* A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays. This ensures that changes made to one object do not affect the other. Each object is stored in a separate memory location, making them entirely independent.

var obj3=JSON.parse(JSON.stringify(obj)); // one process

function makeDeepCopy(obj) {
    if(typeof obj!=='object' || obj === null )return obj;

    let copiedval=Array.isArray(obj)? [] : {};
    let keys=Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        copiedval[keys[i]]=makeDeepCopy(obj[keys[i]]); // recursion
    }

    return copiedval;
}

let copy=makeDeepCopy(obj);
console.log(copy);


