function returnFalse() {
  console.log("False 함수");
  return false; //undefined도 가능(falsy한 값)
}
function returnTrue() {
  console.log("True 함수");
  return true; //10도 가능(truthy한 값)
}
// 단락 평가
// 첫 번째 피연산자의 값만으로도 이 논리 연산식의 결과를 확정 지을 수 있다면
// 두 번째 피연산자의 값에는 접근조차 하지 않는다
console.log(returnFalse() && returnTrue()); // False 함수 false
console.log(returnTrue() || returnFalse()); // True 함수  true

// 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name: "김민서" }); // 이정환

// T || T  앞의 값 반환
// T && T  뒤의 값 반환
