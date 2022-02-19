//on load of the page
if (localStorage.getItem('user_name') != null) {
    var cache = {}
    cache.name = localStorage.getItem('user_name');
    cache.psw = localStorage.getItem('user_psw');

    onLoad(cache);
} else {
    var checkBox = $("#checkBox");
    checkBox.removeAttr('checked');
}

function onLoad(cache) {
    $("#userName").val(cache.name);
    $("#userPsw").val(cache.psw);
}


var userDetails = () => {
    var data = {};
    data.name = $("#userName").val();
    data.psw = $("#userPsw").val();

    if ($("#checkBox:checked").length && data.name != '' && data.psw != '') {
        //saving the details into the loca storage 
        localStorage.setItem('user_name', data.name);
        localStorage.setItem('user_psw', data.psw)
    } else {
        localStorage.clear('user_name')
    }
}

//login button click js
var loginBtn = $("#loginBtn").click(userDetails);




//show password

var count = 0;
var show = document.querySelector("#showPsw").addEventListener('click', () => {

    count++

    var data = {};
    data.name = $("#userName").val();
    data.psw = $("#userPsw").val();

    if (count % 2 == 0) {
        $("#showPsw").html('&#128584');
        $("#userPsw").attr('type', 'password')
    } else {
        $("#showPsw").html('&#128585');
        $("#userPsw").removeAttr('type', 'password')
    }

})

//button hover css
var hover = () => {
    document.querySelector("#loginBtn").setAttribute('class', 'buttonHover');
}
var notHover = () => {
    document.querySelector("#loginBtn").removeAttribute('class', ' buttonHover');
}