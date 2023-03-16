var x = 'glibal';

function foo() {
  var x = 'local';
  console.log(x);
}

foo(); // foo 함수 스코프
console.log(x); // 전역 스코프