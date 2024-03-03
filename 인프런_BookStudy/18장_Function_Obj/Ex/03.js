// 18.2 함수 객체의 프로퍼티
function square(number) {
  return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));

/*
  { 
    length: { value: 1, writable: false, enumerable: false, configurable: true },
    name: { value: 'square', writable: false, enumerable: false, configurable: true },
    arguments: { value: null, writable: false, enumerable: false, configurable: false },
    caller: { value: null, writable: false, enumerable: false, configurable: false },
    prototype: { value: square {}, writable: true, enumerable: false, configurable: false } 
  }
*/

// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); // undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
//square 함수는  Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
//{ get: f, set: f, enumerable: false, configurable: true }

/*
  arguments(인수), caller(방문객), length(길이), name(이름), prototype(기본형)프로퍼티는
  모든 함수 객체의 데이터 프로퍼티다.
*/
/*
** 참고 자료 **
    - arguments(인수) : arguments 객체는 모든 함수 내에서 이용 가능한 지역 변수 입니다.
                      arguments 객체를 사용하여 함수 내에서 모든 인수를 참조할 수 있으며,
                      호출할 때 제공한 인수 각각에 대한 항목을 갖고 있습니다.
    
    JavaScript에서 전달된 인수와 매걔변수의 개수는 서로 같지 않아도 된다. 
    매걔변수의 개수보다 인수가 더 적을 경우 넘어오지 않은 값은 undefined로 표시된다.
    매걔변수 개수보다 초과된 인수는 무시된다.

    즉, 함수에 넘어오는 인수가 몇 개이든 상관없기 때문에 함수가 동작하기 전에 인수의 개수를
    확인하여 동작을 다르게 해야 한다. 이를 위해 인수를 저장해놓은 공간이 arguments 이다.

    1. arguments.callee : 현재 실행 중인 함수
    2. arguments.length : 전달된 인수의 개수
    3. arguments[]      : 배열 형식으로 전달된 인수

    단, 화살표 함수에서는 arguments를 정의할 수 없다.
*/