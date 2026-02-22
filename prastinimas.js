const pathmath = require('./index.js');
const steps = pathmath.simplifyExpression('2x + 2x + x + x');

steps.forEach(step => {
    console.log("Pries pasikeitima: " + step.oldNode.toString());  // e.g. before change: 2x + 3x = = 35
    console.log("Po pasikeitimo: " + step.newNode.toString());   // e.g. after change: 5x = 35
    console.log('\n')
});