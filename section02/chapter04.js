// 1. Spread 연산자
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

console.log(arr2); // 4 1 2 3 5 6

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 1,
  d: 2,
};
console.log(obj2); //{a: 1, b: 2, c: 1, d: 2}

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1); // 1 2 3
// 2. Rest 매개변수 뒤에는 추가적인 매개변수 넣은 수 없다.
// -> Rest는 나머지, 나머지 매개변수  //Rest가 마지막

function funcB(one, ...rest) {
  //...rest대신에 ...args ...ds 아무거나 사용가능
  console.log(rest);
}
funcB(...arr1); //[2, 3]
