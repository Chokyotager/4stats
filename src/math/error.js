var simpsons = require("./simpsons.js");

module.exports = function (x) {

  if (x > 0) {
    return 2/Math.sqrt(Math.PI) * simpsons(integral, 0, x);
  } else {
    return -2/Math.sqrt(Math.PI) * simpsons(integral, x, 0);
  };

};

function integral (t) {

  return Math.pow(Math.E, -Math.pow(t, 2));

};
