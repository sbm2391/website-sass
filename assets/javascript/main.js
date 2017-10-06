var btn = document.getElementById("bars");
var menu = document.getElementById("mini-nav-il");
var bool = true;


function displayMenu() {
    if (bool) {
      menu.setAttribute("id", "mostrar")
      bool = false;
      //alert('true');

    } else {
        menu.setAttribute("id", "esconder")
        bool = true;
        //alert('false');
  }
}

btn.addEventListener("click", displayMenu, bool);
