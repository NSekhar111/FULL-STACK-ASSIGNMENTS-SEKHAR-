//sec hand

var pendulum = () => {
    $("#pendulum").attr('style', 'animation : pendulum  1s infinite')

}

var secHand = () => {
    var date = new Date;
    var sec = date.getSeconds();
    var angle = (sec / 60) * 360 + 'deg';
    document.querySelector("#secHand").style.transform = `rotate(${angle})`;
    document.querySelector("#sec").innerHTML = sec + ' sec'
    pendulum();
}
setInterval(() => {
    secHand();

}, 1000)

//min hand
var minHand = () => {
    var date = new Date;
    var min = date.getMinutes();
    var angle = (min / 360) * 360 + 'deg';
    document.querySelector("#minHand").style.transform = `rotate(${angle})`;
    document.querySelector("#min").innerHTML = min + ' min'

}
setInterval(() => {
    minHand();
}, 1000)

//Hour hand
var hourHand = () => {
    var date = new Date;
    var hour = date.getHours();
    if (hour == 13) {
        hour = 1
    }
    if (hour == 14) {
        hour = 2
    }
    if (hour == 15) {
        hour = 3
    }
    if (hour == 16) {
        hour = 4
    }
    if (hour == 17) {
        hour = 5
    }
    if (hour == 18) {
        hour = 6
    }
    if (hour == 19) {
        hour = 7
    }
    if (hour == 20) {
        hour = 8
    }
    if (hour == 21) {
        hour = 9
    }
    if (hour == 22) {
        hour = 10
    }
    if (hour == 23) {
        hour = 11
    }
    if (hour == 24) {
        hour = 12
    }

    var angle = hour * 30 + 'deg';
    document.querySelector("#hourHand").style.transform = `rotate(${angle})`;
    document.querySelector("#hour").innerHTML = hour + 'hr'

}
setInterval(() => {
    hourHand();
}, 1000)