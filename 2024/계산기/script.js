
function cal() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = '0으로는 나눌 수 없습니다.';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = '유효하지 않는 연산입니다.';
    }

    document.getElementById('result').innerText = '결과: ' + result;
}