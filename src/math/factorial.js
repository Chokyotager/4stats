module.exports = function factorial (value) {

  if (value % 1 !== 0) {
    throw new Error("Factorial value should be an integer.");
  };

  if (value <= 1) {

    return 1;

  } else {

    return factorial(value - 1) * value;

  };

};
