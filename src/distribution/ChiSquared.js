var math = require("../math.js");

module.exports = class {

  constructor (df=1, rounding=5) {

    this.df = df;

    this.rounding = rounding;

  }

  cumulative (x) {

    var x_1 = 1/math.gamma(this.df/2);
    var x_2 = math.gamma(this.df/2, x/2);

    return this.round(x_1 * x_2);

  }

  density (x) {

    var x_1 = 1/(Math.pow(2, this.df/2) * math.gamma(this.df/2));
    var x_2 = Math.pow(x, this.df/2 - 1);
    var x_3 = Math.pow(Math.E, -x/2);

    return this.round(x_1 * x_2 * x_3);

  }

  probability (x) {

    return this.round(1 - this.cumulative(x));

  }

  quantile (F) {

  }

  round (x) {

    var degree = Math.pow(10, this.rounding);
    return Math.round(x * degree) / degree;

  }

}
