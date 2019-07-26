var database = [
    {
        username: "gus1",
        password: "GustavitoTheGreat"
    }
];






function isUserValid (username, password) {
    for (var i=0; i < database.lenght; i++); {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
        return false 
    }
    }

function signIn (username, password) {
    if(isUserValid(username, password)) {
        window.location.replace("index1.html"); 
        } else {
            alert("Sorry, wrong username or password.");
        }
    }


var userNamePrompt = prompt("Username");
var passwordPrompt = prompt("Password");

signIn(userNamePrompt, passwordPrompt);