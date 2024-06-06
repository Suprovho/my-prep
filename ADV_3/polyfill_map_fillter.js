
//* map

Array.prototype.Mymap=function(cb){
    let temp=[]
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i],i,this));

    }
    return temp;
}

const nums=[1,2,3,4];

const multiply=nums.Mymap((num)=>{
    return num*3;
})

console.log(multiply);

//* filter 

Array.prototype.myFillter=function(cb){
    let temp=[];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this))temp.push(this[i]);
    }

    return temp;
}

const nums2=[1,2,3,4];

const moreThanTwo=nums2.myFillter((num)=>{
  return num > 2;
})

console.log(moreThanTwo);