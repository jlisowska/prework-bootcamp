function myMaxFun(var1, var2){
    if(var1 > var2){
        return var1;
    }else if(var1 === var2){
        var str = "Liczby są sobie równe";
        return str;
    }else{
        return var2;
    }
}

var num1 = 2;
var num2 = 5;
var result = myMaxFun(num1, num2);
console.log("Większa liczba: " + result);