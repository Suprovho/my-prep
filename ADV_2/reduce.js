
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

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);