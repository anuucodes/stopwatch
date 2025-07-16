let seconds = 0;
let minutes = 0;
let hours = 0;
let timerId = null;

function updateStopwatch(){
    

    document.getElementById('seconds').textContent = String(seconds).padStart(2,'0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2,'0');
    document.getElementById('hours').textContent = String(hours).padStart(2,'0');
    seconds++;
    if(seconds === 60){
        minutes++;
        seconds = 0;
    }
    if(minutes === 60){
        hours++;
        minutes=0;
    }
    timerId = setTimeout(updateStopwatch, 1000);
    
}

function stopStopwatch() {
    clearTimeout(timerId);
    timerId = null;
    document.getElementById('startBtn').disabled = false;
}




function resetStopwatch() {
    clearTimeout(timerId);
    timerId = null;
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('seconds').textContent = "00";
    document.getElementById('minutes').textContent = "00" ;
    document.getElementById('hours').textContent = "00";
    document.getElementById('startBtn').disabled = false;
}
function startStopwatch() {
    if (!timerId){
    updateStopwatch();
    document.getElementById('startBtn').disabled = true;

}
}
document.getElementById('startBtn').onclick = startStopwatch;
document.getElementById('stopBtn').onclick = stopStopwatch;
document.getElementById('resetBtn').onclick = resetStopwatch;