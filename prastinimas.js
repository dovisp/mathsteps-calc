const mathsteps = require("./index.js");

const expression = "2x^2 + 32x^2 + 2*x + x + x + 562";
const steps = mathsteps.simplifyExpression(expression);

steps.forEach((step, index) => {
  console.log("Pakeitimas", index + 1, "=", step.changeType);
  console.log(mathsteps.print(step.rootNode));
});
