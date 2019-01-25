var fs = require("fs");

var directory = __dirname + "/math/";
var files = fs.readdirSync(directory);

var ret = new Object();

for (var i = 0; i < files.length; i++) {

  if (files[i].endsWith(".js")) {
    var key = files[i].substring(0, files[i].length - 3);
    ret[key] = require(directory + files[i]);
  };

};

module.exports = ret;
