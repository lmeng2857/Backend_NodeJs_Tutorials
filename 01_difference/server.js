// How NodeJS differs from Vanilla JS
// 1) Node runs on a server (backend) - not in a browser (frontend)
// 2) The console is the terminal window
//  - to enter: type "node"
//  - to exit: type "^ c"
console.log("Hello World");
//  - to run this file: node fileNameWithoutExtention
// 3) there is a global object instead of window object
//  - window object: referred to the browser where we could do window....
//      for example: console.log(window.innerHeight)
//  - global object: it's much smaller.
//console.log(global);
//          global is the keyword of global object
// 4) NodeJs has Common modules that we will explore
// 5) CommonJS modules (use require()) instead of ES6 modules (import).
const os = require("os");
const path = require("path");

// const math = require("./math");
// console.log(math.add(3, 8));

const { add, subtract, multiply, divide } = require("./math");
console.log(subtract(9, 1));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log("----------------------");

// console.log(__dirname);
// console.log(__filename);
// console.log("----------------------");

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log("----------------------");

// 6) Missing some JS APIs like fetch
