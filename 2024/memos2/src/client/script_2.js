document.addEventListener('DOMContentLoaded', function () {
    // 메모 목록 불러오기
    fetchMemos();

    // 저장 버튼에 이벤트 리스너 추가
    document.getElementById('save-btn').addEventListener('click', saveMemo);

    // 오름/내림차순, 정렬 기준 변경 이벤트 리스너 추가
    document.getElementById('updown').addEventListener('change', sortMemos);
    const radioInputs = document.querySelectorAll('input[name="option"]');
    radioInputs.forEach(input => {
        input.addEventListener('change', sortMemos);
    });

    // 전체 삭제 버튼에 이벤트 리스너 추가
    document.getElementById('delete-all-button').addEventListener('click', deleteAllMemos);

    // 전체 선택/해제 체크박스 이벤트 리스너 추가
    document.getElementById('scales').addEventListener('change', function () {
        const isChecked = this.checked;
        const checkboxes = document.querySelectorAll('.inputChecked');
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    });
});

// 메모 저장 함수
function saveMemo() {
    const memoInput = document.getElementById('memos-text');
    const memoText = memoInput.value.trim();

    if (memoText !== '') {
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
    .then(response => response.json())
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

// 메모 정렬 함수
function sortMemos() {
    const memoValue = document.getElementById('updown').value;
    const memoSort = document.querySelector('input[name="option"]:checked').value;

    // 서버에 정렬 기준과 방향을 전송
    fetch(`/memos?sortBy=${memoSort}&order=${memoValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderMemoList(data);
    })
    .catch(error => console.error('Error:', error));
}

// 메모 삭제 함수
function deleteMemo(index) {
    // 서버에 삭제할 메모의 인덱스를 전송
    fetch(`/memos/${index}`, {
        method: 'DELETE'
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
