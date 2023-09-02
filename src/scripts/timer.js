let time = document.getElementById('time');
let minusButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');
let startButton = document.getElementById('button-start');
let minutes = 0;

time.innerHTML = minutes;

minusButton.addEventListener("click", () => { 
    if (time.innerHTML > 0) {
        time.innerHTML = time.innerHTML - 1;
    }
});

plusButton.addEventListener("click", () => {
    time.innerHTML = Number(time.innerHTML) + 1;
});

startButton.addEventListener("click", () => {
    if (+time.innerHTML !== 0) {
        timerFunction(moment(time.innerHTML, 'm:ss'));
    } else { 
        document.getElementById('enter-the-time').innerHTML = "Для старту таймеру добавте хоча б одну хвилину";
    }
});

function timerFunction(currentTime) { 
    document.getElementById('enter-the-time').style.display = 'none';
    document.getElementById('remains').style.display = 'block';
    minusButton.style.display = 'none';
    plusButton.style.display = 'none';
    startButton.style.display = 'none';
    time.innerHTML = currentTime.format('m:ss');
    if (time.innerHTML != '0:00') { 
        setTimeout(() => {
            timerFunction(moment(currentTime).subtract(1, 'seconds'));
        }, 1000);
    } else {
        window.location.reload();
    }
};