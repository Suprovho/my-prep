
//! closure -> 

//* Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting !!

//example ->

function z() {
    var b=900;
    function x() {
        var a=7;   //* suppose here b=10 so when its called does b value change the ans is yes because in closure it has the reference of variable it is pointing not the values interview question..
        function y() {
            console.log(a,b);
        }
        y();
    }
    x(); // we can use return also return x 
}
z();

//another way ->

function i() {
    var c=7;
    function j() {
        console.log(c);
    }
    return j;
}
var k=i();
k();

// it follow the concept of scope chain or we can say lexical environment so func z has access to it parents variables or memory.


//!use case ->

// set time out , currying,memoize,etc...


