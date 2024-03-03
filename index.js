// 강의 예제
console.log("\u001b[34mHello \u001b[0mWorld");
console.log({ name: "홍길동", age: 20, married: false });
console.log(1);
console.log(true);
console.log("Hellow world");
console.log("확인");
console.info("로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능");
console.info("로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능");
console.warn("경고 - 문제가 될 수 있는 부분");
console.error("오류 - 에러 발생 상황");
console.log(this);
/*
자바스크립트의 기능 ❌ - 환경의 기능 - 👇 맨 아래에 추가설명
브라우저: 🔗 Web API의 기능 중 하나
Node.js: 🔗 디버깅을 위한 모듈 - 브라우저의 콘솔과 유사하게 동작

MDN 문서에서 JS console에 대한 설명은
The console object provides access to the browser’s debugging console. 
The specifics of how it works varies from browser to browser, 
but there is de facto set of features that are typically privided.

해석 => 콘솔 객체는 브라우저 디버깅 콘솔로의 접근을 제공한다. 
        동작 원리는 브라우저마다 다르지만, 사실상 전형적으로 제공되는 특징은 존재한다.

Node.js에서는 
The console module provides a simple debugging console that is similar to the JavsScript console mechanism provided by web browsers.

해석 => console 모듈은 웹 브라우저에 의해 제공되는 JS console 메커니즘과 유사하며 간단한 디버깅 콘솔을 제공한다.

정리
console은 JS 엔진 별로 detail한 기능은 조금씩 다르지만 디버깅을 위해 존재하는 객체라고 할 수 있다. 
개인적으로 console은 데이터 출력 기능만 담당하고 있는줄 알고 있었다.
출력 기능은 디버깅을 위한 여러 기능 중 일부일 뿐이었다.

* console.log("글자색을 바꾸기 위해 사용")
 ㄴex) console.log("\u001b[34mHello \u001b[0mWorld");
 0 : 원래대로 되돌림
1 : 진하게
3 : 기울게
30 : 검정색
31 : 빨간색
32 : 초록색
33 : 노란색
34 : 파란색
35 : 심홍색
36 : 청록색
37 : 흰색
38 : 색을 RGB로 직접 지정할 수 있다. ESC[38;2;R;G;Bm
ESC 입력은 Unicode escpae sequence혹은 Hexadecimal escape sequence를 이용해야 한다.

ESC는 유니코드에서 27번이므로 \u001b를 \x1b 입력하면 된다.


JavaScript runtime environment 이란?
자바스크립트 코드를 실행할 수 있는 소프트웨어
  - 컴퓨터가 회사라면, 자바스크립트란 언어를 구사하는 직원
  - 대표적으로 브라우저와 Node.js 등이 있음
  - 콘솔 등은 자바스크립트 런타임 환경의 기능
  (https://www.yalco.kr/@javascript/1-1/ 참고)
*/
console.log("==================================================");
// MDN console 관련 예제
var car = "Dodge Charger";
var someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is: ", someObject);
for (var i = 0; i < 5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
}
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px"
);
