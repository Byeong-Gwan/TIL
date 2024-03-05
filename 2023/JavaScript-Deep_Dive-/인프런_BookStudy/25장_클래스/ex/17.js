class Person {
    // constructor는 생략하면 아래와 같이 빈 constructor가 암묵적으로 정의된다.
    constructor() {}
}

// 빈 객체가 생성된다.
const me = new Person();
console.log(me); // Person {}