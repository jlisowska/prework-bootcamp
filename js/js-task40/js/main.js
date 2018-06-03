function getData(){
    var fname = document.getElementById("fname");
    document.getElementById("name").textContent = fname.value;
    var lname = document.getElementById("lname");
    document.getElementById("surname").textContent = lname.value;
    var phone = document.getElementById("phone");
    document.getElementById("phone-number").textContent = phone.value;
}

var button = document.getElementById("button");
button.onclick = function() {getData()};