// 이벤트 대상 요소 선택
const button = document.querySelector("#myButton");

// 이벤트 핸들러 함수 작성
function handleClick(event) {
    console.log("버튼이 클릭되었습니다!");
}

// 이벤트 핸들러 등록
button.addEventListener("click", handleClick);
