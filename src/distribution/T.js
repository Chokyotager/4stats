var math = require("../math.js");

module.exports = class {

  constructor (df=1, rounding=5) {

    if (df < 2) {
      throw new Error("df = 1 is currently not supported for Student's t-distribution.");
    };

    this.df = df;

    this.rounding = rounding;

  }

  cumulative (x) {

    return 1/2 + x * math.gamma((this.df + 1)/2);

  }

  density (x) {

    var x_1 = math.gamma((this.df + 1)/2);
    var x_2 = Math.sqrt(this.df * Math.PI) * math.gamma(this.df/2);
    var x_3 = Math.pow(1 + Math.pow(x, 2)/this.df, -(this.df + 1)/2);

    return this.round(x_1 / x_2 * x_3);

  }

  probability (x) {

  }

  quantile (F) {

  }

  round (x) {

    var degree = Math.pow(10, this.rounding);
    return Math.round(x * degree) / degree;

  }

}
