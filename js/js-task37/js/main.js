function addText(){
    var textParagraph = document.getElementById("text");
    textParagraph.textContent = "Akademia 108";
}
function removeText(){
    var textParagraph = document.getElementById("text");
    textParagraph.textContent = "";
}

var add = document.getElementById("add");
var remove = document.getElementById("remove");

add.onclick = function() {addText()};
remove.onclick = function() {removeText()};
