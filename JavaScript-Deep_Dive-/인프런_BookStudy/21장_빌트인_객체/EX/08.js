/*
  ECMAScript2020(ES11)에서 도입된 globalThis는 브라우저 환경과 Node.js 환경에서 전역 객체를 가리키던
  다양한 식별자를 통일한 식별자다. 

  globalThis는 표준 사양이므로 ECMAScript 표준 사양을 준수하는 모든 환경에서 사용할 수 있다.
*/

// 브라우저 환경
globalThis === this;
globalThis === window;
globalThis === self;
globalThis === frames;

// Node.js 환경(12.0.0 이상)
globalThis === this;
globalThis === global;