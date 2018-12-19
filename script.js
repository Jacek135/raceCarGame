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
    btnStart.style.display = 'none';
    var div = document.createElement('div');
    div.setAttribute('class', 'playerCar');
    div.x = 250;
    div.y = 500;
    container.appendChild(div);
    gamePlay = true;
    player = {
        ele: div,
        speed: 1,
        lives: 3,
        gameScore: 0,
        carstoPass: 3,
        score: 0,
        roadwidth: 250
    }
    startBoard();
}

function startBoard() {
    for (let x = 0; x < 13; x++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'road');
        div.style.top = (x * 50) + 'px'
        div.style.width = player.roadwidth + 'px';
        container.appendChild(div)
    }
}

function pressKeyOn(event) {
    event.preventDefault();
    // console.log(event.key);
    keys[event.key] = true;
}

function pressKeyOff(event) {
    event.preventDefault();
    // console.log(event.key);
    keys[event.key] = false;
}

function updateDash() {
    // console.log(player);
    scoreDash.innerHTML = player.score;
    lifeDash.innerHTML = player.lives;
    speedDash.innerHTML = Math.round(player.speed * 17);
}

function moveRoad() {
    let tempRoad = document.querySelectorAll('.road');
    let previousRoad = tempRoad[0].offsetLeft;
    let previousWidth = tempRoad[0].offsetWidth;
    const pSpeed = Math.floor(player.speed);
    for (let x = 0; x < tempRoad.length; x++) {
        let num = tempRoad[x].offsetTop + pSpeed;
        if (num > 600) {
            num = num - 650;
            let mover = tempRoad[x].offsetLeft + (Math.floor(Math.random() * 6 - 3));
            let roadWidth = (Math.floor(Math.random() * 11) - 5) + previousWidth;
            if (roadWidth < 200) roadWidth = 200;
            if (roadWidth > 400) roadWidth = 400;
            if (mover < 100) mover = 100;
            if (mover > 600) mover = 600;
            tempRoad[x].style.left = mover + 'px';
            tempRoad[x].style.width = roadWidth + 'px';
            previousRoad = tempRoad[x].offsetLeft;
            previousWidth = tempRoad[x].width;

        }
        tempRoad[x].style.top = num + 'px';
    }
    return {
        'width': previousWidth,
        'left': previousRoad
    };
};

function playGame() {
    if (gamePlay) {
        updateDash();

        let roadPara = moveRoad();

        if (keys.ArrowUp) {
            if (player.ele.y > 400) {
                player.ele.y -= 1;
            }
            player.speed = player.speed < 20 ? (player.speed + 0.05) : 20
        }

        if (keys.ArrowDown) {
            if (player.ele.y < 500) {
                player.ele.y += 1;
            }
            player.speed = player.speed > 0 ? (player.speed - 0.2) : 0;
        }

        if (keys.ArrowRight) {
            player.ele.x += (player.speed / 4)
        }

        if (keys.ArrowLeft) {
            player.ele.x -= (player.speed / 4)
        }

        if ((player.ele.x + 40) < roadPara.left || (player.ele.x > (roadPara.left + roadPara.width))) {
            if (player.ele.y < 500) {
                player.ele.y += +1;
            }
            player.speed = player.speed > 0 ? (player.speed - 0.2) : 1;
        }

        player.ele.style.top = player.ele.y + 'px';
        player.ele.style.left = player.ele.x + 'px';

    }
    animiationGame = requestAnimationFrame(playGame);
}