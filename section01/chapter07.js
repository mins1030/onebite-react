// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
// 우선순위 주의
let num1 = 3 + 2;
let num3 = 3 * 2;
let num5 = 3 % 2;
let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자   (산술+대입)
let num7 = 10;
num7 += 20;
num7 *= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
//후위 연산
num8++; //++를 뒤에 쓰면 이 라인이 끝나고 나서 1추가
console.log(num8); // 11
console.log(num8++); // 11

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not); // true false false

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
let comp3 = 1 == "1"; // ==은 자료형 비교를 안함
let comp4 = 2 < 1;
console.log(comp1, comp2, comp3, comp4); // false true true false
