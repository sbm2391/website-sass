var btn = document.getElementById("bars");
var menu = document.getElementById("mini-nav-il");
var bool = true;

function displayMenu() {
    if (bool) {
        menu.setAttribute("class", "navi showing")
        bool = false;

    } else {
        menu.setAttribute("class", "hidding")
        bool = true;
    }
}

btn.addEventListener("click", displayMenu, bool);
