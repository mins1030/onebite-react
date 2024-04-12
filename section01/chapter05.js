// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; //NAN아님에 주의!!!

// 2. String Type
let myName = "이정한";
let myLocation = "목동";
let introduce = myName + myLocation;

// 템플릿 리터럴 문법
//Backtick은 변수의 값을 동적으로 문자에 포함시킬 수 있다.
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null; //개발자가 직접 명시적으로 값을 할당해줘야 함
console.log(empty); //null

// 5. Undefined Type
let none; //초기화하지 못했을 때
console.log(none); //undefined
