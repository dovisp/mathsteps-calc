# Mathsteps - A step by step solver for math

# WIP porting to make it work on a esp32...

lots of funi things will be made here..

## Requirements

Mathsteps requires Node version > 6.0.0

## Usage

No npm package here...

```js
const mathsteps = require("mathsteps");

const steps = mathsteps.simplifyExpression("2x + 2x + x + x");

steps.forEach((step) => {
  console.log("before change: " + step.oldNode.toString()); // before change: 2 x + 2 x + x + x
  console.log("change: " + step.changeType); // change: ADD_POLYNOMIAL_TERMS
  console.log("after change: " + step.newNode.toString()); // after change: 6 x
  console.log("# of substeps: " + step.substeps.length); // # of substeps: 3
});
```

To solve an equation:

```js
const result = mathsteps.solveEquation({
  equationAsText: "2x + 3x = 35",
  unknownVariable: "x",
  onStepCb: function (step) {
    console.log(
      `[ ${step.equation.getId()} ] ${step.stepId} | ${step.equation}`,
    );
  },
});
```

(if you're using mathsteps v0.1.6 or lower, use `.print()` instead of `.ascii()`)

To see all the change types:

```js
const changes = mathsteps.ChangeTypes;
```

## Contributing

Hi! If you're interested in working on this, that would be super awesome!
Learn more here: [CONTRIBUTING.md](CONTRIBUTING.md).

## Build

First clone the project from github:

    git clone https://github.com/dovisp/mathsteps-calc.git
    cd mathsteps

Install the project dependencies:

    npm ci

## Test

To execute tests for the library, install the project dependencies once:

    npm ci

Then, the tests can be executed:

    npm test
