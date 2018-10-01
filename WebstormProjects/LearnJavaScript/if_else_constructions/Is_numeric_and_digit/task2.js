var ourFigure = prompt("Type any figure", "");

function isNumeric(ourFigure) {
    return !isNaN(parseFloat(ourFigure)) && isFinite(ourFigure);
}
if (isNumeric(ourFigure)) {
    if (ourFigure > 0) {
        alert("1");
    } else if (ourFigure < 0) {
        alert("-1");
    } else {
        alert("0");
    }
}
else {
    alert ("I said FIGURE, just type a FIGURE!")
}