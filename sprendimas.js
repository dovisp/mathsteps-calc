
const pathmath = require('./index.js');
const steps = pathmath.solveEquation('2x + 3x = 35');

steps.forEach(step => {
    console.log("Pries pasikeitima: " + step.oldEquation.ascii());  // e.g. before change: 2x + 3x = = 35
    console.log("Po pasikeitimo: " + step.newEquation.ascii());   // e.g. after change: 5x = 35
    console.log('\n')
});