const a = function () {
  console.log(this);
  const b = {
    func1: function () {
      console.log(this);
    },
  };
  const c = {
    func2: () => {
      console.log(this);
    },
  };
  b.func1();
  c.func2();
};
a();

//Since we are using the arrow function inside func2, this keyword refers to the global object.

const b = {
  name: "Vivek",
  f: function () {
    var self = this;
    console.log(this.name);
    (function () {
      console.log(this.name);
      console.log(self.name);
    })();
  },
};
b.f();

// Only in the IIFE inside the function f, this keyword refers to the global/window
// object.

(function (a) {
  return (function () {
    console.log(a);
    a = 23;
  })();
})(45);

//Even though a is defined in the outer function, due to closure the inner functions have access to it.


