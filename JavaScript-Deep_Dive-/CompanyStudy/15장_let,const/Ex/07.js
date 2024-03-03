console.log(foo); // ReferenceError: foo is not defined
let foo;

/* 
  var 키워드는 선언 단계에서 스코프(실행 컨텍스트의 렉시컬 환경(Lexical Environment))에 
  변수 식별자를 등록해 변수의 존재를 알린다. === 선언단계와 초기화 단계가 한번에 진행

  var 키워드를 사용했을 때 에러 없이 undefined의 값이 출력 되었다.
*/ 