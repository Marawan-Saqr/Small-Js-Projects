//The end of the year date to countdown to
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();


let counter = setInterval(() => {
    //Get Date Now
    let dateNow = new Date().getTime();
    //Find the difference between now and the countdown date
    let dateDiff = countDownDate - dateNow;
    //Get Time Units
    // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

    //When timer finished
    if (dateDiff < 0 ) {
        clearInterval(counter);
        console.log("Finished");
    }
}, 1000)