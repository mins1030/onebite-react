// 1. 콜백 함수
function main(value) {
  value(); // I am sub
}
// function sub() {
//   console.log("I am sub");
// }
// main(sub);
main(() => {
  console.log("I am sub");
});
// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});
