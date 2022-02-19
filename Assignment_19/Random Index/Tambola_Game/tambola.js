var numbers = () => {
    for (i = 1; i < 100; i++) {
        // creating new number block
        var numberOnBoard = document.createElement("div");
        numberOnBoard.setAttribute('class', `number`);
        numberOnBoard.setAttribute('id', `number${i}`);

        //adding the number block inside the number board
        document.querySelector("#numberBox").appendChild(numberOnBoard);
        document.querySelector(`#number${i}`).innerHTML = i;
    }



}
numbers();

var pickedValues = [];

class throwDice {
    constructor() {

    }
    ranNum() {

        //creating random number
        var randomNumber = (Math.random() * 99) + 1;
        randomNumber = Math.floor(randomNumber);
        var diceNum = document.querySelector("#dice").innerHTML = randomNumber;


        this.checkRepeat();

        //saving the picked numbers
        pickedValues.push(randomNumber);
        console.log(pickedValues)



        //highlighting the number
        var numberHighlight = document.querySelector(`#number${randomNumber}`);
        numberHighlight.setAttribute('class', 'number highlight')



    }
    checkRepeat() {

        for (let j = 0; j < pickedValues.length; j++) {
            if (this.randomNumber != pickedValues[j]) {

                console.log("New print");


            } else {
                console.log("repeat");

            }
        }


    }
}


var onClick = () => {

    var dice = new throwDice;
    dice.ranNum();
}

var hover = () => {
    document.querySelector("#throwButton").setAttribute('class', 'throwDice buttonHover');
}
var notHover = () => {
    document.querySelector("#throwButton").removeAttribute('class', ' buttonHover');
    document.querySelector("#throwButton").setAttribute('class', 'throwDice');
}