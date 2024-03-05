/**
 * 인코딩된 URI를 전달 받아 이스케이프 처리 이전으로 디코딩한다.
 * @param {string} encodeURI - 인코딩된 URI
 * @returns {string} 디코딩된 URI
 */
decodeURI(encodeURI)

const uri = "https://github.com/홍길동&길동/TIL";

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);
// https://github.com/name=%EC%9D%B$...&%job=programmer&teacher/TIL


// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);
// https://github.com/name=홍길동&job=programmer&teacher/TIL