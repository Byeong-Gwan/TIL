/*
  Symbol(심볼)이라는 새로원 원시 타입 도입 (ECMAScrip2015)
  Symbol은 고유하고 변경할 수 없는 식별자를 생성하며, 한 번 생성하면 복사할 수 없음

  Symbol의 사용 목적은 객체의 고유한 프로퍼티 키를 만들기 위해 사용
*/
let symbolWithDesc = Symbol("ungmo2");

console.log(symbolWithDesc); // Symbol(ungmo2)
console.log(symbolWithDesc === Symbol("ungmo2")); // false

//Symbol()은 함수로 생성 가능
const name = Symbol("Description");
const ts = Symbol();
// Symbol('Description') 과 같이 '인자'를 전달할 수 있는데,
// 인자는 디버깅 목적으로 Symbol에 대해 설명 해주는 역할일 뿐 특별한 의미는 없음
console.log(name);
console.log(ts);
console.log("Symbol(Description) = " === name, "Symbol() = " === ts);

// Symbol은 내장 객체와 비슷하지만 생성자가 없으며 new 연산자를 사용해서 생성 불가
// const error = new Symbol();

// Symbol.for() 함수로도 선언 가능
let t1 = Symbol.for('main');
let t2 = Symbol.for('main');

console.log(t1 === t2); // true
/*
  생성된 Symbol 객체는 Global Symbol Registry(전역 심볼 레지스트리)에 저장
  Symbol은 Iframe 내브에 생성된 Symbol을 의미.
*/
