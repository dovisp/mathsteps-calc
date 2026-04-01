const mathsteps = require("./index.js");

const leftNode = "2x+3x";
const rightNode = "35";

const equation = mathsteps.solveEquation({
  leftNode,
  rightNode,
  comparator: "=",
  unknownVariable: "x",
});

console.log(equation.toString());
