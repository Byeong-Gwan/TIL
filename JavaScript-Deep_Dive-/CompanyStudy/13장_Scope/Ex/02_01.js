// 정상 동작 수정 
var var1 = 1;

if (true) {
  var var2 = 2;
  if (true) {
    var var3 = 3;
  }
}

function foo() {
  var var4 = 4;

  function bar() {
    var var5 = 5;
    console.log(var5);
  }
  console.log(var4);
  bar(); // 함수 내에 있는 함수를 호출출
}

console.log(var1);
console.log(var2);
console.log(var3);
foo(); // 4, 5