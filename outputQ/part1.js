console.log([..."John Resig"]);

// The output of the array is ['J', 'o', 'h', 'n', '', 'R', 'e', 's', 'i', 'g'] Explanation: The string is an iterable type and the spread operator within an array maps every character of an iterable to one element. Hence, each character of a string becomes an element within an Array.

function f1() {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 300);

  let y = 5;
  var x = 2;
}

f1(); // 2,5  y will run because js wait for none so y get hoisted.

function func2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000); // because var is not a block scope and it get incremented first
  }
}

func2();

(function () {
  setTimeout(() => console.log(1), 2000);
  console.log(2);
  setTimeout(() => console.log(3), 0);
  console.log(4);
})();


// 2
// 4
// 3
// 1 //* After two seconds

