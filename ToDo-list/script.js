const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));
const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));

const saveItemsFn = function () {
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }
  // if문 대체 삼항 연산자
  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));

  // if (saveItems.length === 0) {
  //   localStorage.removeItem("saved-items");
  // } else {
  //   localStorage.setItem("saved-items", JSON.stringify(saveItems));
  // }
};

const createTodo = function (storageData) {
  let todoContents = todoInput.value;
  if (storageData) {
    todoContents = storageData.contents;
  }

  const newLi = document.createElement("li"); // html에 li 태그 생성
  const newSpan = document.createElement("span"); // html에 span 태그 생성
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete"); // 만든 button 태그에 선택 시 class 생성/제거
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });

  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan); // appendChild 생성한 태그 안에 (태그) 추가할 때 사용
  todoList.appendChild(newLi);
  todoInput.value = "";
  saveItemsFn();
};

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== "") {
    // keyCode Enter 키 값이 13 Enter 선택 시 이벤트 발생
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelectorAll("li");
  // querySelectorAll 소괄호 안에 있는 태그 모두 가져옴
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
  saveItemsFn();
};

const weatherDataActive = function ({ location, weather }) {
  const weatherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "ThunderStorm",
  ];
  weather = weatherMainList.includes(weather) ? weather : "Fog";
  const locationNameTag = document.querySelector("#location-name-tag");

  locationNameTag.textContent = location;
  console.log(weather);
  document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;

  if (
    !savedWeatherData ||
    savedWeatherData.location !== location ||
    savedWeatherData.weather !== weather
  ) {
    console.log("조건식 성립");
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  }
};

//  Geolocation API로 현재 위치 가져오기
// latitude : 위도 // longitude : 경도
const weatherSearch = function ({ latitude, longitude }) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4d0a0d3ca4914e6c0abcd6bce36848d5`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json.name, json.weather[0].main);
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main, // 현재 날씨 마춰서 변경
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.error(err);
    });
};

const accessToGeo = function ({ coords }) {
  // console.log(typeof position); // position의 type : Object
  // console.log(position.coords.longitude); // 경도
  // console.log(position.coords.latitude); // 위도
  const { latitude, longitude } = coords;
  // shorthand property keys name : values 값의 이름이 같으면 keys name 생략 가능
  const positionObj = {
    // Object : 위도(latitude) && 경도(longitude)
    latitude,
    longitude,
  };

  weatherSearch(positionObj);
};

const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
};
askForLocation();
