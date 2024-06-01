var fullName = "suprovho";

var obj = {
  fullName: "hacked full name",

  prop: {
    fullName: "Inside pop",
    getFullName: function () {
      return this.fullName; // refer to full name inside prop.
    },
  },

  getFullName: function () {
    return this.fullName; // refer to obj full name.
  },

  getFullNameV2: () => this.fullName, // it is referring to global object in browser it will be window where it will try to find  full name which  does not exist here it will show undefined.

  getFullNameV3: (() => {
    return this.fullName; // here it will store undefined as a value of getFullNameV3 because its ifee
  })(),
};

console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameV2());
console.log(obj.getFullNameV3); // its not a function.. its a property.


//! ---------------------------------------------------------------->

const suprovho={
    name:"suprovho",
    sayName:function(){
        console.log(this.name);
    },
};

// const newName=suprovho.sayName.bind(suprovho);

// setTimeout(suprovho.sayName,3000);

// setTimeout(newName,3000);

setTimeout(()=>suprovho.sayName(),3000); // closure


// ans-> undefined as setTimeout will execute differently by that time it will lost the reference of this so to fix this we can use closure or bind.

//! -------------------------------------------->

const obj2 =Object.create({
    height: 30,
});

console.log(obj2.height); // 30

delete obj2.height; // it cant delete anything as inside object there is nothing.

console.log(obj2.height); //30

// if we use Object.create method it act as a prototype.