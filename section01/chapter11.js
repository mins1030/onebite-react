// 함수 호출
let area1 = getArea(10, 20);
console.log(area1);
// 함수 정의를 호출보다 아래에 있어도 됌
// => 호이스팅(내부적으로 알아서 끌어올림)
function getArea(width, height) {
  function another() {
    console.log("another");
  }
  another();
  let area = width * height;
  return area;
}
