$(function () {
    console.log($("#user"));
    console.log(sessionStorage.getItem("username"));
    document.getElementById("user").value = sessionStorage.getItem("username");
});