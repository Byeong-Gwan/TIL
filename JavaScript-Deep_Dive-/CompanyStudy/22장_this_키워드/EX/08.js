function foo() {
  ("use strict");

  console.log("foo's this : ", this);  // undefined
  function bar() {
    console.log("br's this : ", this); // undefined
  }
  bar();
}
foo();