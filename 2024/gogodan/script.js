
// 공통된 부분  rendering
function render  (resultHTML) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultHTML;
} 


// event = 클릭 이벤트가 발생하게되면 결과 = 'true', 전체 = 'false'를 반환
function gogodanSelect(event) {
    const num1 = document.getElementById('num1').value;

    // false이면 수행하지 않음 (true 일 때만 유효성 검사 실행)
    // 빈 값일 때 '전체'는 1 ~ 9단 출력
    // 빈 값일 때 '결과'는 출력되면 안됨
    if(event && (num1 === '')) {
        render('숫자를 입력해주세요.');
        return;
    }

    // event === 'true' 이면 input 값에 작성된 해당 N단이 출력
    if(event) {
        const number = parseInt(num1);

        if (isNaN(ㅜㅕ) && (number < 1 || number > 9)) {
            render('1 ~ 9 까지의 숫자를 입력해주세요.');
            return;
        }
        let table = '<h3>' + number +' 단</h3>';
        for(let i = 1; i < 10; i++) {
            table += `${number} x ${i} = ${number * i}<br>`;
        }
        return render(table);

        // event === 'false' 이면 전체 1 ~ 9단 모두 출력
    } else {
        let table = '';

        for (let i = 1; i < 10; i++) {
            table += '<h3>' + i + ' 단</h3>';
            for (let j = 1; j < 10; j++) {
                table += `${i} x ${j} = ${i * j}<br>`;
            }
        }
        return render(table);

    }
    
}

// 1 ~ 9단 중 검색 가능 작성한 N단 출력
// function gogodan() {
// }
/**
 * 
    특수문자 작성 가능 ', '
    함수 하나로 합치고, 1 , 2, 5 잣성 시 1단 2단 5단이 출력될 수 있게  전체 누르면 input 값 상관없이 1 ~ 9단 출력
 */

// 1 ~ 3단 까지 출력되고 밑으로 4 ~ 6단까지 출력, 7 ~ 9단까지 