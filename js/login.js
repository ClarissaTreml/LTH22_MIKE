
let loginData;//damit wir es später verwenden dürfen


//wir haben zuerst eine route kreirt (logindadta) wir nehmen data von signupdata, mit find einen bestimmten user finden
//find ist findall methode und speichern alle user in json das ist dann ein objekt
//response dot json
//fetch methode mit der wir http://.....aufrufen
//command arbeitet auserhalb des serverse
//die response ist die data...

$(function () { //$ heißt sobald on load ausgeführt wird

    fetch("http://localhost:3000/logindata")
        .then((res) => res.json()) //wie wir mit jason arbeiten --> mit response json um die Daten aus der Datenbank in ein json Objekt umzuwandeln
        .then((data) => {
            console.log(data);
            loginData = data;
        });
});

function login() {


    var password = document.getElementById("pw").value;
    var username = document.getElementById("usn").value;


    for (obj of loginData) {

        if (obj.username === username && obj.password === password) {
            console.log(obj.username, username);
            sessionStorage.setItem("password", password);
            sessionStorage.setItem("username", username);
            return true;
        }

    }

    for (obj of loginData) {

        if (obj.username !== username && obj.password !== password) {

            document.getElementById("pls").value = "please check username";
            return false;
        } else if (obj.username === username && obj.password !== password) {

            document.getElementById("pls").value = "wrong password";
            return false;
        }

    }


}


function logout() {



    // ----> Für Logout ausprobieren!!!!
    //var uss = sessionStorage.getItem("username");
    //sessionStorage.removeItem(uss);



    //sessionStorage.clear();
    //document.getElementById("usn").value = "hallo";
    //document.getElementById('usn').value = "";
    //localStorage.removeItem("username");
    //window.location.reload();
    /*return (
        //<Redirect push to="/signup"/>
    );*/
}