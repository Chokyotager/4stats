var randomRange = require("./randomRange.js");

module.exports = function (f, a, b, sample_size_ratio=1000) {

  var value = new Number();
  var difference = b - a;
  var sample_size = Math.ceil(sample_size_ratio * difference);

  for (var i = 0; i < sample_size; i++) {

    var random = randomRange(a, b);
    value += f(random);

  };

  return value / sample_size * (b - a);

};
