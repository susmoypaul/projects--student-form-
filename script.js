

function addInfo(){
    var name = document.getElementById("name").value
    var rollNumber = document.getElementById("rollNumber").value
    var department = document.getElementById("department").value
    var batch = document.getElementById("batch").value
    var address = document.getElementById("address").value
    var email = document.getElementById("email").value

    var table = document.getElementById("studentTable").
    getElementsByTagName('tbody')[0];

    
    var newRow=table.insertRow(0);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    
    cell1.innerHTML = name;
    cell2.innerHTML = rollNumber;
    cell3.innerHTML = department;
    cell4.innerHTML = batch;
    cell5.innerHTML = address;
    cell6.innerHTML = email;
}