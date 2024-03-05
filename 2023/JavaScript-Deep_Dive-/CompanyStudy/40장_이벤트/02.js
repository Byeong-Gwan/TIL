const button = document.querySelector("#myButton");

function handleClick(event) {
    console.log("버튼이 클릭되었습니다!");
}

// 이벤트 핸들러 등록
button.addEventListener("click", handleClick);

// 이벤트 핸들러 제거
button.removeEventListener("click", handleClick);
