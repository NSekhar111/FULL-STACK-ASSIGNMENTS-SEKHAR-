var readData = function() {

    var name = document.querySelector("#empName").value;
    var gender = document.querySelector("input[name=empGender]:checked").value;
    var dept = document.querySelector("#empDept").value;
    var idNo = document.querySelector("#empIdNo").value;
    var basicSalary = document.querySelector("#empBs").value;
    basicSalary = parseInt(basicSalary);
    var PF = 0.14 * basicSalary;
    PF = parseInt(PF);
    var HRA = 0.25 * basicSalary;
    HRA = parseInt(HRA);
    var TotalSalary = PF + HRA + basicSalary;
    console.log(TotalSalary)

    if (gender === 'Male') {
        if (TotalSalary >= 500000) {
            tax = "Tax percent is 15%";
        } else if (TotalSalary >= 300000 && TotalSalary <= 500000) {
            tax = "Tax percent is 10%";
        }
        if (TotalSalary >= 100000 && TotalSalary <= 300000) {
            tax = "Tax percent is 5%";
        } else if (TotalSalary <= 100000) {
            tax = "NO TAX!!";
        }
    }

    if (gender === 'Female') {
        if (TotalSalary >= 500000) {
            tax = "Tax percent is 10%";
        } else if (TotalSalary >= 300000 && TotalSalary <= 500000) {
            tax = "Tax percent is 5%";
        } else {
            tax = "NO TAX!!";
        }
    }


    generateTable(name, gender, dept, idNo, basicSalary, PF, HRA, TotalSalary);
    onPage(name, gender, dept, idNo, basicSalary, PF, HRA, TotalSalary);
    tax(TotalSalary, gender);

}

function onPage(name, gender, dept, idNo, basicSalary, PF, HRA, TotalSalary) {
    document.querySelector("#empNameP").innerHTML = name
    document.querySelector("#empGenderP").innerHTML = gender;
    document.querySelector("#empDeptP").innerHTML = dept;
    document.querySelector("#empidNoP").innerHTML = idNo;
    document.querySelector("#empBsP").innerHTML = basicSalary;
    document.querySelector("#empPF").innerHTML = PF;
    document.querySelector("#empHRA").innerHTML = HRA;
    document.querySelector("#empTotalSal").innerHTML = TotalSalary;

}




