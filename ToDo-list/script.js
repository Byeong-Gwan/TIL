const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

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
  if (window.event.keyCode === 13 && todoInput.value !== "") {
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
