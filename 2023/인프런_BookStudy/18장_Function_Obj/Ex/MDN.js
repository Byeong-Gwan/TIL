/*
  함수를 다른 병수와 동일하게 다루는 언어는 일급 함수를 가졌다고 표현합니다.
  예를 들어, 일급 함수를 가진 언어에서는 함수를 다른 함수에 인수로 제공하거나,
  함수가 함수를 반환할 수 있으며, 변수에도 할당할 수 있습니다.
*/

// 변수에 함수 할당
const foo = function () {
  console.log("foobar");
}

// // 변수를 사용해 호출
foo();
// // 익명함수를 변수에 할당한 다음, 그 변수를 사용하여 끝에 괄호 ()를 추가하여 함수를 호출

// 함수를 인자로 전달
function sayHello() {
  return "Hello, ";
}

function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}

// `sayHello`를 `greeting` 함수에 인자로 전달
greeting(sayHello, "JavaScript");
/*
  sayhello() 함수를 greeting() 함수의 인자로 전달, 이것이 함수를 어떻게 변수처럼 다루는지 보여주는 예시
*/

// 함수 반환
function sayHello() {
  return function () {
    console.log("Hello!");
  }
}
/*
  함수가 함수를 반환하는 예제. JavaScript에서는 함수를 변수처럼 취급하기 때문에
  함수를 반환할 수 있습니다.
*/

// sayHello 함수를 호출했을 때 반환하는 익명함수를 호출하려면 두 가지 방법

// 1- 변수 사용
const sayHello = function () {
  return function () {
    console.log("Hello!");
  }
}
const myFunc = sayHello();
myFunc();

// 2- 이중 괄호 사용
function sayHello() {
  return function () {
    console.log("Hello!");
  }
}
sayHello()();
