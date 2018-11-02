function BabyPi() {
}

function Pie(filling) {
  // The function creates a new empty object
  // The new empty object is accessible inside this function
  // It is accessible using `this`
  // That object gets returned at the end of the function.
  // The object's prototype gets set to `Pie.prototype`
  this.crust = "crusty";
  this.filling = filling;
}

Pie.prototype.something = "something";
Pie.prototype.beEaten = function() {
  console.log("it's delicous 😋", this.filling);
}
console.log(Pie.prototype.something);

var strawberryRubarbPumpkinPekan = new Pie("strawberryRubarbPumpkinPekan");
var rubarbPumpkinPekan = new Pie("RubarbPumpkinPekan");
var pumpkinPekan = new Pie("PumpkinPekan");

// console.log(strawberryRubarbPumpkinPekan);
// console.log(strawberryRubarbPumpkinPekan.crust);
// console.log(global);

console.log(strawberryRubarbPumpkinPekan.__proto__ === Pie.prototype);

rubarbPumpkinPekan.beEaten();
pumpkinPekan.beEaten();

class Turtle {
  swim() {
    return "swam 😎";
  }
}

console.log(typeof Turtle)
console.log(Turtle.protomtype)
console.log(Turtle.prototype.swim());
var turt = new Turtle()
console.log(turt.swim());