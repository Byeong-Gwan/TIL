let foo = 1; // 전역 변수

{
  let foo = 2; // 지역 변수
  let bar = 3; // 지역 변수
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined

/*
  var 키워드에서는 foo의 값은 중복선언으로 인정해서 값이 2가 나오고,
  bar의 값을 console.log(bar) 값이 3이 출력된다.
  이유는 함수 레벨 스코프이기 때문이다.

  let은 블록 레벨 스코프이기 때문에 foo는 기존에 전역 변수의 값인 1이 출력되고,
  bar는 전역 변수로 선언 되어 있지 않고, 지역 변수 내에 선언 되어 있기 때문에
  ReferenceError가 발생한다.
*/