function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 executor
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10); // PromiseResult
      } else {
        reject("num이 숫자가 아닙니다");
      } // resolve, reject 없으면 fending
    }, 2000);
  });
  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// //promise chaining
// promise //resolve
//   .then((value) => {
//     console.log(value); // 20
//   }) // reject
//   .catch((error) => {
//     console.log(error); // num이 숫자가 아닙니다
//   });

// setTimeout(() => {
//   console.log(promise); // Promise {<fulfilled>: 20}
// }, 3000);
