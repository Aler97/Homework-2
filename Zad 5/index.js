const minutes = 24.983333333333333333333;
let time = minutes * 60;
const minutes10 = 9.9833333333333333333333;
let time10 = minutes10 * 60;
const minutes5 = 4.9833333333333333333333;
let time5 = minutes5 * 60;
var i = 0;
let alarm = new Audio('./alarm/alarm.mp3');

const countdown = document.getElementById('countdown');
const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const resetBtn = document.querySelector('.resetBtn');
const pomodoro = document.querySelector('.pomodoro');
const longBreak = document.querySelector('.longBreak');
const shortBreak = document.querySelector('.shortBreak');




// countdount 25 minutes
function updateCountdown() {
    if (i === 1) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 25 ? '0' + seconds : seconds;
        countdown.innerHTML = `${minutes}:${seconds}`;
        document.title = `(${minutes}:${seconds}) Timer`;
        time--;
        time = time < 0 ? 0 : time;
        if (time === 0) {
            alarm.play();
            countdown.innerHTML = 'Time is up!';
        }
    }

};



// Countdown 10 minutes
function updateCountdown10() {
    if (i === 2) {
        const minutes = Math.floor(time10 / 60);
        let seconds = time10 % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdown.innerHTML = `${minutes}:${seconds}`;
        document.title = `(${minutes}:${seconds}) Timer`;
        time10--;
        time10 = time10 < 0 ? 0 : time10;
        if (time10 === 0) {
            alarm.play();
            countdown.innerHTML = 'Time is up!';
        }
    }
}

// Countdown 5 minutes
function updateCountdown5() {
    if (i === 3) {
        const minutes = Math.floor(time5 / 60);
        let seconds = time5 % 60;
        seconds = seconds < 5 ? '0' + seconds : seconds;
        countdown.innerHTML = `${minutes}:${seconds}`;
        document.title = `(${minutes}:${seconds}) Timer`;
        time5--;
        time5 = time5 < 0 ? 0 : time5;
        if (time5 === 0) {
            alarm.play();
            countdown.innerHTML = 'Time is up!';
        }
    }
}


// Start 25 min countdown
function intervalForPomodoro() {
    var interval25 = setInterval(updateCountdown, 1000);

    if (time === 0) {
        clearInterval(interval25);
        let alarm = new Audio('./alarm/alarm.mp3');
        alarm.play();
        countdown.innerHTML = 'Time is up!';
    };

    stopBtn.addEventListener('click', () => {
        clearInterval(interval25);
        if (i === 1) {
            time10 = 9.9833333333333333333333 * 60;
            time5 = 4.9833333333333333333333 * 60;
        };
        alarm.pause();
        alarm.currentTime = 0;
    });
    resetBtn.addEventListener('click', () => {
        clearInterval(interval25);
        if (i === 1) {
            time = 24.9833333333333333333333 * 60;
            countdown.innerHTML = '25:00';
        } else if (i === 2) {
            time10 = 9.9833333333333333333333 * 60;
            countdown.innerHTML = '10:00';
        } else if (i === 3) {
            time5 = 4.9833333333333333333333 * 60;
            countdown.innerHTML = '5:00';
        };
        alarm.pause();
        alarm.currentTime = 0;
    });


};

// Start 10 min countdown
function intervalForLongBreak() {
    var interval10 = setInterval(updateCountdown10, 1000);
    stopBtn.addEventListener('click', () => {
        clearInterval(interval10);
        if (i === 2) {
            time = 24.9833333333333333333333 * 60;
            time5 = 4.9833333333333333333333 * 60;
        };
        alarm.pause();
        alarm.currentTime = 0;
    });
    resetBtn.addEventListener('click', () => {
        clearInterval(interval10);
        alarm.pause();
        alarm.currentTime = 0;
    });
}

// Start 5 min countdown
function intervalForShortBreak() {
    var interval5 = setInterval(updateCountdown5, 1000);
    stopBtn.addEventListener('click', () => {
        clearInterval(interval5);
        if (i === 3) {
            time = 24.9833333333333333333333 * 60;
            time10 = 9.9833333333333333333333 * 60;
        };
        alarm.pause();
        alarm.currentTime = 0;
    });
    resetBtn.addEventListener('click', () => {
        clearInterval(interval5);
        alarm.pause();
        alarm.currentTime = 0;
    });
};





// Change countdoun to 25 min
function pomodoroTimer() {
    pomodoro.style.backgroundColor = 'rgb(64, 129, 250)';
    longBreak.style.backgroundColor = 'rgb(20, 86, 230)';
    shortBreak.style.backgroundColor = 'rgb(20, 86, 230)';
    countdown.innerHTML = '25:00';
    i = 1;
    time10 = minutes10 * 60;
    time5 = minutes5 * 60;
    startBtn.addEventListener('click', intervalForPomodoro);

};

// Change countdown to 10 min
function longBreakTimer() {
    longBreak.style.backgroundColor = 'rgb(64, 129, 250)';
    pomodoro.style.backgroundColor = 'rgb(20, 86, 230)';
    shortBreak.style.backgroundColor = 'rgb(20, 86, 230)';
    countdown.innerHTML = '10:00';
    i = 2;
    time = minutes * 60;
    time5 = minutes5 * 60;
    startBtn.addEventListener('click', intervalForLongBreak);
};

// Change countdown to 5 min
function shortBreakTimer() {
    shortBreak.style.backgroundColor = 'rgb(64, 129, 250)';
    pomodoro.style.backgroundColor = 'rgb(20, 86, 230)';
    longBreak.style.backgroundColor = 'rgb(20, 86, 230)';
    countdown.innerHTML = '5:00';
    i = 3;
    time = minutes * 60;
    time10 = minutes10 * 60;
    startBtn.addEventListener('click', intervalForShortBreak);
};

pomodoro.addEventListener('click', pomodoroTimer);
longBreak.addEventListener('click', longBreakTimer);
shortBreak.addEventListener('click', shortBreakTimer);
