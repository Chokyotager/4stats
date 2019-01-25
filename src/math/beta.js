var simpsons = require("./simpsons.js");

module.exports = function (a, b, x=1) {

  return simpsons(integral, 0, x);

  function integral (t) {

    return Math.pow(t, a - 1) * Math.pow(1 - t, b - 1);

  };

};
