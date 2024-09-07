//* debouncing

// if difference between  key presses event is greater than certain time such as 300ms then only api call is made this type of behavior is called debouncing. ex- search bar in e-com web.

//* throttling

// it like making a api call after a certain interval of time ex- screen resize.

// more real time ex such as shooting game where user click for fire so we can limit it.

//! Debouncing in Js ->

let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
};

const debounce = function (call, d){
  let timer; // its initialized here otherwise it will be initialized again & again. it form closure with returned function.
  return function (...args) {
    if (timer) clearTimeout(timer);
     timer=setTimeout(() => {
      call(...args);
    }, d);
  };
};

const betterFunction = debounce(getData, 3000);

//! throttling in Js ->

const loggerFunc = () => {
  console.count("Throttled Function");
};

const throttle = (fn, limit) => {
  return function (...args) {
   document.getElementById("my-id").disabled=true;
    setTimeout(()=>{
       fn(...args);
    },limit)
  };
};

const betterLoggerFunction = throttle(()=>{
  document.getElementById("my-id").disabled=false;
  console.log("user clicked");
},4000);

// window.addEventListener("resize", betterLoggerFunction);

//* This is the normal Function without Throttling
//* Check the console for the difference between the calls of Normal Function and the Throttled Function

// const normalFunc = () => {
//   console.count("Normal Function");
// }

// window.addEventListener("resize",normalFunc);
