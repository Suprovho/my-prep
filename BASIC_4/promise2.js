//! creation of promise ->

const cart = ["shoes", "pants", "shirts", "kurta"];

createOrder(cart) // promise is created
  .then((orderID) => {
    // whatever we resolve while creating promise it get over here.
    console.log(orderID);
    return orderID; // a call back fun will be attached to the promise obj..
  })
  .then((orderID) => {
    return proceedToPayment(orderID);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo); // this callback is attached to proceedToPayment note it..
  })
  .catch((err) => {
    console.log(err.message); 
  })
  .then(()=>console.log("it will be called definitely no matter what happens"));


function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create order
    // validate
    // return orderID

    if (!validateCart(cart)) {
      const err = new Error("cart is not valid"); // error handling
      reject(err);
    }

    // logic for create order.. lines of code then and suppose we set a order ID then once order id is created suppose for now we hard code it as 12345

    const orderID = "12345";
    if (orderID) {
      setTimeout(() => {
        resolve(orderID); // the promise obj will get this value // we cant do resolve twice..
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderID) {
  return new Promise((resolve, reject) => {
    // payment logic code...
    resolve("payment success");
  });
}

function validateCart(cart) {
  // validation logic code...

  return true;
}
