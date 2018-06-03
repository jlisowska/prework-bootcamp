function tryNumbers(value1, value2){
    if(value1 === 20 || value2 === 20 || (value1+value2)<=20){
        return true;
    }else{
        return false;
    }
}

var num1 = 20;
var num2 = 30;
var shouldBeTrue = tryNumbers(num1,num2);
console.log("Dla: " + num1 + " oraz " + num2 + " funkcja zwraca wartość: " + shouldBeTrue);

var num3 = 1;
var num4 = 19;
var shouldBeTrue2 = tryNumbers(num3,num4);
console.log("Dla: " + num3 + " oraz " + num4 + " funkcja zwraca wartość: " + shouldBeTrue2);

var num5 = 21;
var num6 = 19;
var shouldBeFalse = tryNumbers(num5,num6);
console.log("Dla: " + num5 + " oraz " + num6 + " funkcja zwraca wartość: " + shouldBeFalse);