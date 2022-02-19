$("#table").hide()

var array = [];

var count = 0

var addBtn = (event) => {

    //getting values into json
    var data = {};
    data.name = $("#name").val();
    data.age = $("#age").val();
    data.gender = $("input[name=gender]:checked").val();
    data.country = $("#cPick").val();

    var tbody = $("tbody");
    if (data.name != '') {
        $("#table").show()

        count++;
        var i = count;

        array.push(data);
        //creating row
        var tr = document.createElement("tr");
        tr.setAttribute('id', `row${i}`)

        //creating cell

        //serNo
        var serNo = document.createElement("td");
        serNo.innerHTML = i;
        serNo.setAttribute("id", `serNo${i}`);

        //name
        var name = document.createElement("td");
        name.setAttribute('id', `name${i}`)
        name.innerHTML = data.name


        //age
        var age = document.createElement("td");
        age.innerHTML = data.age
        age.setAttribute('id', `age${i}`)

        //gender
        var gender = document.createElement("td");
        gender.innerHTML = data.gender
        gender.setAttribute('id', `gender${i}`)

        //country
        var country = document.createElement("td");
        country.innerHTML = data.country
        country.setAttribute('id', `country${i}`)

        //operation
        var operations = document.createElement("td");

        //edit button
        var editBtn = document.createElement("input");
        editBtn.setAttribute('type', 'button');
        editBtn.setAttribute('value', 'Edit');
        editBtn.setAttribute('id', `editBtn${i}`);
        //on clicking edit button
        editBtn.addEventListener('click', () => {
            $("#name").val(array[i - 1].name);
            $("#age").val(array[i - 1].age);
            $("input[name=gender]:checked").val(array[i - 1].gender);
            $("#cPick").val(array[i - 1].country);
            $("#addButton").hide()
                //creating save button
            var saveBtn = document.createElement('input');
            saveBtn.setAttribute('type', 'button');
            saveBtn.setAttribute('id', `saveBtn${i}`);
            saveBtn.setAttribute('value', 'Save')
                //saveBtn.addClass('saveBtn');
            $("#ulTag").append(saveBtn);
            //on clicking save button
            saveBtn.addEventListener('click', () => {
                //taling new data
                data.name = $("#name").val();
                data.age = $("#age").val();
                data.gender = $("input[name=gender]:checked").val();
                data.country = $("#cPick").val();
                //replacing with new data
                array[i - 1].name = data.name;
                array[i - 1].age = data.age;
                array[i - 1].gender = data.gender;
                array[i - 1].country = data.country;
                //printing new data
                name.innerHTML = array[i - 1].name;
                age.innerHTML = array[i - 1].age;
                gender.innerHTML = array[i - 1].gender;
                country.innerHTML = array[i - 1].country;

                //clearing input values
                $("#name").val('');
                $("#age").val('');
                $("input[name=gender]:checked").val('');
                $("#cPick").val('Select');

                //hiding save button and showing add button
                $(`#saveBtn${i}`).remove();
                $("#addButton").show()
            })

        })

        operations.append(editBtn);

        //delete button
        var deleteBtn = document.createElement("input");
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.setAttribute('value', 'Delete');
        deleteBtn.setAttribute('id', `deleteBtn${i}`);
        deleteBtn.addEventListener('click', () => {
            $(`#row${i}`).remove();
        })
        operations.append(deleteBtn);

        //appending cells to the row
        tr.append(serNo)
        tr.append(name)
        tr.append(age)
        tr.append(gender)
        tr.append(country)
        tr.append(operations)
        tbody.append(tr)

        //removing values from input box on click add button
        $("#name").val('');
        $("#age").val('');
        $("input[name=gender]:checked") = false;
        $("#cPick").val('Select');
    }
}


//validation
var error = $("#error");
error.hide()


var validation = (event) => {

    var age = $("#age").val()
    if (age.length > 1) {
        error.show()
    } else { error.hide() }
}