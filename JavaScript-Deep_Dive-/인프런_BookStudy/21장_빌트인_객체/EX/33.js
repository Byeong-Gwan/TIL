// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
parseInt('34 45 66'); // 34
parseInt('40 years') // 40
// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
parseInt('He was 40') // NaN
// 앞,뒤 공백은 무시된다.
parseInt('  60  '); // 60