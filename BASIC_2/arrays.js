const arr = [1, 23, 24, 25, 26, 27, 28, 29, 30, 31];
console.log(arr);
console.log(typeof arr); //object

const arr2 = ["a", "b", "suprovho", "d", "e"];

//push add ele in original array at end

arr2.push("f");
console.log(arr2);

//pop remove the last element from original array

arr2.pop();
console.log(arr2);

// shift it basically removed the first element from an array element original

arr2.shift();
console.log(arr2);

//unshift add ele at first

arr2.unshift("a");
console.log(arr2);

//include()
console.log(arr2.includes("j")); //false (since its doesn't contains the ele in the given array)
console.log("for include", arr2.includes("a")); //True

//indexof()
console.log(arr2.indexOf("d")); // since its contains on the zero element in an array
console.log("for indxOf", arr2.indexOf("l")); // Returns -1 if it doesn't contains the element on a given array

//splice
console.log(arr2.splice(1, 2));
console.log("for splice", arr2); //The splice is tricky to understand since its actually made a change in the original array elements only

//filter()
const arr3=[1,2,20,30];
const ans=arr3.filter((ans)=>ans<10); // it take a call back function to execute and return a new filtered array.
console.log(ans);

//map()
const ans2=arr3.map((e)=>e>10); // [ false, false, true, true ]
console.log(ans2);
//*The map function applies a given function to each element of the array and returns a new array with the results.

//*In this case, the function being applied (e) => e > 10 is a comparison function that checks if each element e in the array is greater than 10. This comparison returns a boolean value (true if the element is greater than 10, false otherwise).


//!DETAIL EXPLANATION->
/**
In JavaScript, the map() function transforms each element of the array based on the provided function and returns a new array containing the transformed values. In contrast, the filter() function filters the elements of the array based on a condition and returns a new array containing only the elements that satisfy that condition.

In the code snippet you provided:


const ans2 = arr3.map((e) => e > 10);
This code will create a new array ans2 where each element corresponds to the result of the comparison e > 10 for each element e in the arr3 array. This results in an array of boolean values.

If you want to filter out the elements of the array arr3 that are greater than 10, you would use the filter() function instead, like so:


const ans2 = arr3.filter((e) => e > 10);
This code will create a new array ans2 containing only the elements of arr3 that are greater than 10. It does not return boolean values but rather the actual values that satisfy the condition.
*/
