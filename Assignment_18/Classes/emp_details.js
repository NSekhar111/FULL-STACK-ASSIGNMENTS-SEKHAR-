class EmployeeDetails {
    constructor(data) {
        this.name = data.name;
        this.gender = data.gender;
        this.dept = data.dept;
        this.idNo = data.idNo;
        this.basicSalary = data.basicSalary;
        this.PF = data.PF;
        this.HRA = data.HRA;
        this.TotalSalary = data.TotalSalary;

    }

    onPage() {
        document.getElementById("#empNameP").innerHTML = this.name;
        document.querySelector("#empGenderP").innerHTML = this.gender;
        document.querySelector("#empDeptP").innerHTML = this.dept;
        document.querySelector("#empidNoP").innerHTML = this.idNo;
        document.querySelector("#empBsP").innerHTML = this.basicSalary;
        document.querySelector("#empPF").innerHTML = this.PF;
        document.querySelector("#empHRA").innerHTML = this.HRA;
        document.querySelector("#empTotalSal").innerHTML = this.TotalSalary;
        this.tax();

    }

    tax() {

        var tax;
        if (this.gender === 'Male') {
            if (this.TotalSalary >= 500000) {
                tax = "Tax percent is 15%";
                document.querySelector("#empTax").innerHTML = tax
            } else if (this.TotalSalary >= 300000 && TotalSalary <= 500000) {
                tax = "Tax percent is 10%";
                document.querySelector("#empTax").innerHTML = tax
            }
            if (this.TotalSalary >= 100000 && TotalSalary <= 300000) {
                tax = "Tax percent is 5%";
                document.querySelector("#empTax").innerHTML = tax
            } else if (this.TotalSalary <= 100000) {
                tax = "NO TAX!!";
                document.querySelector("#empTax").innerHTML = tax
            }
        }

        if (this.gender === 'Female') {
            if (this.TotalSalary >= 500000) {
                tax = "Tax percent is 10%";
                document.querySelector("#empTax").innerHTML = tax
            } else if (this.TotalSalary >= 300000 && TotalSalary <= 500000) {
                tax = "Tax percent is 5%";
                document.querySelector("#empTax").innerHTML = tax
            } else {
                tax = "NO TAX!!";
                document.querySelector("#empTax").innerHTML = tax
            }
        }
    }
}
var studentInfo = [];

var generateTaxDetails = () => {

    document.querySelector("#printTable").style.display = "block"

    var data = {}
    data.name = document.querySelector("#empName").value;
    data.gender = document.querySelector("input[name=empGender]:checked").value;
    data.dept = document.querySelector("#empDept").value;
    data.idNo = document.querySelector("#empIdNo").value;
    data.basicSalary = document.querySelector("#empBs").value;
    basicSalary = parseInt(data.basicSalary);
    data.PF = 0.14 * basicSalary;
    PF = parseInt(data.PF);
    data.HRA = 0.25 * basicSalary;
    HRA = parseInt(data.HRA);
    data.TotalSalary = PF + HRA + basicSalary;



    var s1 = new EmployeeDetails(data);
    s1.onPage();
    studentInfo.push(s1);
    console.log(studentInfo)
}






function doValidateName(event) {
    x = event.charCode;

    if (x >= 65 && x <= 90) {
        return true;
    }
    document.querySelector('#nameErr').innerHTML = '(Please enter only in Caps without any special characters)'

    return false;
}

function doValidateDept(event) {
    x = event.charCode;

    if (x >= 65 && x <= 90) {
        return true;
    }

    document.querySelector('#deptErr').innerHTML = '(Please enter only in Caps without any special characters)'
    return false;
}