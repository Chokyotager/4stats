var sign = require("./sign.js");

module.exports = function (x) {

    // Can only approximate this - using Abramowitz and Stegun's approximation
    // https://en.wikipedia.org/wiki/Error_function

    var a = 0.147;

    var x_1 = 2/(Math.PI * a) + (Math.log(1 - Math.pow(x, 2))/2);
    var x_2 = Math.log(1 - Math.pow(x, 2))/a;

    var x_3 = Math.sqrt(Math.pow(x_1, 2) - x_2);

    return sign(x) * Math.sqrt(x_3 - x_1);

};
