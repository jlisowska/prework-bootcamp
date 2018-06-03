function calculate(value1, value2) {
    add(value1, value2);
    substract(value1, value2);
    multiply(value1, value2);
}
function add(value1, value2) {
    
    var addNumbers = value1 + value2;
    
    if (addNumbers < 0 ){
        console.log("Wynik jest ujemny");
    }else{
        console.log("Wynik dodawania wynosi: " + addNumbers);
    }
}

function substract(value1, value2) {
    
    var substractNumbers = value1 - value2;
    
    if (substractNumbers < 0){
        console.log("Wynik jest ujemny");
    }else{
        console.log("Wynik odejmowania wynosi: " + substractNumbers);
    }
}

function multiply(value1, value2) {

    var multiplyNumbers = value1 * value2;

    if (multiplyNumbers < 0){
        console.log("Wynik jest ujemny");
    }else{
        console.log("Wynik mnożenia wynosi: " + multiplyNumbers);
    }
}

var num1 = 2;
var num2 = 3;
calculate(num1,num2);
    
    
    

