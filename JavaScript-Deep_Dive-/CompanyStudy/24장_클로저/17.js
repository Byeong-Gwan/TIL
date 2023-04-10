function Person(name, age) {
  this.name = name; // public
  let _age = age; // private
}

// 인스턴스 메서드
this.prototype.sayHi = function () {
  // Person 생성자 함수의 지역 변수 _age를 참조할 수 없다.
  console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
};