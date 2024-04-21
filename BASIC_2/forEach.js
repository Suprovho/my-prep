
const arr2=['a', 'b', 'c'];

//forEach
//it mandatory needs an parameter
//with array, object, array+object //this is mainly we use in database operations

arr2.forEach((element) => {
    console.log(element);
});

const FilePath=[
    {
        lagName:"javaScript",
        lagFile:"js"
    },
    {
        lagName:"python",
        lagFile:"py"
        
    },
     {
        lagName:"java",
        lagFile:"java"
       
    },
    {
        lagName:"swift",
        lagFile:"swift by apple"
        
    },
    {
        lagName:"c++",
        lagFile:"cpp"
        
    }
]

FilePath.forEach((i)=>{
    console.log(`${i.lagName} extension is ${i.lagFile}`); // it will call a callback function for each item in the file path array.
})


// initializing a Map
//key value pair..

const map=new Map();

map.set('IN','india')
map.set('USA','United states of America')
map.set('fr','France')
// console.log(map);
//Map(3) {'IN' => 'india', 'USA' => 'United states of America', 'fr' => 'France'}

for (const [key,value] of map) {
    console.log(key);//IN USA fr
    console.log(value);//india, united states of america, France
}

// const map2=new Map();

// map2.set('IN','india');
// map2.set('USA','United States of America');
// map2.set('FR','France');

// for (const [key,value] of object) {
//     console.log(key);
//     console.log(value);
// }

// for(const[key,value] of map){

// }


for (const [key,value] of map) {
    
}