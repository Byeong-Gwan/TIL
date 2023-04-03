/**
 * URI의 구성요소를 전달받아 이스케이프 처리를 위해 인코딩한다.
 * @param {string} uriComponent - URI의 구성요소
 * @returns {string} 인코딩된 URI의 구성요소
 */
encodeURIComponent(uriComponent)

/**
 * 인코딩된 URI의 구성요소를 전달받아 이스케이프 처리 이전으로 디코딩한다.
 * @param {string} encodeURIComponent - 인코딩된  URI의 구성요소
 * @returns {string} 디코딩된 URI의 구성요소
 */
decodeURIComponent(encodeURIComponent)

// URI의 쿼리 스트링
const uriComp = 'name=홍길동&길동';

// encodeURIComponent 함수는 인수로 전달받은 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주한다.
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &까지 인코딩한다.
let enc = encodeURIComponent(uriComp);
console.log(enc);
// name=%EC%9D%B$...&%job%3Dprogrammer%25teacher/TIL

let dec = decodeURIComponent(enc);
console.log(dec);
// 홍길동&job=programmer&teacher

// encodeURI 함수는 인수로 전달받은 문자열을 완전한 URI로 간주한다.
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &를 인코딩하지 않는다.
enc = encodeURI(uriComp);
console.log(enc);
// name=%EC%9D%B$...&%job=programmer&teacher/TIL

dec = decodeURI(enc);
console.log(dec);
// name=홍길동&job=programmer&teacher