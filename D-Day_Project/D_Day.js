/* ** 코드 작성에 있어서 코드 위치도 중요하다 순차적으로 읽어 가기 때문에
      코드의 순서에 맞게 함수 선언과 사용을 해야 된다.
*/

const messageContainer = document.querySelector("#d-day-message"); // message 출력
const container = document.querySelector("#d-day-container");
const savedDate = localStorage.getItem("saved-date");

const intervalIdArr = [];

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-day를 입력해 주세요.</h3>"; // innerHTML 통해 태그 생성

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + "-" + inputMonth + "-" + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  // 템플릿 리터럴 `` -> ES6에서 적용가능

  return dateFormat;
  // console.log(inputYear + "-" + inputMonth + "-" + inputDate);
};

const counterMaker = function (date) {
  if (date !== savedDate) {
    localStorage.setItem("saved-date", date);
  }
  // const targetDateInput = dateFormMaker();
  const nowDate = new Date(); // 현제 시간
  const targetDate = new Date(date).setHours(0, 0, 0, 0);
  // 타겟 날짜까지의 초단위(소수점도 포함 시킴)
  // setHours(0, 0, 0, 0) 함수 사용 이용은 없을 시 오전 9시 기준으로 시간을 계산
  // 자정을 기준으로 시간 계산을 위해서 setHours() 함수 사용

  const remaining = (targetDate - nowDate) / 1000; // 오로직 초단위를 나타내기 위해

  // if() 사용 시 : 만약, remaining === 0이 0이라면, 타이머가 종료 되었습니다. 출력
  // 수도코드(코드를 하나하나 세부적으로 나누는 습관)
  if (remaining <= 0) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    // 만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  // 객체 생성
  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };
  // const remainingDate = Math.floor(remaining / 3600 / 24); // DAy
  // const remainingHours = Math.floor(remaining / 3600) % 24; // Hours
  // const remainingMin = Math.floor(remaining / 60) % 60; //Minute
  // const remainingSec = Math.floor(remaining) % 60; // Second

  // 객체 생성
  // const documentObj = {
  //   days: document.getElementById("days"),
  //   hours: document.getElementById("hours"),
  //   min: document.getElementById("min"),
  //   sec: document.getElementById("sec"),
  // };

  const documentArr = ["days", "hours", "min", "sec"];
  const timeKeys = Object.keys(remainingObj);
  // const docKeys = Object.keys(documentObj);

  // 1.
  // documentObj["days"].textContent = remainingObj["remainingDate"];
  // documentObj["hours"].textContent = remainingObj["remainingHours"];
  // documentObj["min"].textContent = remainingObj["remainingMin"];
  // documentObj["sec"].textContent = remainingObj["remainingSec"];
  // console.log(remainingDate, remainingHours, remainingMin, remainingSec);

  // 2.
  // for (let i = 0; i < timeKeys.length; i++) {
  //   documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]].textContent;
  // }

  const format = function (time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  // 3.
  let i = 0;
  for (let tag of documentArr) {
    const remainingTime = format(remainingObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    i++;
  }
};

const starter = function (targetDateInput) {
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }

  container.style.display = "flex";
  messageContainer.style.display = "none";

  // 문제점이 많음
  // for (let i = 0; i < 100; i++) {
  //   setTimeout(() => {
  //     counterMaker();
  //   }, 1000 * i);
  // }
  setClearInterval();
  counterMaker(targetDateInput); // 한번 실행 setInterval 실행이 1초 뒤에 실행되는 부분 없에기
  const intervalId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000);
  intervalIdArr.push(intervalId);
  console.log(intervalIdArr);
};

// 실행되어 있는 interval 종료해주는 로직
const setClearInterval = function () {
  localStorage.removeItem("saved-date");
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};

const resetTimer = function () {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-day를 입력해 주세요.</h3>";
  messageContainer.style.display = "flex";
  setClearInterval();
};

if (savedDate) {
  starter(savedDate);
} else {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-day를 입력해 주세요.</h3>";
}
