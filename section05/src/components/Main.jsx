import "./Main.css";
// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다  (if문 , 반복문 불가)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다 (true , undefined, null 불가)
// 3. 모든 태그는 닫혀있어야 한다. (img태그도 닫혀야 함)
// 4. 최상위 태그는 반드시 하나여야만 한다. (main태그와 같이 하나만 또는 빈태그는 최상위 태그 아님)
const Main = () => {
  const user = {
    name: "김민서",
    isLogin: true,
  };
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  //return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};
export default Main;
