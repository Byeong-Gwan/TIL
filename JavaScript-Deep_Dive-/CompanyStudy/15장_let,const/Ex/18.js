// 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const Tax_RATE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * Tax_RATE);

console.log(afterTaxPrice); // 110

/*
  세율은 변경되지 않기 때문에 상수로 값을 선언해 두면, 
  코드의 가독성이 높아지고 유지보수할 때 세율의 변동되는 값으로 변경만 되면 된다.
  고정될 값 즉, 상수인 값은 const로 선언하여 사용하면 좋다.
*/