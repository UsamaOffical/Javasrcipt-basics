const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
//   myObject.greet(); // Greetings from Madrid
// console.log;(myObject.toString())

console.log(x === undefined); // true
var x = 3;
let b = 33
function name() {
  console.log(x); // undefined
  var x = "local value";
}
name()