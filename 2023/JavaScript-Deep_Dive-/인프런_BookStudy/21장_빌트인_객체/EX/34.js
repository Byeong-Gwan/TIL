/**
 * 완전한 URI를 문자로 전달받아 이스케이프 처리를 위해 인코딩한다.
 * @param {string} uri - 완전한 URI
 * @returns {string} 인코딩된 URI
 */
encodeURI(uri)

// 완전한 URI
const uri = "https://github.com/홍길동&길동이/TIL";
// encodeURI 함수는 완전히 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);