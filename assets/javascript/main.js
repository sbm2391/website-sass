//var burguer nav
var btn = document.getElementById("bars");
var menu = document.getElementById("mini-nav-il");
var bool = true;
// var slider

//burguer nav
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

//slideshow

 var actual = 0;
 funcion mostrar(n) {
   var item = document.getElementsbyClassName("item");
   for(1 = 0; i< item.length; i++) {
     if(item[i].className.includes("actual")) {
       item[i].className = item[i].className.replace("actual", "");
       break;
     }
   }
   actual = n;
   item[n].className += " actual";
 }
