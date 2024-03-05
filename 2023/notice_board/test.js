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
  postList.innerHTML += cookieValue;
}

// 새 게시글이 작성되면 발생할 이벤트를 등록합니다.
newPostForm.addEventListener("submit", (event) => {
  // 폼이 제출될 때 기본 동작을 막습니다.
  event.preventDefault();

  // 제목과 내용을 가져옵니다.
  const title = document.getElementById("post-title").value;
  const content = document.getElementById("post-content").value;

  // 새로운 게시글을 생성하고 게시글 목록에 추가합니다.
  const newPost = document.createElement("li");
  newPost.innerHTML = `<h3>${title}</h3><p>${content}</p><button class="delete-btn">삭제</button>`;

  // 새로운 게시글을 "작성" 버튼 아래에 추가합니다.
  postList.appendChild(newPost);

  // 새로운 게시글을 로컬스토리지에 저장합니다.
  localStorage.setItem("cookieValue", postList.innerHTML);

  // 새로운 게시글 요소에 대해 삭제 버튼 클릭 이벤트를 등록합니다.
  const deleteBtn = newPost.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    newPost.remove();

    // 게시글이 삭제될 때마다 로컬스토리지에서 해당 값을 제거합니다.
    const updatedCookieValue = postList.innerHTML;
    localStorage.setItem("cookieValue", updatedCookieValue);
  });

  // 폼을 초기화합니다.
  newPostForm.reset();
});

// 모든 기존 게시글을 가져와 각각에 삭제 버튼을 추가합니다.
const posts = postList.children;
for (let i = 0; i < posts.length; i++) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "삭제";
  posts[i].appendChild(deleteBtn);
  // 각 게시글 요소에 대해 삭제 버튼 클릭 이벤트를 등록합니다.
  deleteBtn.addEventListener("click", () => {
    posts[i].remove();

    // 게시글이 삭제될 때마다 로컬스토리지에서 해당 값을 제거합니다.
    const updatedCookieValue = postList.innerHTML;
    localStorage.setItem("cookieValue", updatedCookieValue);

    // 새로운 게시글 요소에 대해 삭제 버튼 클릭 이벤트를 등록합니다.
    const deleteBtn = newPost.querySelector(".delete-btn");
    if (!deleteBtn) {
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.innerText = "삭제";
      newPost.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", () => {
        if (newPost) {
          newPost.remove();

          // 게시글이 삭제될 때마다 로컬스토리지에서 해당 값을 제거합니다.
          const updatedCookieValue = postList.innerHTML;
          localStorage.setItem("cookieValue", updatedCookieValue);
        }
      });
    }
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
