class Square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // 프로토 타입  메서드
    area() {
        return this.width * this.height;
    }
}

const square = new Square(10, 10);
console.log(square.area()); // 100

// 표준 빌트인 객체의 정적 메서드
Math.max(1, 2, 3);          // -> 3
Number.isNaN(NaN);          // -> true
JSON.stringify({ a: 1 });   // {"a" : 1}
Object.is({}, {});          // false
Reflect.has({ a: 1 }, 'a'); // -> true