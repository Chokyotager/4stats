var math = require("../math.js");

module.exports = class {

  constructor (mean=0, variance=1, rounding=5) {

    this.mean = mean;
    this.variance = variance;

    this.rounding = rounding;

  }

  cumulative (x) {

    var x_1 = (x - this.mean)/(Math.sqrt(this.variance) * Math.sqrt(2));
    return this.round(1/2 * (1 + math.error(x_1)));

  }

  density (x) {

    return this.round(1/Math.sqrt(2 * Math.PI * this.variance) * Math.pow(Math.E, -Math.pow(x - this.mean, 2)/(2 * this.variance)));

  }

  probability (x) {

    return this.round(1 - this.cumulative(x));

  }

  quantile (F) {

    return this.round(this.mean + Math.sqrt(this.variance) * Math.sqrt(2) * math.inverseError(2 * F - 1));

  }

  round (x) {

    var degree = Math.pow(10, this.rounding);
    return Math.round(x * degree) / degree;

  }

}