function generateTable(name, gender, dept, idNo, basicSalary, PF, HRA, TotalSalary) {

    //creating <table> and <tbody> element
    var tableTag = document.createElement('table');
    // set style of table
    tableTag.style.border = "1px solid";
    tableTag.style.cellpadding = "10px";
    tableTag.setAttribute("class", "pcBox")

    tableTag.setAttribute('border', '2');
    var tbodyTag = document.createElement('tbody');
    //creating all row 1 and cell elements 
    var row1 = document.createElement("tr");
    var cell11 = document.createElement('td');
    var cell11text = document.createTextNode('Name');
    var cell12 = document.createElement('td');
    var cell12text = document.createTextNode(name);
    cell12.setAttribute('id', 'empNameP');
    cell12.setAttribute('colspan', '5');



    // appending row1 and cell elements
    cell11.appendChild(cell11text);
    row1.appendChild(cell11);
    cell12.appendChild(cell12text);
    row1.appendChild(cell12);
    tbodyTag.appendChild(row1);

    //creating all row 2 and cell elements 
    var row2 = document.createElement("tr");
    var cell21 = document.createElement('td');
    var cell21text = document.createTextNode('Gender');
    var cell22 = document.createElement('td');
    var cell22text = document.createTextNode(gender);
    cell22.setAttribute('id', 'empGenderP');
    cell22.setAttribute('colspan', '5');
    // appending row2 and cell elements
    cell21.appendChild(cell21text);
    row2.appendChild(cell21);
    cell22.appendChild(cell22text);
    row2.appendChild(cell22);
    tbodyTag.appendChild(row2);

    //creating all row3 and cell elements 
    var row3 = document.createElement("tr");
    var cell31 = document.createElement('td');
    var cell31text = document.createTextNode('Dept');
    var cell32 = document.createElement('td');
    var cell32text = document.createTextNode(dept);
    cell32.setAttribute('id', 'empDeptP');
    cell32.setAttribute('colspan', '5');
    // appending row3 and cell elements
    cell31.appendChild(cell31text);
    row3.appendChild(cell31);
    cell32.appendChild(cell32text);
    row3.appendChild(cell32);
    tbodyTag.appendChild(row3);

    //creating all row4 and cell elements 
    var row4 = document.createElement("tr");
    var cell41 = document.createElement('td');
    var cell41text = document.createTextNode('Id No.');
    var cell42 = document.createElement('td');
    var cell42text = document.createTextNode(idNo);
    cell42.setAttribute('id', 'empidNoP');
    cell42.setAttribute('colspan', '5');

    // appending row4 and cell elements
    cell41.appendChild(cell41text);
    row4.appendChild(cell41);
    cell42.appendChild(cell42text);
    row4.appendChild(cell42);



    //creating all row5 and cell elements 
    var row5 = document.createElement("tr");
    var cell51 = document.createElement('td');
    var cell51text = document.createTextNode('Basic Salary');
    var cell52 = document.createElement('td');
    var cell52text = document.createTextNode(basicSalary);
    cell52.setAttribute('id', 'empBsP');
    cell52.setAttribute('colspan', '5');

    // appending row5 and cell elements
    cell51.appendChild(cell51text);
    row5.appendChild(cell51);
    cell52.appendChild(cell52text);
    row5.appendChild(cell52);
    tbodyTag.appendChild(row5);



    //creating all row6 and cell elements 
    var row6 = document.createElement("tr");
    var cell61 = document.createElement('td');
    var cell61text = document.createTextNode('PF');
    var cell62 = document.createElement('td');
    var cell62text = document.createTextNode(PF);
    cell62.setAttribute('id', 'empPF');
    cell62.setAttribute('colspan', '5');

    // appending row6 and cell elements
    cell61.appendChild(cell61text);
    row6.appendChild(cell61);
    cell62.appendChild(cell62text);
    row6.appendChild(cell62);
    tbodyTag.appendChild(row6);


    //creating all row7 and cell elements 
    var row7 = document.createElement("tr");
    var cell71 = document.createElement("td");
    var cell71text = document.createTextNode('HRA');
    var cell72 = document.createElement('td');
    var cell72text = document.createTextNode(HRA);
    cell72.setAttribute('id', 'empHRA');
    cell72.setAttribute('colspan', '5');

    // appending row7 and cell elements
    cell71.appendChild(cell71text);
    row7.appendChild(cell71);
    cell72.appendChild(cell72text);
    row7.appendChild(cell72);
    tbodyTag.appendChild(row7);

    //creating all row8 and cell elements 
    var row8 = document.createElement("tr");
    var cell81 = document.createElement('td');
    var cell81text = document.createTextNode('Total Salary');
    var cell82 = document.createElement('td');
    var cell82text = document.createTextNode(TotalSalary);
    cell82.setAttribute('id', 'empTotalSal');
    cell82.setAttribute('colspan', '5');

    // appending row8 and cell elements
    cell81.appendChild(cell81text);
    row8.appendChild(cell81);
    cell82.appendChild(cell82text);
    row8.appendChild(cell82);
    tbodyTag.appendChild(row8);



    //creating all row9 and cell elements 
    var row9 = document.createElement("tr");
    var cell91 = document.createElement('td');
    var cell91text = document.createTextNode('Tax');
    var cell92 = document.createElement('td');
    var cell92text = document.createTextNode(tax);
    //cell92.setAttribute('id', 'empTax');
    cell92.setAttribute('colspan', '5');

    // appending row9 and cell elements
    cell91.appendChild(cell91text);
    row9.appendChild(cell91);
    cell92.appendChild(cell92text);
    row9.appendChild(cell92);
    tbodyTag.appendChild(row9);

    //put the tbodyTag <tbody> into the <table>
    tableTag.appendChild(tbodyTag);
    console.log(tableTag)



    //append the table into table #rBloack
    document.querySelector("#rPc").appendChild(tableTag)
}

readData();