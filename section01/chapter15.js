// 1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴
// 2. 객체 프로퍼티 (객체 속성)  key : value
// 띄어쓰기 있는 key는 ""로 감싸주기
let person = {
  name: "김민서",
  age: 25,
  hobby: "운동",
  10: 20,
  "like cat": true,
};
// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
// 존재하지 않는 값 호출 시 undefined 반환
let name = person.name;
console.log(name); //타입스크립트 기능 우린 무시하자
let age = person["age"]; //""해야 함
console.log(age);
//문자열이기 때문에 동적으로 가져올 수 있다.
let property = "hobby";
let hobby = person[property];
console.log(hobby);
// 3.2 새로운 프로퍼티를 추가하는 방법 = 수정하는 방법
person.job = "Computer Engineer";
person["favoriteFood"] = "마라엽떡";
console.log(person);
// 3.3 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
// 3.4 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; //true
let result2 = "cat" in person; //false
