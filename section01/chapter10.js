// for 초기식 조건식 증감식
for (let idx = 1; idx < 10; idx++) {
  if (idx % 2 === 0) {
    continue; //그 아래 실행하지 않고 다음 회차로 넘어감
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
