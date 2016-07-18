var babel = require('babel-core');
var script = require('./script');

var code = `console.log(process.env.whatever); 
            process.env.whatever=1; 
            var a = process.env.whatever
            var b = {}; b[process.env.whatever] = 'test';
            var c = process.env['whatever'];
            `;


var out = babel.transform(code, {
    plugins: [script]
});

var result = babel.transformFromAst(out.ast, code);

console.log(result.code);





