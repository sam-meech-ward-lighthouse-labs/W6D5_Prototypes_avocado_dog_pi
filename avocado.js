var avocado = {
  daysOld: 0,
  isRipe() {
    if (this.daysOld === 3) {
      return "Eat it";
    }
    if (this.daysOld < 3) {
      return "not yet, too hard";
    }
    return "Gross";
  },
  countryOfOrigin: "mexico"
};

console.log(avocado.daysOld);
console.log(avocado.isRipe());

var pickle = {
  type: "dill",
  brand: "Crunchy"
};

var octocat = {
  tentacles: 5,
  code() {
    return "🦑";
  }
};

Object.setPrototypeOf(octocat, avocado);
 
console.log(octocat.code());
console.log("octocat", octocat.isRipe());
console.log(octocat.countryOfOrigin);

var obj = {};

// [[Prototype]]
console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString());
console.log(Object.getOwnPropertyNames(Object.prototype));


Object.prototype.nebrasaka = function() {
  console.log("makes you cold and missarabvle");
}

String.prototype.nebrasaka = function() {
  console.log("String");
}

obj.nebrasaka = function() {
  console.log("Hi");
}

obj.nebrasaka();
"hi".nebrasaka();
(1).nebrasaka();
[].nebrasaka();
true.nebrasaka();

// setInterval(() => {
//   avocado.daysOld++;
//   console.log(avocado.isRipe());
// }, 1000);

