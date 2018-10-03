n = prompt ("sum to: ", "");

function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert (sumTo (n));

x = +prompt("sum to: ", "");

function sumToX (x) {
    if (x == 1) return 1;
    return x + sumToX (x - 1);
}

alert (sumToX (x));

y = +prompt("sum to: ", "");

function sumToY (y) {
    return y * (y + 1) / 2;
}

alert (sumToY(100));