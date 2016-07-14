// var babel = require('babel-core');
// var script = require('./script');

// var code = 'if (process.env.NODE_ENV) {
// 	console.log(process.env.NODE_ENV)
// }';

// var out = babel.transform(code, {
//     plugins: [script]
// });
// console.log(out);

import * as babylon from "babylon";

const code = `function square(n) {
  return n * n;
}`;

babylon.parse(code);





