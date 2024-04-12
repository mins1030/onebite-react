// math 모듈
export function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
// common.js 모듈 시스템
// module.exports = {
//   add, //add: add,
//   sub, //sub: sub,
// };

// ES 모듈 시스템
export { sub };
// add 함수처럼 앞에 export를 추가해도 가능

export default function multiply(a, b) {
  return a * b;
}
