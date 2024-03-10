
/**
 * 함수 호출 시 null 값이 들어 가지 않는 이유: 
 *  person 객체는 별도의 객체로 작용하기 때문에 
 * a의 값과는 무관하게 사용된다.
 */

function doSomething (a) {
  a = null;
}

const person = {
  age: 40,
  a: 'hello'
};

doSomething(person);

console.log(person);