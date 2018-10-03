var n = prompt("Pick the number of the fibinachi figure: ", "");

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function fibonachi(n) {
    var a = 1;
    var b = 1;
    var sum = a + b;

    if (isNumeric(n)) {

        if (n >= 2) {
            for (var i = 0; i < (n - 2); i++) {
                a = b;
                b = sum;
                sum = a + b;
            }
            return sum;
        } else {
            return 1;
        }
    } else {
        alert ("Please, the enter the NUMBER");
    }
}

alert (fibonachi(n));