
let name={
    firstName:"suprovho",
    lastName:"De Sarkar"
}

let printFullName = function(homeTown,state){
    console.log(this.firstName+" "+this.lastName+" "+"from"+" "+homeTown+","+state);
}

let name2={
    firstName:"vicky",
    lastName:"Acharjee"
}

                             
//* call ......
             
printFullName.call(name,"Siliguri","WestBengal");
                
printFullName.call(name,"bangalore","kr");
           

// call method is used to invoke the function directly by passing the reference which point to the this variable inside the method.

//* apply 

printFullName.apply(name2,["shillong","Meghalaya"]);
printFullName.apply(name2,["bangl..","kr"]);

// it is exactly same as call but it take second argument as a array list of the parameter which need to be passed to the method.

//* bind 

let printName=printFullName.bind(name2,"shillong","meghalaya");
console.log(printName);
printName();

// it directly doesn't invoke the function but gives you the copy of the exactly same method which can be invoked later.

//* implicit & explicit binding

let obj={
    names:"suprovho",
    display:function(){
        console.log(this.names);
    },
};

let obj1={
    names:"john"
};


obj.display() // implicit 

obj.display.call(obj1) // john   