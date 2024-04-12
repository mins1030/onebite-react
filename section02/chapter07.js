// 6가지의 요소 조작 메서드
// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
console.log(newLength); // 7 (배열의 새로운 길이)
console.log(arr1); // [1,2,3,4,5,6,7]
// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
console.log(poppedItem); // 3
console.log(arr2); // [1,2]
// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(arr3); // [2,3]
// 3. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4); // 4  [0,1,2,3]
//shift와 unshift는 push나 pop보다 느리게 동작
// => 맨 앞 요소 사라지면서 인덱스 바뀌기 때문이다
// 5. slice  배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); //두번째 인수는 인덱스 +1
let sliced2 = arr5.slice(2); //맨 끝까지라면 생략 가능
let sliced3 = arr5.slice(-2); //뒤에서부터
console.log(sliced); // [3,4,5]
console.log(sliced2); // [3,4,5]
console.log(sliced3); // [4,5]
// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1,2,3,4]
