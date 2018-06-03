function firstArrayElement(array) {
    if(typeof (array[1]) === "undefined"){
        str1="tablica jest pusta!";
        return str1;
    }else{
        return array[0];
    }
}

var myArray = [1,2,3,4,5];
var result = firstArrayElement(myArray);
console.log("Pierwszy element tablicy wynosi: " + result);