
function computerPlay() {
    const computerChoice = ['sci', 'rock', 'pha'];
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

function play(device) {
    const computer = computerPlay();

    let result = '';

    if (device === computer) {
        result = '무승부 입니다.';
    } else if(device === 'sci' && computer === 'pha' ||
            device === 'rock' && computer === 'sci' ||
            device === 'pha' && computer === 'rock') {
        result = '당신이 이겼습니다.';
    } else {
        result = '당신이 졌습니다.';
    }

    document.getElementById('result').innerText = `me: ${device}, computer: ${computer}. ${result}`;
}