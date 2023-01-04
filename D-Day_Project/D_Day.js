console.log("1 === 1", 1 === 1);
console.log("1 > 2", 1 > 2);
const check = "check";
console.log("check === 'check", check === "check");
console.log("check === 123", check === 123);

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

const counterMaker = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date(); // 현제 시간
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); // 타겟 날짜까지의 초단위(소주점도 포함 시킴)
  // setHours(0, 0, 0, 0) 함수 사용 이용은 없을 시 오전 9시 기준으로 시간을 계산
  // 자정을 기준으로 시간 계산을 위해서 setHours() 함수 사용
  const remaining = (targetDate - nowDate) / 1000; // 오로직 초단위를 나타내기 위해

  const remainingDate = Math.floor(remaining / 3600 / 24); // DAy
  const remainingHours = Math.floor(remaining / 3600) % 24; // Hours
  const remainingMin = Math.floor(remaining / 60) % 60; //Minute
  const remainingSec = Math.floor(remaining) % 60; // Second

  console.log(remainingDate, remainingHours, remainingMin, remainingSec);
};
