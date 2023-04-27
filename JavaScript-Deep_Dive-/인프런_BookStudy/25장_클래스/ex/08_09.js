class Person { }

// 인스턴스 생성
const me1 = new Person();
console.log(me1); // Person {}

class Persom { }

// 클래스를 new 연산자 없이 호출하면 타입 에러가 발생한다.
const me2 = Persom();
// TypeError: Class constructor Persom cannot be invoked without 'new'