var simpsons = require("./simpsons.js");

module.exports = function (z, upper_limit=30) {

  // Approximated
  return simpsons(integral, 0, upper_limit);

  function integral (x) {

    return Math.pow(x, z - 1) * Math.pow(Math.E, -x);

  };

};
