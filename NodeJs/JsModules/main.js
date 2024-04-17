//If the type in the package.json is module we have to use the syntax below to import an module this the mordern ES6 syntax


import {PI} from "./ES6module.js";
import area from "./ES6module.js";

console.log(PI);
console.log(area(10));

//If the type in the package.json is commonjs or by default we have to use the syntax below to import an module this the mordern ES6 syntax


// const a = require("./CommonJsModules");
// console.log(a.PI);
// console.log(a.area(10));