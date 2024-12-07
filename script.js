const endDate = new Date("24 Nov,2024 20:00:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer(){
    const currDate = new Date().getTime();

    const distanceCovered = currDate - startDate;
    const distancePending = endDate - currDate;

    const days = Math.floor(distancePending/(24*60*60*1000));
    const hrs = Math.floor((distancePending%(24*60*60*1000))/(60*60*1000));
    const mins = Math.floor((distancePending%(60*60*1000))/(60*1000));
    const secs = Math.floor((distancePending%(60*1000))/(1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;

    document.querySelector("#progress-bar").style.width = percentageDistance + "%";

    if(distancePending<0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.querySelector("#progress-bar").style.width = "100%";
    }
},1000);