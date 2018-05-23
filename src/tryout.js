var babel = require("babel-core");
var replace = require("./my-custom-plugin.js");

console.log(babel.transform("abc === def", {plugins: [replace]}).code);