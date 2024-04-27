
// polyfill for bind

// polyfill is like browser fallback ..
// what if browser doesn't support bind.

// own bind function.


let name={
    firstName:"suprovho",
    lastName:"sd"
}

let printname=function (hometown,state) {
    console.log(this.firstName+" "+this.lastName+" , "+hometown+" , "+state);
}

let printMyName=printname.bind(name,"siliguri");
printMyName("WB");

Function.prototype.myBind=function(...args){
   let obj=this // this point to the printname function.
   params=args.slice(1); // separate the obj from args.
   return function(...args2){
      obj.apply(args[0],[...params,...args2]);
   }

}

let printMyName2=printname.myBind(name,"siliguri");
printMyName2("WB");