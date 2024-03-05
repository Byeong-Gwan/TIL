function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person('Gim');

// getName 메서드를 호출한 객체는 me이다.
console.log(me.getName()); // 1. Gim

Person.prototype.name = 'Kim';

// getName 메서드를 호출한 객체는 Person.prototype이다.
console.log(Person.prototype.getName()); // 2. Kim