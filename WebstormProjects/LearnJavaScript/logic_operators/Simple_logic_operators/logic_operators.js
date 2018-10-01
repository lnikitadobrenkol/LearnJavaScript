var x = prompt("Type the figure", "");

if (x >= 14 && x <= 90) {
    alert ("X = " + x + " X is located between 14 - 90");
}
else {
    alert ("I don`t care");
}

var y = prompt("Type the figure", "");

if (y > 14 && y <90) {
    alert ("I don`t care too");
}
else {
    alert ("X = " + y + " X isn`t located between 14 - 90");
}

var z = prompt("Type the figure", "");

if (!(y > 14 && y <90)) {
    alert ("I don`t care too");
}
else {
    alert ("X = " + z + " X isn`t located between 14 - 90");
}