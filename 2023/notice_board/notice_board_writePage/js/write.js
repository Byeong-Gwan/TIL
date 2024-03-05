// 쿠키값을 저장할 변수를 초기화합니다.
let cookieValue = "";

// 새 게시글 작성 폼과 게시글 목록을 가져옵니다.
const newPostForm = document.getElementById("new-post-form");
const postContainer = document.getElementById("post-container");
const postList = document.getElementById("post-list");
// 게시판 목록 버튼을 가져옵니다.
const postToggleBtn = document.getElementById("post-toggle");

// 게시판 목록을 초기에 숨기도록 설정합니다.
postContainer.style.display = "none";

// 이전에 저장한 쿠키값을 로컬스토리지에서 불러옵니다.
cookieValue = localStorage.getItem("cookieValue");

// 만약 이전에 저장한 쿠키값이 있다면, 게시글 목록에 해당 값을 추가합니다.
if (cookieValue !== null) {
  postList.innerHTML = cookieValue;
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  const titleInput = document.querySelector("#post-title");
  const contentInput = document.querySelector("#post-content");

  if (!titleInput.value || !contentInput.value) {
    alert("제목과 내용을 입력해주세요.");
    event.preventDefault(); // 폼 제출 막기
  } else {
    const pageGoBtn = document.querySelector(".main-page-go");
    window.location.href = "../../notice_board_mainPage/main.html";

  }
});

// 새 게시글이 작성되면 발생할 이벤트를 등록합니다.
newPostForm.addEventListener("submit", (event) => {
  // 폼이 제출될 때 기본 동작을 막습니다.
  event.preventDefault();

  // 제목과 내용을 가져옵니다.
  const title = document.getElementById("post-title").value;
  const content = document.getElementById("post-content").value;

  if (!title || !content) {
    alert("제목과 내용을 입력해주세요.");
    return; // 제목과 내용이 모두 입력되지 않았을 경우 함수 종료
  }

  // 새로운 게시글을 생성하고 게시글 목록에 추가합니다.
  const newPost = document.createElement("li");
  newPost.innerHTML = `<h3>${title}</h3><p>${content}</p><button class="delete-btn">삭제</button>`;

  // 새로운 게시글을 게시글 목록에 추가합니다.
  postList.appendChild(newPost);

  // 새로운 게시글 삭제 버튼에 이벤트를 등록합니다.
  const deleteBtn = newPost.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    newPost.remove();
    const updatedCookieValue = postList.innerHTML;
    localStorage.setItem("cookieValue", updatedCookieValue);
    // 로컬스토리지에서 해당 데이터를 제거합니다.
    localStorage.removeItem("cookieValue");
  });

  // 새로운 게시글을 로컬스토리지에 저장합니다.
  const updatedCookieValue = postList.innerHTML;
  localStorage.setItem("cookieValue", updatedCookieValue);
});

// 페이지가 로드될 때, 삭제 버튼에 이벤트를 등록합니다.
window.onload = () => {
  const deleteBtnList = document.querySelectorAll(".delete-btn");
  deleteBtnList.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      const listItem = deleteBtn.closest("li");
      listItem.remove();
      const updatedCookieValue = postList.innerHTML;
      localStorage.setItem("cookieValue", updatedCookieValue);
    });
  });
}

// 게시글 목록을 펼침/접힘 기능을 구현합니다.
postToggleBtn.addEventListener("click", () => {
  if (postContainer.style.display === "none") {
    // 게시글 목록이 숨겨져 있다면, 펼치기 위해 스타일을 변경합니다.
    postContainer.style.display = "block";
    postToggleBtn.innerText = "목록 숨기기";
  } else {
    // 게시글 목록이 보여지고 있다면, 숨기기 위해 스타일을 변경합니다.
    postContainer.style.display = "none";
    postToggleBtn.innerText = "목록 보기";
  }
});


// 이 코드는 단순한 게시판 기능을 구현하고, 새 게시글 작성, 삭제, 목록 숨기기/보이기 기능을 포함합니다.
// 쿠키를 사용하여 이전에 작성한 게시글을 로컬스토리지에 저장하고, 페이지를 새로고침해도 보존됩니다.
// 이를 통해 사용자 경험을 향상시킬 수 있습니다.
