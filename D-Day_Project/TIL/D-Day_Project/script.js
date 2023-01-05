const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const intervalIdArr = [];

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-day를 입력해 주세요.</h3>"; // innerHTML 통해 태그 생성

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};

const counterMaker = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date(); // 현제 시간
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000; // 오로직 초단위를 나타내기 위해

  if (remaining <= 0) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentArr = ["days", "hours", "min", "sec"];
  const timeKeys = Object.keys(remainingObj);
  let i = 0;
  for (let tag of documentArr) {
    document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
    i++;
  }
};

const starter = function () {
  container.style.display = "flex";
  messageContainer.style.display = "none";
  counterMaker(); // 한번 실행 setInterval 실행이 1초 뒤에 실행되는 부분 없에기
  const intervalId = setInterval(counterMaker, 1000);
  intervalIdArr.push(intervalId);
  console.log(intervalIdArr);
};

const setClearInterval = function () {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-day를 입력해 주세요.</h3>";
  messageContainer.style.display = "flex";
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};
