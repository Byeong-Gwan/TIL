// 생성자 함수
function Person(name) {
    this.name = name;
}

// 정적 메서드
Person.sayHi = function () {
    console.log('Hi!');
};

// 정적 메서드 호출
Person.sayHi(); // Hi!

class Person1 {
    // 생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name;
    }

    // 정적 메서드
    static sayHi() {
        console.log('HI~~');
    }
}

// 정적 메서드는 클래스로 호출한다.
// 정적 메서드는 인스턴스 없이도 호출할 수 있다.
Person1.sayHi(); // HI~~

// 인스턴스 생성
const me = new Person1('Kim');
me.sayHi(); // TypeError: me.sayHi is not a function

