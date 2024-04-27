
// refer event loop pic

//! summary: ->

//In JavaScript, the event loop, microtask queue, callback queue, and call stack are all key components that help manage the asynchronous nature of the language.

//*Callback Queue (Task Queue):

// The callback queue, also known as the task queue, holds tasks (callbacks or events) that are ready to be executed. These tasks usually come from asynchronous operations, such as DOM events, HTTP requests, or timers.
// Event Loop:

// The event loop is responsible for continuously checking the call stack and the callback queue. If the call stack is empty, the event loop takes the first task from the callback queue and pushes it onto the call stack for execution.

//* Microtask Queue:

// The microtask queue holds tasks that are also ready to be executed but has a higher priority than the callback queue. Microtasks are usually scheduled by JavaScript promises, mutation observers, and other similar mechanisms.
// Here's how they work together:

// When an asynchronous operation is encountered, such as a setTimeout or a Promise, the callback associated with that operation is sent to the callback queue after the specified time or when the Promise settles.

// When the call stack is empty (no functions being executed), the event loop takes the first task from the microtask queue and pushes it onto the call stack.

// If the microtask queue is empty, the event loop looks at the callback queue and pushes the first task onto the call stack.

// This process repeats, allowing JavaScript to handle asynchronous operations without blocking the main thread.

//!extra -.

//* 1. When does the event loop actually start? - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ️

//* 2.  Are only asynchronous web API callbacks are registered in the web API environment? - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.

//* 3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.

//* 4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 

//* No, there are trust issues with setTimeout() . The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.  It's a very beautiful concept, and I've covered this in detail in the next episode of Namaste JavaScript. 