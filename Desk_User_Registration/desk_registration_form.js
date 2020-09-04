class User {
    constructor(name, number, address, age, email_id) {
        this.name = name
        this.mobileNumber = number
        this.address = address
        this.age = age
        this.email_id =email_id
    }
}
var userArray = [];

function insertValue(){
    var name = document.getElementById('name').value
    var mb_no = document.getElementById('mb_no').value;
    var address = document.getElementById('address').value;
    var age = document.getElementById('age').value;
    var email_id = document.getElementById('email-id').value
    var user = new User(name, mb_no, address, age, email_id)

    userArray.push(user)

    var table = document.getElementById("form_result");
    var row = table.insertRow(userArray.length);

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5)

    cell0.innerHTML = userArray.length;
    cell1.innerHTML = user.name;
    cell2.innerHTML = user.email_id;
    cell3.innerHTML = user.mobileNumber;
    cell4.innerHTML = user.address;
    cell5.innerHTML = user.age; 
}