// 의도치 않은 결과 정상 동작
var i = 10;

function test() {
  
  for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
  }
}

test();
console.log("i = " + i); // 5