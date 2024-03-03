
function gogodan() {
    // 해당 html에 있는 id 값의 요소의 값을 가져옴
    const numberIndex = document.getElementById('numberIndex').value; 
    // 해당 html에 있는 id 값의 요소를 가져옴
    const resultDiv = document.getElementById('result');

    // 빈 값 이거나 정수가 아닌경우 타는 로직
    if (numberIndex === '' || isNaN(numberIndex)) {
        resultDiv.innerHTML = "숫자를 입력하세요.";
        return;
    }

    const number = parseInt(numberIndex); // 문자열로 들어올 경우 정수로 변환
    let table = '<h2>' + number + ' 단</h2>';

    for (let i = 1; i < 10; i++) {
        table += `${number} x ${i} = ${number * i}<br>`;
    }

    // 출력
    resultDiv.innerHTML = table;
}