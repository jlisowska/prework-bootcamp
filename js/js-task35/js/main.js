function inRange(n){
    if(n >= 100 && n <= 200){
        console.log("Liczba: " + n + " znajduje się w przedziale");
    } else{
        console.log("Liczba: " + n + " nie znajduje się w przedziale");
    }
}

var value1 = 1;
var value2 = 100;
var value3 = 300;
inRange(value1);
inRange(value2);
inRange(value3);