//AJAX call

var empData = [];
$.ajax({
    url: 'http://localhost:8081/get/data/productData',
    method: 'GET',
    dataType: 'JSON',
    data: {},
    success: function(response) {
        console.log("successfully contacted with empData");
        console.log(response)
        empData = response.empDetails;
        for (let i = 0; i < empData.length; i++) {
            renderEmpDetails(empData[i]);
        }

    },
    error: function() {
        console.log("failed connection");
    }


});


function renderEmpDetails(empData) {
    var box1 = $("#box1");

    var divTag = $("<div></div>").addClass("empDetails");
    divTag.addClass("empBox")
    box1.append(divTag);

    var liTag1 = $("<li></li>").text('Name:' + empData.name);
    divTag.append(liTag1);


    var liTag2 = $("<li></li>").text('Gender:' + empData.gender);
    divTag.append(liTag2);


    var liTag3 = $("<li></li>").text('Dept:' + empData.dept);
    divTag.append(liTag3);

    var liTag4 = $("<li></li>").text('Id no.:' + empData.idno);
    divTag.append(liTag4);

    var liTag5 = $("<li></li>").text('Basic Salary:' + empData.basicSalary);
    divTag.append(liTag5);








}