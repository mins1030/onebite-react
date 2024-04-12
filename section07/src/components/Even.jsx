import { useEffect } from "react";

const Even = () => {
  // mount일때 실행되고 unmount일때 종료됨
  useEffect(() => {
    // 클린업, 정리함수
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수입니다</div>;
};
export default Even;
