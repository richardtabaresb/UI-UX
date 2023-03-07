const btnPlus = document.querySelector("#plus")
const btnMinus = document.querySelector("#minus")
const time = document.querySelector("#time")
const btnPlay = document.querySelector("#play")
const btnPause = document.querySelector("#pause")
const btnStop = document.querySelector("#stop")
const countDownMinutes = document.querySelector("#countDownMinutes")
const countDownSeconds = document.querySelector("#countDownSeconds")
let response
let timer = {
    minutes: parseInt(`${time.value}`),
    seconds: 0,
    time: parseInt(`${time.value}`),
}

function addTime() {
    timer.time = timer.time + 1
    time.value = timer.time
    reset()
}

function removeTime() {
    timer.time = timer.time - 1
    time.value = timer.time
    reset()
}

function render() {
    if (timer.minutes < 10) {
        countDownMinutes.innerHTML = "0" + timer.minutes
    } else {
        countDownMinutes.innerHTML = timer.minutes
    }
    if (timer.seconds < 10) {
        countDownSeconds.innerHTML = "0" + timer.seconds
    } else {
        countDownSeconds.innerHTML = timer.seconds
    }
}

function play() {
        pause()
        response = setInterval(() => {
            if (timer.minutes > 0 || timer.seconds > 0) {
                if (timer.seconds > 0) {
                    timer.seconds = timer.seconds - 1
                    render()
                } else {
                    timer.minutes = timer.minutes - 1
                    timer.seconds = 59
                    render()
                }
            } else {
                stop()
            }
        }, 1000)
}

function pause() {
    clearInterval(response)
}

function stop() {
    pause()
    timer.minutes = timer.time
    timer.seconds = 0
    render()
}

function reset() {
    stop()
    render()
}

function btnActive(e) {
    const el = e.target
    btnPlay.classList.remove('btnActive')
    btnPause.classList.remove('btnActive')
    btnStop.classList.remove('btnActive')
    el.classList.add('btnActive')
}

function inputTime() {
    countDownMinutes.innerHTML = time.value
    timer.time = parseInt(time.value)
    pause()
    reset()
}

btnPlus.addEventListener("click", addTime)
btnMinus.addEventListener("click", removeTime)
btnPlay.addEventListener("click", play)
btnPause.addEventListener("click", pause)
btnStop.addEventListener("click", stop)
btnPlay.addEventListener("click", btnActive)
btnPause.addEventListener("click", btnActive)
btnStop.addEventListener("click", btnActive)
time.addEventListener("input", inputTime)
