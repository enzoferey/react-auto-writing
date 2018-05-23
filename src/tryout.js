var babel = require("babel-core");

console.log(babel.transform("const x = () => x + 2").ast.tokens);