function pow (x, n) {
    var reslt = x;

    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return reslt;
}

var x = prompt ("x?", '');
var n = prompt ("n?", '');

alert( pow (x, n) );