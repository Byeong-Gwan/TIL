const person = {
  name: 'Gim',
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
    return this.name;
  }
};

// 메서드 getName을 호출한 객체는 person이다.
console.log(person.getName()); // Gim

/* 
  person 샛체의 getName 프로퍼티가 가리키는 함수 객체는 person 객체에 포함된 것이 아니라 
  독립적으로 존재하는 별도의 객체다.
  getName 프로퍼티가 함수 객체를 가리키고 있을 뿐이다. 

  getName 메서드는 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메서드가 될 수도 있고
  일반 변수에 할당항 일반 함수로 호출될 수도 있다.
*/