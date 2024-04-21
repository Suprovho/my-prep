
function outest() {
    var c=100;
    function outer(b) {
        let a =10;
        function inner() {
             console.log(a,b,c);
        }
        return inner ;
    }
    return outer;  
}

let a=20;

outer()(); // this extra parenthesis is like calling the outer func and  inner function in same line 

//like this 

var b=outest()("hello");
b();

//* suppose if we move the var after inner function  it will still form a closure because it doesn't depend on sequence as it will from lexical.. env with parent..

// what will happen if we change var to let considering it as a block scope ? 

//* it will still form a closure and work as same but we cant access it outside as its block scope...

// if we pass params will it still work the same 

//* suppose if we add outer under another parent function will it work same ?

// yes, it will still form the closure due to lexical.. env and concept of scope chain..

//* if we add another name let a variable in global scope ?

// it will still work same because it will refer to the a variable inside outer function and if it not present then look for deeper level and global let a will be taken but for now it is diff from var inside outer means in diff block.


//! DATA HIDING AND ENCAPSULATION using closure ->


class Counter {
    constructor() {
        var count = 0;
        this.incrementCounter = function () {
            count++;
            console.log(count);
        };
        this.decrementCounter = function () {
            count--;
            console.log(count);
        };
    }
}

var Counter1=new Counter();
Counter1.incrementCounter();
Counter1.incrementCounter();
Counter1.decrementCounter();

//* disadvantage of closure ->

// it may over consume memory as variable cant be garbage collected as it form closure and if not handeled properly it may lead to memory leaks..

// Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.

// Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures such as v8 




