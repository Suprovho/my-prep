
// by default it is false.

document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("grandparent clicked");
},true); // capturing.

document.querySelector("#parent")
.addEventListener('click',()=>{
    console.log("parent clicked");
},true); // capturing.

document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("child clicked");
},true); // capturing.

//* capturing -> top to bottom.
//* bubbling -> bottom to top.

// try to mixup or alternate to see diff results.