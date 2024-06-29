let [seconds, minutes, hours] = [0,0,0];

let displayTime = document.getElementById('displayTime');

function stopWatch() {
    setInterval(() => {
        if(minutes < 60) {
            if(seconds < 60) {
                seconds+=1; 
            } else {
                seconds = 0;
                minutes+=1;
            }
        } else {
            minutes = 0;
            hours+=1;
        }
        displayTime.innerHTML = `${hours} : ${minutes} : ${seconds}`;
        
        
        console.log(hours, minutes, seconds);
    }, 1000);
}

