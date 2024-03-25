  // 숫자 야구 게임 로직
  let answer = generateAnswer();
  let guesses = [];
  console.log("정답:", answer); // 정답을 콘솔에 출력

  function generateAnswer() {
      let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      numbers.sort(() => Math.random() - 0.5);
      return numbers.slice(0, 3);
  }

  function selectNumber(button) {
      let selectedNumber = parseInt(button.value);
      if (guesses.length < 3) {
          guesses.push(selectedNumber);
          button.style.backgroundColor = "#28a745"; // 선택된 버튼 색상 변경
      } else {
          alert("이미 3개의 숫자를 선택했습니다.");
      }
  }

  function submitGuess() {
      if (guesses.length === 3) {
          checkGuess();
          resetGame();
      } else {
          alert("숫자를 3개 선택해주세요.");
      }
  }

  function checkGuess() {
      let correct = true;
      for (let i = 0; i < guesses.length; i++) {
          if (guesses[i] !== answer[i]) {
              correct = false;
              break;
          }
      }
      if (correct) {
          alert("홈런! 축하합니다!");
      } else {
          alert("아웃! 다시 도전하세요!");
      }
  }

  function resetGame() {
      guesses = [];
      let buttons = document.querySelectorAll(".number-button");
      buttons.forEach(button => {
          button.style.backgroundColor = "#007bff"; // 초기 색상으로 변경
      });
  }