function sum() {
  /*
    ES5에서 arguments를 배열로 호출하게 되면, 에러가 발생한다.
    배열로 호출하기 위해서는 'Function.prototype.call', 'Function.prototype.apply'를 사용해서
    간접 호출해야 하는 번거로움이 있다.
  */
  
  // arguments 객체를 배열로 변환
  const array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2)); //3
console.log(sum(1, 2, 3, 4, 5)); // 15