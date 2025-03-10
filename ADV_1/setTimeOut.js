//! SetTimeOut

function x() {
  for (var i = 1; i <= 6; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("suprovho");
}

function xz(params) {
  for (let i = 0; i <= 6; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 100);
  }
  console.log("sup");
}

// x();

xz();

//OUTPUT
/**
 * suprovho
 * 6
 * 6
 * 6
 * 6
 * 6
 *
 */

//* it because time , tide and js wait for none so suprovho will be printed first then 6 6 6 6... because js will first run the loop and its value will already be 6 at that time and when the set time out will be called each time at an interval of 1000ms 6 will be printed repeatedly as in closure  it store the reference of variable whose value at that time was 6

//it can be solved using let

function x() {
  for (let i = 1; i <= 6; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("suprovho");
}

//   x();

//* now each time a set time out is called it will point to diff  let i variable block as each time the loop is run new copy of let i is generated so set time out fun will point to new reference of i each time its called as let is a block scope..

//! now interviewer can say do it without let now its tricky as we have to use var !

function x() {
  for (let i = 1; i <= 6; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }

  console.log("suprovho");
}

x();

// here every time the set time out is called it will have a new copy of i
