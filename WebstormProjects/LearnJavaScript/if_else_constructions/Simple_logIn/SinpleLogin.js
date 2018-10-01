var admin = "Admin";
var password = "1234567890";

var username = prompt("Username: ", "");

if (username === admin) {

   checkPassword();
} else if (username == null) {
    alert("Cancel");
} else {
    alert ("No access");
}

function checkPassword () {
    var checkPassword = prompt("Password", "");

    if (password === checkPassword) {
        alert("Welcome");
    } else if (checkPassword == null) {
        alert("Cancel");
    } else {
        alert("No access");
    }
}

