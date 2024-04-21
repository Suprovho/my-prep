  //About this Method
 //.this this refers to the current context in within the scope

 
 
 const user={
    userName:"",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName},welcome to my website`);
    }
 }

 user.userName="Tashu";
 user.welcomeMessage();

 //*welcomeMessage method of the user object, it doesn't work well with this. It doesn't understand this the same way regular functions do. So, when you try to access this.userName, it doesn't refer to the userName property inside the user object. Instead, it looks for userName in the global scope, which is not defined, hence it prints undefined.

 //!problem->
//  welcomeMessage:()=>{
//     console.log(`${this.userName},welcome to my website`);
// }

//*fix->
//  welcomeMessage:function(){
//     console.log(`${this.userName},welcome to my website`);
// }

function hello() {
    let userName="vic"
     console.log(this.userName);//*also, remember that .this method is used inside the object.... so, in this acs it returns "Undefined"
    }
    hello();

const user4=function(){
    console.log("anonymous function");
}

//!IMPLICIT RETURN->

const arrow2=(n1,n2)=> console.log(n1+n2);
arrow2(1,2); //returns an output // 3 ...implicitly
// Always remember that once we use curly braces then we need to use return statement mandatory

const arrow3=(n1,n2)=>console.log(n1+n2);
arrow3(4,4);


//!EXPLICIT RETURN->

const arrow4=(n1,n2)=>{
    return console.log(n1*n2);
}

arrow4(6,6);

//!Dealing with object implicitly->

const obj=(e)=>({name:`my name is ${e}`});

console.log(obj(`suprovho`));
