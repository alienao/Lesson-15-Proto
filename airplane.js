// 2.Write an Airplane object that initializes name.
// Give airplanes the ability to .takeOff() and .land():
// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false.

const Airplane = {
  name: "",
  isFlying: false,
  takeOf() {
    return (this.isFlying = true);
  },
  land() {
    return (this.isFlying = false);
  },
};
let obj = {
  __proto__: Airplane,
  isFlying: false,
};
console.log(obj.takeOf());
