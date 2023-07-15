// Create theme
function theme() {
    var elem = document.getElementById("theme").value;
    if (elem == "moon") {
        document.getElementsByTagName("body")[0].style.background = "#1e1d1d";
        document.getElementsByTagName("body")[0].style.color = "white";
        document.getElementById("light").style.display = "none";
        document.getElementById("dark").style.opacity = "1";
        document.getElementsByTagName("footer")[0].style.background = "#1e1d1d";
        document.getElementsByClassName("project1")[0].style.borderColor = "white";
        document.getElementsByClassName("project2")[0].style.borderColor = "white";
        document.getElementsByClassName("hobby1")[0].style.borderColor = "white";
        document.getElementsByClassName("hobby2")[0].style.borderColor = "white";
        document.getElementsByClassName("hobby3")[0].style.borderColor = "white";
    }
    else {
        document.getElementsByTagName("body")[0].style.background = "white";
        document.getElementsByTagName("body")[0].style.color = "black";
        document.getElementById("light").style.display = "block";
        document.getElementById("dark").style.opacity = "0";
        document.getElementsByTagName("footer")[0].style.background = "#9d9a9a";
        document.getElementsByClassName("project1")[0].style.borderColor = "black";
        document.getElementsByClassName("project2")[0].style.borderColor = "black";
        document.getElementsByClassName("hobby1")[0].style.borderColor = "black";
        document.getElementsByClassName("hobby2")[0].style.borderColor = "black";
        document.getElementsByClassName("hobby3")[0].style.borderColor = "black";
    }
}
// working of buttons 
function clickfun2() {
    window.location.href = "project2.html";
}
function clickfun1() {
    window.location.href = "project1.html";
}
function clickfun3() {
    window.location.href = "coding.html";
}

function clickfun4() {
    window.location.href = "investing.html";
}
function clickfun5() {
    window.location.href = "writing.html";
}