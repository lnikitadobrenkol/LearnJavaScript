var num = 100;

while (num = null || num <=100 || !isNumeric(num)) {
    num = prompt("Enter the number greater then 100: ", "");
    if (num > 100 && num != null && isNumeric(num)) {
        alert ("GJ!");
    } else {
        alert ("Please, ENTER the NUMBER GREATER then 100");
    }
}

    function isNumeric(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }