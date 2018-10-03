x = +prompt("Factorial of: ", "");

function factorialX (x) {
    if (x == 1) return 1;
    return x * factorialX (x - 1);
}

alert (factorialX (x));