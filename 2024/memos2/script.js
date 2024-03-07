/**
 *  1. new Date() 로 오름차순, 내림차순 적용하기
 *  2. 작성된 list에 index 값 추가하여 오름차순, 내림차순 적용하기
 */

// memo 저장될 빈 배열 선언 
let memos = [];

// event
function bindEvent() {
    document.getElementById('save-btn').addEventListener('click', saveMemo);
    // document.getElementById('
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
            date: new Date().toLocaleString()
        };

        // 신�� 메모 배열에 추가 
        memos.push(newMemo);

        memos.sort((a, b) => a.date - b.date);

        renderMemoList();

        memoInput.value = '';

    }
}

// 메모 삭제 함수
function deleteMemo(index) {
    memos.splice(index, 1);
    addIndex();
    renderMemoList();
}

// 메모 수정 함수
function editMemo(index) {
    const memoIndex = memos[index]
    const memoText = prompt('메모를 수정하세요: ', memoIndex.text);
    if (memoText !== null && memoText.trim() !== '') {
        // addIndex(index, memoText)
        renderMemoList();
    }

}

// index 값 추가 함수
function addIndex() {
    memos.forEach((memo, index) => {
        memo.index = index;
    })
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

        // span 태그로 index, text, date 로 생성해서 추가
        const memoIndex = document.createElement('span');
        memoIndex.textContent = `${memo.index + 1}`;
        memoIndex.classList.add('index');
        memoItem.appendChild(memoIndex);

        const memoText = document.createElement('span');
        memoText.textContent = `${memo.text}`;
        memoText.classList.add('text');
        memoItem.appendChild(memoText);

        const memoDate = document.createElement('span');
        memoDate.textContent = `${memo.date}`;
        memoDate.classList.add('data');
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
renderMemoList();

// 저장 버튼에 이벤트 리스너 추가
bindEvent(); // 이벤트 함수 호출