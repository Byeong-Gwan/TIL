// 전역 스코프와 지역 스코프 범위 구분 
var x = "global x";
var y = "global y";

function outer() {
  var z = "outer's local z";

  console.log(x);
  console.log(y);
  console.log(z);

  function inner() {
    var x = "inner's local x";

    console.log(x);
    console.log(y);
    console.log(z);
  }

  inner();
}

outer();

console.log(x);
console.log(y);