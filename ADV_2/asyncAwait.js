//! async function ->

// async function always returns a promise s
// either we return a promise or else async will wrap non promise value into promise and return it.

// await can only be used inside async function.

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value!!");
  }, 5000);
});

// handel promise using async await

async function handlePromise() {
  console.log("hello world");
  const val = await p;
  console.log("suprovho");
  console.log(val);
}

// handlePromise();

//* traditional way ->

function getData() {
  p.then((res) => console.log(res));
  console.log("namaste");
}

// getData();

// the diff between two is in traditional way js engine doesn't wait for promise to resolved and quickly execute next line but in await it wait for the promise to get resolved.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved !!");
  }, 10000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved !!");
  }, 5000);
});

async function handlePromise2() {
  console.log("hello world");
  const val = await p1;
  console.log("namaste");
  console.log(val);

  const val2 = await p2;
  console.log("namaste 2");
  console.log(val2);
}

handlePromise2();

//* now here come the catch!

// js actually don,t wait as js is a synchronous single threaded language so we cant block the call stack so handel promise2() will be called then hello world will be printed then in call stack the function will be suspended as p1 is not resolved yet after 10 sec it function will in call stack again and print namaste and val and by the time p1 resolved p2 is already resolved so it will print line 53 and 54.. so all the stuff will be printed after 10 sec.

//* case 2 : ->

// but what if we reverse the order means p2 as 10 sec and p1 as 5 sec then also the working remain the same helloworld -> suspend -> namaste and val will be printed first after that js now will continue from where it left and then p2 will be printed after 10 sec and namaste2

//* REMEMBER -> js  will continue from where it left and after the completion of first one only it will move to next as it is synch.. lang. so of first one time is less than sec first will be printed then sec by the above process. thats why in case 1 after 10 sec all of them are printed..

// run the code for more clarification by 2 case

// thats how async await works..

//! FETCH ->

// fetch() returns a promise which has a response object=> a readable stream which can be converted into json etc.. when we request  something from the server.

const API_URL = "https://api.github.com/user/vickyacharjee";

async function handlePromise3() {
  const data = await fetch(API_URL); // return response object promise.

  const jsonValue = await data.json(); // return a json...obj.. promise.

  console.log(jsonValue);

  //*    fetch(API_URL).then(res=>res.json()).then(res=>console.log(res)); // same as above traditional approach.
}

//! ERROR HANDLING ->

async function handlePromise3() {
  try {
    const data = await fetch(API_URL);

    const jsonValue = await data.json();

    console.log(jsonValue);

  } catch (err) {
    console.log(err);
  }
}

handlePromise3();

//* async and await are syntactical sugar over then and catch it internally does then catch .. operation only..

