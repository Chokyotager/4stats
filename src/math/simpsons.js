module.exports = function (f, a, b, strip_ratio=10000, strip_min=10000) {

  var difference = b - a;

  if (difference === 0) {
    return 0;
  };

  // 3/8 Simpsons is in multiples of three
  var strips = Math.ceil(Math.max(strip_ratio * difference, strip_min) / 3) * 3;
  var h = difference / strips;

  var sum = new Number();
  for (var i = 1; i < strips - 1; i++) {

    if (i % 3 === 0) {

      sum += 2 * f(a + (i * h));

    } else {

      sum += 3 * f(a + (i * h));

    };

  };

  sum += f(a) + f(b);

  return ((3 * h) / 8) * sum;

};
