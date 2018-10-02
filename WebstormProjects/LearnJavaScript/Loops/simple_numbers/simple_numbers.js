nextPrime:
for (var i = 2; i < 1000000000000000000000000000000000; i ++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert (i);
}

