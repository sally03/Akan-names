var daysOfTheWk = ["Sunday", "Monday", "Tuesday", "Wensday", "Thur", "Fri", "Satur" ];
var namesOfMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "kwame"];
var namesOfFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function calcDayOfWk() {

    var yearOfBirth = parseInt(document.getElementById("year").value);
    var monthOfBirth = parseInt(document.getElementById("month").value);
    var dayOfBirth = parseInt(document.getElementById("day").value);
    var valueOfMale = document.getElementById("male");
    var valueOfFemale = document.getElementById("female");

    if (yearOfBirth<1 || yearOfBirth>2020) {
        alert("Invalid Date");
    } 
    // else if (condition) {
        
    // } else {
        
    // }

    var dateOfBirth = new Date(yearOfBirth + "/" + monthOfBirth + "/" + dayOfBirth);
    var getDayOfBirth = dateOfBirth.getDay();

    if (valueOfFemale.checked==true) {
        alert(daysOfTheWk[getDayOfBirth] + " and your name is" + namesOfFemale[getDayOfBirth]);
    } 
    else if (valueOfMale.checked==true) {
        alert(daysOfTheWk[getDayOfBirth] + " " + namesOfMale[getDayOfBirth]);
    }


    
} 

// daysOfTheWk[0] = "Sunday";