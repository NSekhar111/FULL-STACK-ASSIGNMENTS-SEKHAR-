//states
var indState = ['Ap', 'Odisha', 'Karnataka', 'Jammu'];
var ausState = ['Melbourne', 'Whales', 'Victoria', 'Queensland'];
var americaState = ['NewYork', 'WashingtonDC', 'Texas', 'California'];
var japanState = ['Hiroshima', 'Nagasaki', 'Hokkaido', 'Tokyo'];



function state(pickedCountry) {

    var i = pickedCountry;

    if (i == 'India') {
        $("#ind").click(states(i));
        document.querySelector("#flag").style.backgroundImage = "url('https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg')";
    }
    if (i == 'Japan') {
        $("#jap").click(states(i));
        document.querySelector("#flag").style.backgroundImage = "url('https://img5.goodfon.com/wallpaper/nbig/b/e8/japan-flag-flag-of-japan-japanese-flag-japan-large-flag.jpg')";
    }

    if (i == 'Australia') {
        $("#aus").click(states(i));
        document.querySelector("#flag").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/800px-Flag_of_Australia.svg.png')";
    }

    if (i == 'America') {
        $("#us").click(states(i));
        document.querySelector("#flag").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png')";
    }

}



//creating dynamic state drop down
var cPick = () => {
    var pickedCountry = $("#cPick").val()
    state(pickedCountry)

}

//states

function states(i) {


    if (i == 'India') {
        state = indState
    } else if (i == 'Australia') {
        state = ausState
    } else if (i == 'America') {
        state = americaState
    } else if (i == 'Japan') {
        state = japanState
    }


    //finding state box
    var stateDropDown = $("#sPick");
    stateDropDown.show()
        //creating options
    var op1 = document.createElement("option");
    op1.innerHTML = 'State';
    stateDropDown.append(op1)

    var op2 = document.createElement("option");
    op2.innerHTML = "";
    op2.setAttribute('disabled', 'true')
    stateDropDown.append(op2);

    var op3 = document.createElement("option");
    op3.innerHTML = state[0];
    op3.setAttribute('id', `${i}`)
    stateDropDown.append(op3)

    var op4 = document.createElement("option");
    op4.innerHTML = state[1];
    op4.setAttribute('id', `${i}`)
    stateDropDown.append(op4)

    var op5 = document.createElement("option");
    op5.innerHTML = state[2];
    op5.setAttribute('id', `${i}`)
    stateDropDown.append(op5)

    var op6 = document.createElement("option");
    op6.innerHTML = state[3];
    op6.setAttribute('id', `${i}`)
    stateDropDown.append(op6)


}


//cities
var indCity = {
    Ap: ['Vizag', 'Hyderabad', 'Kakinada', 'Srikakulam'],
    Odisha: ['Berhampur', 'Bhubaneswar', 'Cuttack', 'Puri'],
    Karnataka: ['Udupi', 'Mangalore', 'Bangalore', 'Mysuru'],
    Jammu: ['Uri', 'Srinagar', 'Anantnag', 'Ichgam'],

}

var ausCity = {
    Melbourne: ['Frankson', 'Portsea', 'geoland', 'Melton'],
    Whales: ['New south whales', 'New south whales capital', 'Whales australia east cost', 'NSW'],
    Victoria: ['Geelong', 'Ballart', 'Bendigo', 'Mildura'],
    Queensland: ['Wodonga', 'Taralgon', 'Warrnambool', 'Shepparton'],

}

var japCity = {
    Hiroshima: ['Fukuyama', 'Kure', 'Onomichi', 'Miyoshi'],
    Nagasaki: ['shobara', 'Kaita', 'Otake', 'Takehara'],
    Hokkaido: ['Etajima', 'Sera', 'Saka', 'Kumano'],
    Tokyo: ['Fuchu', 'Mihara', 'Hatsukaichi', 'Higashihiroshima'],

}

var ameCity = {
    NewYork: ['Albany', 'Beacon', 'Cohoew', 'Dunkirk'],
    WashingtonDC: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver'],
    Texas: ['Austin', 'Dallas', 'San Antonio', 'Oklahama ciy'],
    California: ['Newcastle', 'Cairns', 'Darwin', 'Mackay'],

}

//creating dynamic city drop down

var sPick = () => {
    var pickedState = $("#sPick").val();
    city(pickedState);
}


function city(j) {

    if (j == 'Ap') {
        city = indCity[j];
    } else if (j == 'Odisha') {
        city = indCity[j];
    } else if (j == 'Karnataka') {
        city = indCity[j];
    } else if (j == 'Jammu') {
        city = indCity[j];
    } else if (j == 'Hiroshima') {
        city = japCity[j];
    } else if (j == 'Nagasaki') {
        city = japCity[j];
    } else if (j == 'Hokkaido') {
        city = japCity[j];
    } else if (j == 'Tokyo') {
        city = japCity[j];
    } else if (j == 'Melbourne') {
        city = ausCity[j];
    } else if (j == 'Whales') {
        city = ausCity[j];
    } else if (j == 'Victoria') {
        city = ausCity[j];
    } else if (j == 'Queensland') {
        city = ausCity[j];
    } else if (j == 'NewYork') {
        city = ameCity[j];
    } else if (j == 'WashingtonDC') {
        city = ameCity[j];
    } else if (j == 'Texas') {
        city = ameCity[j];
    } else if (j == 'California') {
        city = ameCity[j];
    }


    //finding city box
    var cityDropDown = $("#cityPick");
    cityDropDown.show()
        //creating options
    var op1 = document.createElement("option");
    op1.innerHTML = "City"
    cityDropDown.append(op1)

    var op2 = document.createElement("option");
    op2.innerHTML = "";
    op2.setAttribute('disabled', 'true')
    cityDropDown.append(op2);

    var op3 = document.createElement("option");
    op3.innerHTML = city[0];
    cityDropDown.append(op3)

    var op4 = document.createElement("option");
    op4.innerHTML = city[1];
    cityDropDown.append(op4)

    var op5 = document.createElement("option");
    op5.innerHTML = city[2];
    cityDropDown.append(op5)

    var op6 = document.createElement("option");
    op6.innerHTML = city[3];
    cityDropDown.append(op6)

}


//button hover css

//country
var hover = () => {
    document.querySelector("#cPick").setAttribute('class', 'buttonHover');
}
var notHover = () => {
    document.querySelector("#cPick").removeAttribute('class', ' buttonHover');
}

//state
var hoverState = () => {
    document.querySelector("#sPick").setAttribute('class', 'buttonHover');
}
var notHoverState = () => {
    document.querySelector("#sPick").removeAttribute('class', ' buttonHover');
}

//city
var hoverCity = () => {
    document.querySelector("#cityPick").setAttribute('class', 'buttonHover');
}
var notHoverCity = () => {
    document.querySelector("#cityPick").removeAttribute('class', ' buttonHover');
}