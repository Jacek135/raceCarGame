const speedDash = document.querySelector('.speedDash');
const scoreDash = document.querySelector('.scoreDash');
const lifeDash = document.querySelector('.lifeDash');
const container = document.getElementById('container');
const btnStart = document.querySelector('.btnStart');
let animiationGame = requestAnimationFrame(playGame);
let gamePlay = false;

btnStart.addEventListener('click', startGame);
document.addEventListener('keydown', pressKeyOn);
document.addEventListener('keyup', pressKeyOff);
let player;

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

function startGame() {
    btnStart.style.display='none';
    var div = document.createElement('div');
    div.setAttribute('class', 'playerCar');
    div.x = 250;
    div.y = 500;
    container.appendChild(div);
    gamePlay = true;
    player = {
        speed: 1,
        lives: 3,
        gameScore: 0,
        carstoPass: 3,
        score: 0,
        roadwidth:250
    }
    startBoard();
}

function startBoard () {
    for(let x=0; x<13; x++){
        let div = document.createElement('div');
        div.setAttribute('class', 'road');
        div.style.top = (x*50)+'px'
        div.style.width = player.roadwidth + 'px';
        container.appendChild(div)

    }
}

function pressKeyOn(){

}

function pressKeyOff() {

}

function updateDash() {
    console.log(player);
    scoreDash.innerHTML = player.score;
    lifeDash.innerHTML = player.lives;
    speedDash.innerHTML = player.speed;
}

function playGame() {
    if (gamePlay) {
        updateDash();
    }
    animiationGame = requestAnimationFrame(playGame);
}