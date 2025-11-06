require("./xyz");
// import "./xyz.js";
// import {sum, multiply} from "./module/index.js";

var a = 10;
var b = 20;

// console.log(a+b);
const {sum, multiply} = require("./module");

sum(a,b);
multiply(a,b);


console.log("Hello, World");
