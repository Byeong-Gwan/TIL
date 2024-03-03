/*
  참고 : 기명 함수 , 익명 함수 

  익명 함수는 '호이스팅에 영향을 받지 않는다'는 특징을 가진다.
  함수 선언 전에 먼저 함수를 호출하게 되면, 호이스팅이 안된거처럼 보이지만,
  실제로는 호이스팅이 이루어진다. 다만 'undefined'로 초기화되어 있기 때문에
  함수 선언 이전에 예상치 못하게 호출 되는 것을 방지할 수 있다.

  반면 기명 함수는 '호이스팅에 영향을 받는다' 함수 선언부가 끌어올려져서
  실제 함수 선언 위치 보다 이전에 함수를 호출하여도 문제가 생기지 않는다.
  함수 선언 및 호출 방식에 유연성을 부여할 수 있지만,
  의도치 않은 함수 호출이 발생할 수 있다.

  기명 함수 : 코드 재사용 가능성 여부, 분명한 목적으로 정의가 필요한 함수인 경우
  익명 함수 : 코드 재사용  가능성 없는 경우, 즉시 실행 함수(IIFE), 콜백 함수, 클로저 생성을 위한 목적
*/

// 기명 함수 표현식
var namedFunc = function foo() { };
console.log(namedFunc.name); // foo

// 익명 함수 표현식
var anonymousFunc = function () { };
// ES5 : name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6 : name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.

console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문(Function declaration)
function bar() { }
console.log(bar.name); // bar
