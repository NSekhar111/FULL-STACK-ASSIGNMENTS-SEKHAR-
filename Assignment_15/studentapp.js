var readData = function() {

    var name = document.querySelector("#sName").value;
    var age = document.querySelector("#sAge").value;
    var gender = document.querySelector("input[name=sGender]:checked").value;
    var marksM = document.querySelector("#mathsMarks").value;
    marksM = parseInt(marksM);
    var marksP = document.querySelector("#phyMarks").value;
    marksP = parseInt(marksP);
    var marksC = document.querySelector("#chemmarks").value;
    marksC = parseInt(marksC);
    var marksB = document.querySelector("#bioMarks").value;
    marksB = parseInt(marksB);
    var marksG = document.querySelector("#geoMarks").value;
    marksG = parseInt(marksG);
    var total = marksM + marksP + marksC + marksB + marksG;
    var avg = total / 5;
    var grade;
    if (avg < 40) {
        grade = 'failed';
    } else if (avg > 40) {
        grade = 'passed';
    }

    generateTable(name, age, gender, marksM, marksP, marksC, marksB, marksG, total, avg, grade, body);
    onPage(name, age, gender, marksM, marksP, marksC, marksB, marksG, total, avg, grade, body);

}

function onPage(name, age, gender, marksM, marksP, marksC, marksB, marksG, total, avg, grade, body) {
    document.querySelector("#sNameP").innerHTML = name
    document.querySelector("#sAgeP").innerHTML = age
    document.querySelector("#sGenderP").innerHTML = gender;
    document.querySelector("#mathsMarksP").innerHTML = "Maths :" + marksM
    document.querySelector("#phyMarksP").innerHTML = "Phy :" + marksP
    document.querySelector("#chemmarksP").innerHTML = "Chem :" + marksC
    document.querySelector("#bioMarksP").innerHTML = "Bio :" + marksB
    document.querySelector("#geoMarksP").innerHTML = "Geo :" + marksG
    document.querySelector("#sTotal").innerHTML = total
    document.querySelector("#sAvg").innerHTML = avg
    document.querySelector("#sGrade").innerHTML = grade
}

function generateTable(name, age, gender, marksM, marksP, marksC, marksB, marksG, total, avg, grade, body) {
    var body = document.getElementsByTagName("body")[0];
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
    cell12.setAttribute('id', 'sNameP');
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
    var cell21text = document.createTextNode('Age');
    var cell22 = document.createElement('td');
    var cell22text = document.createTextNode(age);
    cell22.setAttribute('id', 'sAgeP');
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
    var cell31text = document.createTextNode('Gender');
    var cell32 = document.createElement('td');
    var cell32text = document.createTextNode(gender);
    cell32.setAttribute('id', 'sGenderP');
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
    var cell41text = document.createTextNode('Marks Obtained');
    var cell42 = document.createElement('td');
    var cell42text = document.createTextNode('Maths:' + marksM);
    var cell43 = document.createElement('td');
    var cell43text = document.createTextNode('Phy:' + marksP);
    var cell44 = document.createElement('td');
    var cell44text = document.createTextNode('Chem:' + marksC);
    var cell45 = document.createElement('td');
    var cell45text = document.createTextNode('Bio:' + marksB);
    var cell46 = document.createElement('td');
    var cell46text = document.createTextNode('Geo:' + marksG);
    // appending row4 and cell elements
    cell41.appendChild(cell41text);
    row4.appendChild(cell41);
    cell42.appendChild(cell42text);
    row4.appendChild(cell42);
    cell43.appendChild(cell43text);
    row4.appendChild(cell43);
    cell44.appendChild(cell44text);
    row4.appendChild(cell44);
    cell45.appendChild(cell45text);
    row4.appendChild(cell45);
    cell46.appendChild(cell46text);
    row4.appendChild(cell46);
    tbodyTag.appendChild(row4);



    //creating all row5 and cell elements 
    var row5 = document.createElement("tr");
    var cell51 = document.createElement('td');
    var cell51text = document.createTextNode('Total');
    var cell52 = document.createElement('td');
    var cell52text = document.createTextNode(total);
    cell52.setAttribute('id', 'sTotal');
    cell52.setAttribute('colspan', '5');

    // appending row4 and cell elements
    cell51.appendChild(cell51text);
    row5.appendChild(cell51);
    cell52.appendChild(cell52text);
    row5.appendChild(cell52);
    tbodyTag.appendChild(row5);



    //creating all row6 and cell elements 
    var row6 = document.createElement("tr");
    var cell61 = document.createElement('td');
    var cell61text = document.createTextNode('Average');
    var cell62 = document.createElement('td');
    var cell62text = document.createTextNode(avg);
    cell62.setAttribute('id', 'sAvg');
    cell62.setAttribute('colspan', '5');

    // appending row4 and cell elements
    cell61.appendChild(cell61text);
    row6.appendChild(cell61);
    cell62.appendChild(cell62text);
    row6.appendChild(cell62);
    tbodyTag.appendChild(row6);


    //creating all row7 and cell elements 
    var row7 = document.createElement("tr");
    var cell71 = document.createElement('td');
    var cell71text = document.createTextNode('Grade');
    var cell72 = document.createElement('td');
    var cell72text = document.createTextNode(grade);
    cell72.setAttribute('id', 'sGrade');
    cell72.setAttribute('colspan', '5');

    // appending row4 and cell elements
    cell71.appendChild(cell71text);
    row7.appendChild(cell71);
    cell72.appendChild(cell72text);
    row7.appendChild(cell72);
    tbodyTag.appendChild(row7);





    //put the tbodyTag <tbody> into the <table>
    tableTag.appendChild(tbodyTag);
    console.log(tableTag)



    //append the table into table #rBloack
    document.querySelector("#rPc").appendChild(tableTag)



}

readData();