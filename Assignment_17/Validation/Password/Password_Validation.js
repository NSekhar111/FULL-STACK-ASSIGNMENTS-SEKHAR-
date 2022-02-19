/* var input = document.getElementsByName('body');
input.onkeydown = function(event) {
    alert("bakespace")
    var key = event.keyCode || event.charCode || event.which;
    if (key == 8) {
        alert("bakespace")
    }
}


 */
var doValidate = (event) => {

    



    /* var x = event.charCode
    console.log(x) */




    var psw = document.querySelector("#password").value;
    psw = String(psw)
        //console.log(psw)


        




    for (i = 0; i < psw.length; i++) {

        //highlight 1)
        var light1 = document.querySelector("#one");

        //checking for condition one,,total 8 characters
        light1.removeAttribute('class', 'highlight');

        var tick1 = document.querySelector("#tick1")
        document.querySelector("#tick1").innerHTML = "&#10004";
        tick1.style.display = 'none'

        if (psw.length == 7) {
            //console.log("from one")

            light1.setAttribute('class', 'highlight');



            tick1.style.display = 'block'

        } else if (psw.length > 7) {

            light1.removeAttribute('class', 'highlight');

            tick1.style.display = 'none'

        }

        //highlight 2)

        var light2 = document.querySelector("#two");
        light2.setAttribute('class', 'highlight');

        var tick2 = document.querySelector("#tick2")
        tick2.innerHTML = "&#10004";
        /* tick2.style.display = 'block' */

        //checking the first character if number .. 2)
        for (j = 48; j < 58; j++) {

            if (psw[0] == String.fromCharCode(j)) {
                light2.removeAttribute('class', 'highlight');


                tick2.style.display = 'none'
            }

        }


        //highlight 3)
        var light3 = document.querySelector("#three");
        light3.removeAttribute('class', 'highlight')

        var tick3 = document.querySelector("#tick3")
        tick3.innerHTML = "&#10004";
        tick3.style.display = 'none'

        //check for special characters in the string of password
        for (k = 0; k < 4; k++) {
            var specialChar = ["!", "@", "#", "$"];
            if (psw.includes(specialChar[k])) {
                light3.setAttribute('class', 'highlight')


                tick3.style.display = 'block'
            }
        }


        //highlight 4)
        var light4 = document.querySelector("#four");
        light4.removeAttribute('class', 'highlight');

        var tick4 = document.querySelector("#tick4")
        tick4.innerHTML = "&#10004";
        tick4.style.display = 'none'

        var upperCase = /[A-Z]/;
        const checkUpper = upperCase.test(psw);
        if (checkUpper == true) {
            light4.setAttribute('class', 'highlight');


            tick4.style.display = 'block'
        }


        //highlight 5)
        var light5 = document.querySelector("#five");
        light5.removeAttribute('class', 'highlight');

        var tick5 = document.querySelector("#tick5")
        tick5.innerHTML = "&#10004";
        tick5.style.display = 'none'



        //checking for if psw includes number or not

        var num = /\d+/;
        const checkNum = num.test(psw);
        if (checkNum == true) {
            light5.setAttribute('class', 'highlight');

            tick5.style.display = 'block'


        }

    }


}

var showPassword = () => {

    psw = document.querySelector("#password").value;
    console.log("show psw = " + psw)
    document.querySelector("#showPassword").innerHTML = psw;
}

var mouseover = () => {
    document.querySelector("#eye").setAttribute('title', 'click here to show password')
}


var count = 0;
var moreThan2 = (event, count) => {
   
    console.log("hi")


    var psw = document.querySelector("#password").value

    var light6 = document.querySelector("#five")

    var tick6 = document.querySelector("#tick5")
    tick6.innerHTML = "&#10004";

    //check condition 5 for more than two number.

    light6.removeAttribute('class', 'highlight');

    tick6.style.display = 'none'

    if (event.charCodeAt >= 48 && event.charCodeAt <= 57) {
        count++;
    }
    if (count == 1) {
        light6.setAttribute('class', 'highlight');

        tick6.style.display = 'block'
    } else if (count == 2) {
        light6.setAttribute('class', 'highlight');

        tick6.style.display = 'block'
    } else {
        
    }

}

var empty = () =>{

    
    var tick2 = document.querySelector("#tick2")
    tick2.innerHTML = "&#10004";
    tick2.style.display = 'block'


    var tick4 = document.querySelector("#tick4")
        tick4.innerHTML = "&#10004";
        


    var psw = document.querySelector("#password").value;
    if(psw == "" ){
        console.log("hi")
        document.querySelector("#one").removeAttribute('class', 'highlight');
        document.querySelector("#two").removeAttribute('class', 'highlight');
        tick2.style.display = 'none'
        document.querySelector("#three").removeAttribute('class', 'highlight');
        document.querySelector("#four").removeAttribute('class', 'highlight');
        tick4.style.display = 'none'

        document.querySelector("#five").removeAttribute('class', 'highlight');
    }
}

var validate = (event) =>{
doValidate(event);

empty();

}