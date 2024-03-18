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
    fetchMemos(); // 페이지 로드시 메모 불러오기
}

// 메모 저장 함수
function saveMemo() {
    const memoInput = document.getElementById('memos-text');
    const memoText = memoInput.value.trim();

    if (memoText.trim() !== '') {
        // 서버에 POST 요청 보내기
        fetch('/memos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: memoText })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('메모 추가에 실패했습니다.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // 메모 추가 완료 후 메모 목록 다시 불러오기
            fetchMemos();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('메모 추가에 실패했습니다.');
        });
    } else {
        alert('메모를 입력해 주세요.');
    }
    memoInput.value = '';
}

// 메모 목록 불러오기 함수
function fetchMemos() {
    // 서버에서 GET 요청으로 메모 목록 가져오기
    fetch('/memos')
    .then(response => {
        if (!response.ok) {
            throw new Error('메모 목록을 불러오는 데 실패했습니다.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        renderMemoList(data);
    })
    .catch(error => console.error('Error:', error));
}
// 메모 목록 렌더링 함수
function renderMemoList(memos) {
    const memoList = document.getElementById('memo-list');
    memoList.innerHTML = '';

    memos.forEach((memo, index) => {
        // 메모 아이템 생성 및 추가
        const memoItem = document.createElement('div');
        memoItem.classList.add('memo');
        memoList.appendChild(memoItem);

        // 체크박스 생성 및 이벤트 리스너 추가
        const checkedInput = document.createElement('input');
        checkedInput.type = 'checkbox';
        checkedInput.classList.add('inputChecked');
        checkedInput.addEventListener('change', function () {
            const allCheckbox = document.getElementById('scales');
            const checkboxes = document.querySelectorAll('.inputChecked');
            const isChecked = checkboxes.length === document.querySelectorAll('.inputChecked:checked').length;
            allCheckbox.checked = isChecked;
        });
        memoItem.appendChild(checkedInput);

        // 메모 내용 생성 및 추가
        const memoIndex = document.createElement('span');
        memoIndex.textContent = `${index + 1}.`;
        memoIndex.classList.add('index');
        memoItem.appendChild(memoIndex);

        const memoText = document.createElement('span');
        memoText.textContent = `${memo.text}`;
        memoText.classList.add('text');
        memoItem.appendChild(memoText);

        const memoDate = document.createElement('span');
        memoDate.textContent = `${new Date(memo.date).toLocaleString()}`;
        memoDate.classList.add('date');
        memoItem.appendChild(memoDate);
    });
}

// 메모 삭제 함수
function deleteMemo(index) {
    memos.splice(index, 1);
    memos.forEach((memo, index) => {
        memo.index = index;
    });
}

// 전체 메모 삭제 함수
function deleteAllMemos() {
    const checkboxes = document.querySelectorAll('.inputChecked:checked');
    const indices = Array.from(checkboxes).map(checkbox => checkbox.parentNode.querySelector('.index').textContent.slice(0, -1));

    // 서버에 선택된 메모들의 인덱스를 전송하여 삭제
    fetch('/memos', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ indices: indices })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('메모 삭제에 실패했습니다.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        fetchMemos();
    })
    .catch(error => console.error('Error:', error));
}

