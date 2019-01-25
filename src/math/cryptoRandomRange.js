var cryptoRandom = require("./cryptoRandom.js");

module.exports = function (a, b) {

  return cryptoRandom() * (b - a) + a;

};
