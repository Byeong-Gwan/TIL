class Person1 {
    constructor(name) {
        this.name = name;

        // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
        return {};
    };
};

// constructor에서 명시적으로 반환한 빈 객체가 반환된다.
const me1 = new Person1('Kim');
console.log(me1); // {}

// 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.

class Person2 {
    constructor(name) {
        this.name = name;

        // 면시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
        return 100;
    };
};

const me2 = new Person2('Kim');
console.log(me2); // Person2 { name: 'Kim' }