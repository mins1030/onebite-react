// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two] = arr;
let [one2, two2, three2, four2] = arr;
let [one3, two3, three3, four3 = 4] = arr;

console.log(one, two); //  1 2
console.log(one2, two2, three2, four2); // 1 2 3 undefined
console.log(one3, two3, three3, four3); // 1 2 3 4
// 2. 객체의 구조 분해 할당
let person = { name: "김민서", age: 25, hobby: "운동" };
let person3 = { name3: "김민서", age3: 25, hobby3: "운동" };

let { name, age, hobby } = person; // 중괄호 주의
let { name2, age2, hobby2, extra2 } = person;
let { name3, age3: myAge, hobby3, extra3 = "hello" } = person3;
console.log(name, age, hobby); //김민서 25 운동
console.log(name3, myAge, hobby3, extra3); //김민서 25 운동 hello
// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name3, age3, hobby3, extra3 }) => {
  console.log(name3, age3, hobby3, extra3);
  // 김민서 25 운동 undefined
};

func(person3);
