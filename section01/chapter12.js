function funcA() {
  console.log("funcA");
}
let varA = funcA;
console.log(varA); // 함수 자체를 출력

// 1. 함수 표현식!!
//값을 넣어준 것이지 선언한 것이 아니기 때문에 호출 불가능, 호이스팅 불가능
let varB = function funcB() {
  console.log("funcB");
};

// 2. 화살표 함수
let varC = () => {
  return 1;
};
console.log(varC());

let varD = (value) => value + 1;
let varE = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varD(10)); //11
console.log(varE(10)); //11
