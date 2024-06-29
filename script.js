let [seconds, minutes, hours] = [0,0,0];

let displayTime = document.getElementById('displayTime');

function stopWatch() {
    setInterval(() => {
        if(minutes < 59) {
            if(seconds < 59) {
                seconds+=1; 
            } else {
                seconds = 0;
                minutes+=1;
            }
        } else {
            minutes = 0;
            hours+=1;
        }        
        
        console.log(hours, minutes, seconds);

        display(seconds, minutes, hours);
    }, 1000);
}


function display(seconds, minutes, hours) {
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    
    displayTime.innerHTML = `${hours}:${minutes}:${seconds}`;
}