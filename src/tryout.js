var babel = require("babel-core");
var replace = require("./my-custom-plugin.js");
var visitJSX = require("./remove-node-with-field-plugin.js");
var realCode = require("./code.js");

console.log(babel.transform("abc === def", {plugins: [replace]}).code);
console.log(babel.transform('<div><Habak /><Habak data-cy="to-be-removed"/></div>', {presets: ["es2015", "react"], plugins: [[visitJSX, { "regexp": "data-*" }]]}).code);
console.log(babel.transform(realCode, {presets: ["es2015", "react"], plugins: [[visitJSX, { "regexp": "data-*" }]]}).code);