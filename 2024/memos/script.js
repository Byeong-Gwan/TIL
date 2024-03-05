// memo 저장될 빈 배열 선언 
let memos = [];

// 저장 버튼 클릭시 실행 함수
function saveMemo() {
    const memoInput = document.getElementById('memos-text');
    const memoText = memoInput.value;

    if (memoText.trim() !== '') {
        // 신규 메모 배열에 추가 
        memos.push(memoText);

        renderMemoList();

        // 입력창 초기화
        memoInput.value = '';
    }
}

// 메모 목록을 표시하는 함수
function renderMemoList() {
    const memoList = document.getElementById('memo-list');
    memoList.innerHTML = '';

    memos.forEach((memo, index) => {
        const memoItem = document.createElement('div');
        memoItem.textContent = `${index + 1}. 작성 내용:  ${memo}`;
        memoList.appendChild(memoItem);
    });
}

// 저장 버튼에 이벤트 리스너 추가
document.getElementById('save-btn').addEventListener('click', saveMemo);