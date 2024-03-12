## 요건 정리

### 1. 메모장 작성 후, 저장 클릭 시 하단에 작성한 내용 추가

    - html 생성 후 해당 내용에 리스트 추가되는 부분 동기 식으로 추가하기 위해 셋팅 처리.

### 2. 저장 된 내용 버튼 추가 '수정', '삭제' 기능 추가

    - 동기 형식으로 생성 되는 list 맨 끝에 두가지 기능 추가 

### 3. index 값, 내용, 날짜 순으로 정리

    - index, 내용 값은 문제 없이 노출 되었지만, 날짜 같은 경우 sort() 함수를 사용해서 '2024. 3. 10. 오후 10:15:25' 형식으로 노출
        date.toLocaleString() 로 처리.

### 4. 삭제 하게 되면 index 값 업데이트 처리

    - forEach 문을 통해서 list가 재렌더링하면서 list 업데이트 처리 

### 5. 오름 / 내림 차순 처리 
    
    - radio input Box 추가함, up, down 처리 반대 값을 빼서 + 이면 up, -면 down 처리 함수 만들어서 처리.

### 6. index, text, date 각각 오름 / 내림 차순 처리
    
    - value 값을 추가해주고, 해당 값이면 (index, text, date) 에 맞게 처리
    - 문제: 처리는 완료했지만 수정 처리에 있어서 문제 발생 [Object, Object] 로 노출 됨
    - 해결: memos[index] 이렇게 했던게 문제였음 
            객체이기 때문에 객체를 그대로 읽어오기 때문에 문제 발생함
            memos[index].text 로 변경해서 객체 내에 있는 text 속성에 접근해서 value 값 노출 처리

### 7. index, text, date 각각 '<span>' 태그 안에 넣기

    - 동기 식으로 생성하는 내용에 추가 '<div>' 태그의 자식 요소로 추가처리

### 8. check-box 추가, 각각 check-box 추가 

    - '전체' check-box는 html에 추가해서 처리 나머지는 동기 처리

### 9. 전체 클릭 시 작성된 배열 모두 checked 추가 모두 활성화 처리

    - '전체' check-box 클릭 시 모두 check
    - 주요 코드:

    ``` JavaScript 
        document.getElementById('scales').addEventListener('change', function() {
            // 전체 클릭 시 메모 목록에 있는 모두 checked 로 전황
            const checkboxes = document.querySelectorAll('.inputChecked');
            checkboxes.forEach(checkbox => {
                checkbox.checked = isChecked;
            });
    ```


### 10. 전체 클릭 후 하나의 check-box 해지 시 전체 check-box도 해지 처리 

    - '전체' 클릭 시 check 처리 완료했지만, 문제발생
    - 문제: 하나라도 check 비활성화하면 '전체' check-box 도 비활성화 되어야 되는데, 안됨
            각각 요소에 check 해서 list에 있는 모두 check 하게되면 '전체' check-box 도 활성화되어야 되는데 안됨
    - 해결: 문제 인지 후 addEvetListener 함수 수정 처리 빈 배열에 값들을 동기식으로 추가했지만 하나의 값만 추가해주는 방식의 코드 수정
        해결 코드:

        ``` JavaScript
             document.getElementById('scales').addEventListener('change', function() {
                // 전체 클릭 시 메모 목록에 있는 모두 checked 로 전황
                const checkboxes = document.querySelectorAll('.inputChecked');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = isChecked;
                });

                // 개별 메모의 체크박스 이벤트 리스너 추가
                checkboxes.forEach(checkbox => {
                    checkbox.addEventListener('change', function() {
                        const allCheckbox = document.getElementById('scales');
                        if (!isChecked) {
                            // 하나라도 체크 해제 시 전체 체크박스 해제
                            allCheckbox.checked = false;
                        } else {
                            // [..]스프레드 연산자 사용 (동기로 html 태그 만들어서 배열에 담아서 함수 호출)
                            const allChecked = [...checkboxes].every(checkbox => checkbox.checked);
                            // 모든 개별 체크박스가 체크되었을 때 전체 체크박스 체크
                            allCheckbox.checked = allChecked; 
                        }
                    });
                });
            });
        ``` 

    - 문제 2 : 위 해결 내용을 통해서 하나라도 해지 처리하면 '전체' check-box 해제 였는데, 해당 부분은 해결이 되었지만, 
            추가적인 문제가 발생 '전체' check-box 선택 없이 -> 각각의 check-box를 선택 후 전체가 다 선택이 되면,
            '전체' check-box 도 활성화 되어야 되는데 안됨
    - 해결: 진행중

### 11. 전체 삭제 버튼 생성 기능 추가

    - (method) Node.appendChild<HTMLInputElement>(node: HTMLInputElement): HTMLInputElement
        method: function
        Node: memoItem type
        appendChild: 자식요소 추가 함수
        <HTMLInputElement>: 제네이릭
        (node: HTMLInputElement): Input 값
        :  HTMLInputElement: Output 값
        
### 12. 백엔드 작업 

    - Node Express SQLite 로 작업 예정 