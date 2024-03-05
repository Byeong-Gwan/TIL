
// 공통된 부분  rendering
function render  (resultHTML) {
    const resultDiv = document.getElementById('result');
    // 화면에 그려줄 위치의 요소 가져옴
    resultDiv.innerHTML = resultHTML;
} 


// event = 클릭 이벤트가 발생하게되면 결과 = 'true', 전체 = 'false'를 반환
function gogodanSelect(event) {
    // 빈 값으로 선언 
    let table = ''

    // input 작성된 값을 가져와서 저장
    const num1 = document.getElementById('num1').value;

    /* 
        split 를 통해서 ',' 별로 자름,  
        map() 함수를 사용 현재 element, index, array 값을 정의 parseInt를 통해 문자열로 넘어온 배열의 값들은 정수로 전환
        trim()을 통해 양끝 공백을 제거한다. 
        filter() 함수 사용해서 얕은 복사를 통해 정수로 전황된 값들을 저장하는데 화살표 함수의 조건에 해당되는 값은 제외하고 true 경우만 값을 가져옴 
     */
    const numbers = num1.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num) && num > 0 && num < 10);
    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 배열 선언 

    if (!event) {
       table = gogodanFn(numArray, table); // 전체 보기 클릭 시 배열의 길이 만큼 돌며 출력
    } else {

        // false이면 수행하지 않음 (true 일 때만 유효성 검사 실행)
        // 빈 값일 때 '전체'는 1 ~ 9단 출력
        if(num1 === '') {
            return render('숫자를 입력해주세요.');
        }
        
         // 빈 값일 때 '결과'는 출력되면 안됨
        if (numbers.length === 0) {
            return render('1 ~ 9 까지의 숫자를 입력해주세요.');
        }

        // input에 작성된 value 배열로 값을 가져와 출력 ( filter() 함수를 통해서 작성된 값이면 true 해당 값 출력 아니면 false 제외처리 ) 
        table = gogodanFn(numbers, table);
    }
    render(table); // 화면 그려주기 위해 사용
}

//for문도 함수로 정의 (공통)
function gogodanFn (numbers) {
    let table = '';
    // 반복문을 통해서 둘 중 클릭한 값에 따라 전달 
    numbers.forEach(number => {
        table += '<h3>' + number +' 단</h3>';
        for(let i = 1; i < 10; i++) {
           table += `${number} x ${i} = ${number * i}<br>`;
        }
    })

    return table;
}




/**
 * 
    특수문자 작성 가능 ', '
    input 값에 1 , 2, 5 작성 시 1단 2단 5단이 출력될 수 있게  '전체' 누르면 input 값 상관없이 1 ~ 9단 출력
 */

// 1 ~ 3단 까지 출력되고 밑으로 4 ~ 6단까지 출력, 7 ~ 9단까지 
