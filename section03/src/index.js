// common.js 모듈 시스템
// const moduleData = require("./math");
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));
// const { add, sub } = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

//ES 모듈 시스템
import mul, { add, sub } from "./math.js"; // 확장자까지 명시해야 함
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
