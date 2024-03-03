function sum() {
  let res = 0;

  // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다.
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum());       // 0
console.log(sum(1, 2));   // 3
console.log(sum(1, 2, 3));// 6

/*
  arguments 객체는 배열 형태로 인자 정보를 담고 있지만 
  실제 배열이 아닌 유사 배열 객체(array-like Object)다.
  
  유사 배열 객체란 length 프로퍼티를 가진 객체로 for 문으로
  순회할 수 있는 객체를 말한다.
*/