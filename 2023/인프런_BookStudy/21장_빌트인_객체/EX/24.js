/**
 * 전달받은 문자열 인수를 정수로 ㅐ석하여 반환한다.
 * @param {string} string - 변환 대상 값
 * @param {number} [radix] - 진법을 나타내는 기수(2 ~ 36, 기본값 10)
 * @returns {number} 변환 결과
 */
parseInt(string, radix);

// 문자열을 정수로 해석하여 반환한다.
parseInt('10') // 10
parseInt('10.123'); // 10