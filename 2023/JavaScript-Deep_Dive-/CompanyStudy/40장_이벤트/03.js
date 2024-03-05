// CustomEvent 생성자를 사용하여 커스텀 이벤트 생성
const customEvent = new CustomEvent("myEvent", {
    bubbles: true, // 이벤트 전파 설정
    detail: {key: "value"}, // 추가 데이터 전달
});

// 커스텀 이벤트를 DOM 요소에 보내기
document.dispatchEvent(customEvent);

// 이벤트 수신을 위한 이벤트 핸들러 등록
document.addEventListener("myEvent", function (event) {
    console.log(event.detail); // 전달된 데이터 접근
});
