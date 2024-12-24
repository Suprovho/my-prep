// refer the images ->

//! promise.all() ->

//* it handles multiples promises or multiple api calls that return promises.

//* it take array of promises as input it maybe 3,4,n .... and  it will make n parallel calls and get the results.

//* it will return an array of values of all the result as an output.

//* it will wait for all of them to finish and collect the results and give it to you. so final time will be until all the response are collected vary upon it.

//* what if one of promise fail or return error ->

//* suppose p1 take 2 sec , p2 take 1 sec and p3 take 2 sec and p2 get failed after 1sec so promise.all will not wait for another promise and show the error message. means if one get failure then its a complete failure if other get eventually completed then also it doesn't matter whole collection of promise will fail.

//! promise.allSettled() ->

//* here if any of the promises fail the whole collection will not be failed instead it will return the array of success promise along with it will show the error message. it will wait for all of promises to get settled.

//! promise.race() ->

//* here whatever promise settled first we will get that result or value of first settled promise. if first settled promise get failed then it will throw error and will not wait for others and whole collection will fail.

//! promise.any() ->

//* it wait for the first success it may be p1,p2 or p3 irrespective of their time and will return that value which get success first the diff from race() is it will wait for first success to occur even if first settled one gives error it will wait for 2nd if that get success it will return p2.

//*seeking for first success.

//* if all of them fail then it will return an aggregate error means list of all the errors from p1,p2,p3...

//! --------------------------------> CODE ->

const p1 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p1 success"), 2000);
  setTimeout(() => reject("p1 fail"), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 success"), 4000);
  // setTimeout(()=>reject("p2 fail"),4000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success"), 5000);
  //   setTimeout(()=>reject("p3 fail"),5000);
});

// Promise.all([p1, p2, p3])
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// });

//!--------->

// Promise.allSettled([p1, p2, p3])
// .then((res) => {
//   console.log(res); // return array of objects.
// })
// .catch((err) => {
//     console.error(err);
// });

//!-------------------------------->

// Promise.race([p1, p2, p3])
// .then((res) => {
//   console.log(res); // first settled promise.
// })
// .catch((err) => {
//     console.error(err);
// });

//!-------------------------------->

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res); // first settled success promise
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
