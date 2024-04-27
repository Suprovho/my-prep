
// if we have an array and iterate over each element and come up with single value we use reduce.
// map method is used when we want transformation of whole array.
// filter is used when we want to filter the array to obtain required value.

const user = [
  { firstname: "Alice", lastname: "Smith", age: 28 },
  { firstname: "Bob", lastname: "Johnson", age: 35 },
  { firstname: "Charlie", lastname: "Brown", age: 35 },
  { firstname: "Diana", lastname: "Williams", age: 24 },
  { firstname: "Eva", lastname: "Davis", age: 31 },
  { firstname: "Frank", lastname: "Miller", age: 20 },
];

const output = user.reduce(function(acc,curr){

    if (acc[curr.age]) {
       acc[curr.age] = ++acc[curr.age]; 
    }else{
        acc[curr.age] = 1;
    }

    return acc;

},{});

console.log(output);

const outputs=user.reduce(function(acc,curr){
if (curr.age>30) {
    acc.push(curr.firstname);
}
return acc;
},[])

console.log(outputs);