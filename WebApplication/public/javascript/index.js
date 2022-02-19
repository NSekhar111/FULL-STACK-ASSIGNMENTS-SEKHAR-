var validateUserDetails = () => {
    var udata = {};
    udata.userId = $("#userId").val();
    udata.userPwd = $("#userPwd").val();
    $(".loginError").hide()
    $.ajax({
        url: 'http://localhost:8081/validate/loginDetails',
        method: 'POST',
        dataType: 'JSON',
        data: udata,
        success: (response) => {
            if (response.status == 'Valid') {
                loadPage('prodDetails');
            } else {
                $(".loginError").show().html("<b>Invalid credentials, plz check and reenter</b>");
            }
        },
        error: (error) => {

        }
    });
}

var loadPage = (type) => {
    var templateUrl = '';
    switch (type) {
        case 'login':
            templateUrl = '/templates/login.htm';
            break;
        case 'fgpwd':
            templateUrl = '/templates/forgotpwd.htm';
            break;
        case 'newsignup':
            templateUrl = '/templates/newSignup.htm';
            break;
        case 'prodDetails':
            templateUrl = '/templates/prodDetails.htm';
            break;
    }
    loadPageTemplate(templateUrl, type);
}

var loadPageTemplate = (templateUrl, type) => {
    $.ajax({
        url: templateUrl,
        method: 'GET',
        success: (templateResponse) => {
            $("main").html(templateResponse);
            if (type == 'prodDetails') {
                loadProductDetailsToPage();
            }
        }
    });
}
var productTemplate;

var loadProductDetailsToPage = () => {
    $.ajax({
        url: 'templates/productData_tmplt.htm',
        method: 'GET',
        success: (res) => {
            console.log("Response");
            console.log(res);
            productTemplate = Handlebars.compile(res);
            getProductDetails();
        }
    });
}

var getProductDetails = () => {
    $.ajax({
        url: '/get/productDetails',
        method: 'GET',
        dataType: 'JSON',
        success: (response) => {
            console.log(response);
            response.productDataList.forEach(product => {
                $(".productDetilscontainer").append(productTemplate(product));

            });
        }
    })
}

loadPage('login');




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
    $("#userId").val(cache.name);
    $("#userPwd").val(cache.psw);
}


var userDetails = () => {
    var data = {};
    data.name = $("#userId").val();
    data.psw = $("#userPwd").val();

    if ($("#checkBox:checked").length && data.name != '' && data.psw != '') {
        //saving the details into the loca storage 
        localStorage.setItem('user_name', data.name);
        localStorage.setItem('user_psw', data.psw)
    } else {
        localStorage.clear('user_name')
    }
}

// //login button click js
var loginBtn = $("#loginBtn").click(userDetails);

//show password

var count = 0;
var show = document.querySelector("#showPsw").addEventListener('click', () => {
    count++

    var data = {};
    data.name = $("#userId").val();
    data.psw = $("#userPwd").val();

    if (count % 2 == 0) {
        $("#showPsw").html('&#128584');
        $("#userId").attr('type', 'password')
    } else {
        $("#showPsw").html('&#128585');
        $("#userId").removeAttr('type', 'password')
    }

})