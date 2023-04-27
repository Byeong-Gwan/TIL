class Person1 {
    constructor() {
        // 고정값으로 인스터스 초기화
        this.name = 'Kim';
        this.address = "Ansan";
    }
}

// 인스턴스 프로퍼티가 추가된다.
const me = new Person1();
console.log(me); // Person1 { name: 'Kim', address: 'Ansan' }

class Person2 {
    constructor(name, address) {
        // 인수로 인스턴스 초기화
        this.name = name;
        this.address = address;
    }
}

// 인수로 초기값을 전달한다. 초기값은 constructor에 전달된다.
const me2 = new Person2('Kim', 'AnSan');
console.log(me2); // Person2 { name: 'Kim', address: 'AnSan' }