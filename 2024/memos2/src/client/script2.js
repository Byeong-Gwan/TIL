let memos = [];// memo 저장될 빈 배열 선언 

// event
// '전체' 체크박스와 개별 체크박스 동기화
function checkAll() {
    const allCheckbox = document.getElementById('scales');
    const isChecked = allCheckbox.checked;
    const checkboxes = document.querySelectorAll('.inputChecked');
    checkboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
}

// 개별 체크박스 변경 시 '전체' 체크박스 상태 갱신
function updateCheckAll() {
    const allCheckbox = document.getElementById('scales');
    const checkboxes = document.querySelectorAll('.inputChecked');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    allCheckbox.checked = allChecked;
}

// event 초기화
function bindEvent() {
    document.getElementById('save-btn').addEventListener('click', saveMemo);
    document.getElementById('updown').addEventListener('change', sortMemos);

    // 라디오 버튼 이벤트 리스너 추가
    const radioInputs = document.querySelectorAll('input[name="option"]');
    radioInputs.forEach(input => {
        input.addEventListener('change', sortMemos);
    });

    // '전체' 체크박스와 동일한 위치에 전체 삭제 버튼 추가
    const scalesLabel = document.querySelector('label[for="scales"]');
    const deleteAllButton = document.createElement('button');
    deleteAllButton.textContent = '전체 삭제';
    deleteAllButton.classList.add('delete-all-button');
    deleteAllButton.addEventListener('click', deleteAllMemos);
    scalesLabel.parentNode.insertBefore(deleteAllButton, scalesLabel.nextSibling);
    
    // '전체' 체크박스 이벤트 리스너 추가
    const allCheckbox = document.getElementById('scales');
    allCheckbox.addEventListener('change', checkAll);

    // 개별 체크박스 이벤트 리스너 추가
    const checkboxes = document.querySelectorAll('.inputChecked');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCheckAll);
    });
}

// 초기화
init();


// event 초기화
function init () {
    bindEvent();
}

// window.onload = bindEvent;

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

   // // if(memo)
   // if(memoValue === 'up') {
   //     if(memoSort === 'index') {
   //         upIndex();
   //     } else if(memoSort === 'text') {
   //         upText();
   //     } else if(memoSort === 'date') {
   //         upDate();
   //     }
   // } else {
   //     if(memoSort === 'index') {
   //         downIndex();
   //     } else if(memoSort === 'text') {
   //         downText();
   //     } else if(memoSort === 'date') {
   //         downDate();
   //     }
   // } 
    renderMemoList();
}

// index 일 때 오름차순, 내림 차순 처리
// function upIndex() {
//     memos.sort((a, b) => a.index - b.index);
//     // renderMemoList();
// }

// function downIndex() {
//     memos.sort((a, b) => b.index - a.index);
//     // renderMemoList();
// }

// function upText() {
//     memos.sort((a, b) => a.text.localeCompare(b.text));
//     // renderMemoList();
// }

// function downText() {
//     memos.sort((a, b) => b.text.localeCompare(a.text));
//     // renderMemoList();
// }

// function upDate() {
//     memos.sort((a, b) => a.date - b.date);
//     // renderMemoList();
// }

// function downDate() {
//     memos.sort((a, b) => b.date - a.date);
//     // renderMemoList();
// }

// 메모 삭제 함수
function deleteMemo(index) {
    memos.splice(index, 1);
    memos.forEach((memo, index) => {
        memo.index = index;
    });
    renderMemoList();
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

// '전체' check 처리 && 하나라도 해지 시 처리

function checkAll() {
    const allCheckbox = document.getElementById('scales');
    const checkboxes = document.querySelectorAll('.inputChecked');
    const isChecked = allCheckbox.checked;

    checkboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
}

function deleteAllMemos() {
    const checkboxes = document.querySelectorAll('.inputChecked:checked');
    checkboxes.forEach(checkbox => {
        const index = parseInt(checkbox.dataset.index);
        deleteMemo(index);
    });
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
        memoItem.appendChild(checkedInput);

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
bindEvent();