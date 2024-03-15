// memo 저장될 빈 배열 선언 
let memos = [];

// event 초기화
function bindEvent() {
    document.getElementById('save-btn').addEventListener('click', saveMemo);
    document.getElementById('updown').addEventListener('change', sortMemos);
    const radioInputs = document.querySelectorAll('input[name="option"]');
    radioInputs.forEach(input => {
        input.addEventListener('change', sortMemos);
    });

    document.getElementById('delete-all-button').addEventListener('click', deleteAllMemos);

    document.getElementById('scales').addEventListener('change', function () {
        console.log('전체 체크박스가 변경되었습니다.');
        const isChecked = this.checked;
        const checkboxes = document.querySelectorAll('.inputChecked');
    
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    });
    
}

// event 초기화
function init () {
    bindEvent();
}

// 저장 버튼 클릭시 실행 함수
function saveMemo() {
    const memoInput = document.getElementById('memos-text');
    const memoText = memoInput.value;

    if (memoText.trim() !== '') {

       // 객체 생성 index, text, Data 추가
        const newMemo = {
            index: memos.length,
            text: memoText,
            date: new Date()
        };
        memos.push(newMemo);
        memos.sort((a, b) => a.date - b.date);
        renderMemoList();
    } else {
        alert('메시지를 입력해 주세요.');
    }
    memoInput.value = '';
}

// 오름/ 내림차순 처리
function sortMemos() {
    const memoValue = document.getElementById('updown').value;
    console.log('memoValue', memoValue);
    debugger;
    const memoSort = document.querySelector('input[name="option"]:checked').value;
    console.log('memoSort', memoSort);
   // memos.memoValue = memoValue.options[memoValue.selectedIndex].value;

    const sortObject = {
        'index': (a, b) => a.index - b.index,
        'text': (a, b) => a.text.localeCompare(b.text),
        'date': (a, b) => a.date - b.date
    }[memoSort];

    if (sortObject) {
        memos.sort((a, b) => {
            if (memoValue === 'up') {
                return sortObject(a, b);
            } else {
                return sortObject(b, a);
            }
        });
        renderMemoList();
    }
    renderMemoList();
}

// 메모 삭제 함수
function deleteMemo(index) {
    memos.splice(index, 1);
    memos.forEach((memo, index) => {
        memo.index = index;
    });
}

// 메모 수정 함수
function editMemo(index) {
    const memoIndex = memos[index]
    const memoText = prompt('메모를 수정하세요: ', memoIndex.text);
    if (memoText !== null && memoText.trim() !== '') {
        // addIndex(index, memoText)
        if (memoIndex) {
            memoIndex.text = memoText;
        } else {
            const newMemo = {
                index: memos.length,
                text: memoText,
                date: new Date()
            }
            memos.push(newMemo);
        }
    }
    sortMemos();
    renderMemoList();
}

function deleteAllMemos() {
    const memos = document.querySelectorAll('.memo');
    const arr = [];
    memos.forEach((memo, index) => {
        const checkbox = memo.querySelector('.inputChecked');
        if (checkbox.checked === true) {
            arr.push(index);
        }
    });
    // 빈 배열 선언 후 역순으로 checked 확인해서 false 인 index 값만 빈 배열에 담아서 노출 처리
    arr.reverse().forEach(index => deleteMemo(index))
    renderMemoList();
}

// 메모 목록을 표시하는 함수
function renderMemoList() {
    const memoList = document.getElementById('memo-list');
    memoList.innerHTML = '';

    memos.forEach((memo, index) => {
        // 저장 클릭 시 div 태그 추가 작성된 내용 저장
        const memoItem = document.createElement('div');
        memoItem.classList.add('memo');
        memoList.appendChild(memoItem); // 'memo-list' 자식 으로 div 생성

        const checkedInput = document.createElement('input');
        checkedInput.type = 'checkbox';
        checkedInput.classList.add('inputChecked');
        const inputElement = memoItem.appendChild(checkedInput); // event 값 할당
        /**
         * (method) Node.appendChild<HTMLInputElement>(node: HTMLInputElement): HTMLInputElement
            method: function
            Node: memoItem type
            appendChild: 자식요소 추가 함수
            <HTMLInputElement>: 제네이릭
            (node: HTMLInputElement): Input 값
            :  HTMLInputElement: Output 값
         */
        inputElement.addEventListener('change', function () { 
            console.log('개별 체크박스가 변경되었습니다.');
            const allCheckbox = document.getElementById('scales');
            const checkboxes = document.querySelectorAll('.inputChecked');
            const isChecked = checkboxes.length === document.querySelectorAll('.inputChecked:checked').length;

            allCheckbox.checked = isChecked
        });

        // span 태그로 index, text, date 로 생성해서 추가
        const memoIndex = document.createElement('span');
        memoIndex.textContent = `${memo.index + 1 + '.'}`;
        memoIndex.classList.add('index');
        memoItem.appendChild(memoIndex);

        const memoText = document.createElement('span');
        memoText.textContent = `${memo.text}`;
        memoText.classList.add('text');
        memoItem.appendChild(memoText);

        const memoDate = document.createElement('span');
        memoDate.textContent = `${memo.date.toLocaleString()}`;
        memoDate.classList.add('date');
        memoItem.appendChild(memoDate);

        // 삭제 버튼 추가
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.classList.add('delete-button'); // 삭제 버튼에 클래스 추가
        deleteButton.addEventListener('click', () => deleteMemo(index)); // 삭제 이벤트 발생
        memoItem.appendChild(deleteButton); // div 자식으로 button 생성

       // 수정 버튼 추가
        const editButton = document.createElement('button');
        editButton.textContent = '수정';
        editButton.classList.add('edit-button'); // 수정 버튼에 클래스 추가
        editButton.addEventListener('click', () => editMemo(index)); // 수정 이벤트 발생
        memoItem.appendChild(editButton); // div 자식으로 button 생성

    }); 
}

// 초기화
// renderMemoList();
init();