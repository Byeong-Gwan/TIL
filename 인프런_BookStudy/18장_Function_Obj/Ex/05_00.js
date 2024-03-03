/*
  arguments 객체의 Symbol(Symbol.iterator) 프로퍼트는 arguments 객체를 순회 가능한 자료구조인 
  이터러블(iterable)로 만들기 위한 프로퍼티다.
  Symbol.iterator를 프로퍼티 키로 사용한 메서드를 구현하는 것에 의해 이터러블이 된다.
*/
function multiply(x, y) {
  // 이터레이터
  const iterator = arguments[Symbol.iterator]();

  // 이터레이터의 next 메서드를 호출하여 이터러블 객체 arguments를 순회
  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: 3, done: false }
  console.log(iterator.next()); // { value: undefined, done: true }

  return x * y;
}

multiply(1, 2, 3);

/*
  선언된 매개변수의 개수, 함수를 호출할 때 전달하는 인수의 개수를 확인하지 않는 자바스크립트의 특성
  이러한 특성 때문에 인수 개수 확인하여 함수의 동작을 달리 정의할 필요가 있을 경우 
  arguments 객체 사용이 유용하게 적용된다.

  즉, arguments 객체는 매개변수 개수를 확정할 수 없는 '가변 인자 함수'를 구현할 때 유용
*/