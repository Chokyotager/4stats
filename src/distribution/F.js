var math = require("../math.js");

module.exports = class {

  constructor (df1=1, df2=1, rounding=5) {

    this.df1 = df1;
    this.df2 = df2;

    this.rounding = rounding;

  }

  cumulative (x) {

    var x_1 = this.df1/2;
    var x_2 = this.df2/2;

    var x_3 = (this.df1 * x)/(this.df1 * x + this.df2);

    return this.round(math.beta(x_1, x_2, x_3));

  }

  density (x) {

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
