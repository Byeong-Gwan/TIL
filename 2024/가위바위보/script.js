// 미니 프로젝트

// 해당 로직 설명 
/**
 * 해당 로직은 컴퓨터가 정할 수 있는 값을 3가지로 배열로 선언(가위, 바위, 보) 
 * Math.floor(Math.random() * choices.length); 해당 로직은 choices의 길이
 * 랜덤으로 배열의 길이를 통해 임의 소수 부동수를 만들고 해당 값을 randomIndex의 값을 반환
 */
function computerPlay() {
    const choices = ['scissors', 'rock', 'paper'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/**
 * html에서 play() 함수를 호출하는 곳에서 선택한 값을 매개변수 userChoice 로 넘겨줌 
 * 그리고 if문을 돌리면서 체크 
 * 체크 완료되면 해당 id 값이 있는 태그에 해당 값들을 출력
 */
function play(userChoice) {
    const computerChoice = computerPlay();
    let result = '';

    if (userChoice === computerChoice) {
        result = '무승부 입니다.';
    } else if (userChoice === 'rock' && computerChoice === 'scissors' || 
                userChoice === 'scissors' && computerChoice === 'paper' ||
                userChoice === 'paper' && computerChoice === 'rock') {
        result = '당신이 이겼습니다.';
    } else {
        result = '당신이 졌습니다.';
    }

    document.getElementById('result').innerText = `me: ${userChoice}, computer: ${computerChoice}. ${result}`;
}