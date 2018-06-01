function addText() {
    paragraph.textContent = "Akademia 108.";
}

var paragraph = document.getElementById("opis");
var button = document.querySelector("button");
button.onclick = function() {addText()};

