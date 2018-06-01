function compareStrings(str1, str2) {
    if(str1.length > str2.length){
        return str1;
    } else if (str1.length === str2.length){
        var str3 = "Łańcuchy znaków mają taką samą długość";
        return str3;
    } else{
        return str2;
    }
}

var string1 = "Uwielbiam JavaScript";
var string2 = "Jestem  świetną programistką";
var result = compareStrings(string1, string2);
console.log("Dłuższy łańcuch znaków: " + result);

