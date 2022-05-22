let form  = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {

    var pw = document.getElementById("pw").value;
    var repw = document.getElementById("repw").value;

    if(pw !== repw || (pw.length<8)){

        //ungleich
        event.preventDefault();
        //HUE

    }else if(pw === pw && pw.length>=8){
        alert("Successfully Signed Up, Please Log in! ");

    }


});
