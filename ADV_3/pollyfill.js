
// polyfill for bind

// polyfill is like browser fallback ..
// what if browser doesn't support bind.

// own bind function.


let name={
    firstName:"suprovho",
    lastName:"sd"
}

let printname4=function (hometown,state) {
    console.log(this.firstName+""+this.lastName+""+hometown+state);
}

let printname=function (hometown,state) {
    console.log(this.firstName+" "+this.lastName+" , "+hometown+" , "+state);
}

let printMyName=printname.bind(name,"siliguri");
printMyName("WB");

Function.prototype.myBind=function(...args){
   let obj=this // this point to the printname function.
   params=args.slice(1); // separate the ele from args which is in array form.
   return function(...args2){
      obj.apply(args[0],[...params,...args2]);
   }

}

Function.prototype.myBind2=function (...args) {
    let obj=this
    params=args.slice(1); 
    return function(...args2) {
        obj.apply(args[0],[...params,...args2]);
    }
}


Function.prototype.mybind3=function (...args) {
     let object=this
     params=args.slice(1);
     return function (...args2) {
        object.apply(args[0],[...params,...args2]);
     }
}

let printMyName2=printname.myBind(name,"siliguri");
printMyName2("WB");

let printMyName3=printMyName.myBind2(name,"kro");
printMyName3("KR")