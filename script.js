const speedDash = document.querySelector('.speedDash');
const scoreDash = document.querySelector('.scoreDash');
const lifeDash = document.querySelector('.lifeDash');
const container = document.getElementById('container');
const btnStart = document.querySelector('.btnStart');
let animiationGame = requestAnimationFrame(playGame);
let gamePlay = false;

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

function playGame() {
    if (gamePlay) {
        console.log('Game in play');
    }
    animiationGame = requestAnimationFrame(playGame);
}