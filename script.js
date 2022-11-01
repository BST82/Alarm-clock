const liveTime = document.getElementById('clock');
const audio = new Audio('ao.mp3');
audio.loop = true;

let alarmTime = null;
let alarmTimeout = null;
let alertdiv=document.getElementById('alarm-box');

function updateLiveTime() {
    const date = new Date();
    const hour = addZero(date.getHours());
    const minute = addZero(date.getMinutes());
    const second = addZero(date.getSeconds());

    liveTime.innerText = `${hour}:${minute}:${second}`;
}

setInterval(updateLiveTime, 1000);

function addZero(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);            
            alertdiv.className='alert alert-warning';
            alertdiv.innerHTML=`Alarm scheduled on ${timeToAlarm}`;
            // alert('Alarm set');
            // alarmBox.append(alertdiv);
        }
    }else{
        alert("Please select the date and time")
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alertdiv.innerHTML=`Alarm Off. `;
        // alert('Alarm cleared');
    }
    document.getElementById('alarm-time').value="";
}