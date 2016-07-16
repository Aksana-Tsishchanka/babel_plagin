var babel = require('babel-core');
var script = require('./script');

var code = 'console.log(process.env.whatever)';

var out = babel.transform(code, {
    plugins: [script]
});

var result = babel.transformFromAst(out.ast, code);

eval(result.code);





