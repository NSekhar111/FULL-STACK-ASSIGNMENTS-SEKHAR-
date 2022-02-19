var onClick = () => {

    var dice = new throwDice;
    dice.ranNum();

    setInterval(time = () => {
        dice.removeAnimate();
    }, 3000)


}

class throwDice {
    constructor() {
        var diceAnimation = document.querySelector("#dice");
        diceAnimation.setAttribute("class", "animate")
    }
    ranNum() {
        var randomNumber = (Math.random() * 6) + 1;
        randomNumber = Math.floor(randomNumber);
        var diceNum = document.querySelector("#dice").innerHTML = randomNumber;

    }
    removeAnimate() {
        console.log("hello remove")
        document.querySelector("#dice").removeAttribute('class', 'animate');
        document.querySelector("#dice").setAttribute("class", "dice");
    }
}


var hover = () => {
    document.querySelector("#throwButton").setAttribute('class', 'throwDice buttonHover');
}
var notHover = () => {
    document.querySelector("#throwButton").removeAttribute('class', ' buttonHover');
    document.querySelector("#throwButton").setAttribute('class', 'throwDice');
}