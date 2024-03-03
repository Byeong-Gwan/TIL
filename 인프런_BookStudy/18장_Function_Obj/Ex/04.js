function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multiply());
console.log(multiply(1));
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));