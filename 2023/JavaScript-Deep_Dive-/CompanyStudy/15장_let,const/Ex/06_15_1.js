let i = 10; // 전역 변수

function foo() { // 함수 레벨 스코프
  let i = 100;

  for (let i = 1; i < 3; i++) { // 블록 레벨 스코프
    console.log(i); // 1 2
  }

  console.log(i); // 100
}

foo();

console.log(i); // 10