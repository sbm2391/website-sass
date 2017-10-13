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
 function puntos(n) {
   var dots = document.getElementsByClassName("dot");
   for( i = 0; i < dots.length; i++) {
     if(dots[i].className.includes("activo")) {
       dots[i].className = dots[i].className.replace("activo", "");
       break;
     }
   }
   dots[n].className += " activo"
 }
 function mostrar(n) {
   var item = document.getElementsByClassName("item");
   for( i = 0; i < item.length; i++) {
     if(item[i].className.includes("actual")) {
       item[i].className = item[i].className.replace("actual", "");
       break;
     }
  }
   actual = n;
   item[n].className += " actual";
   puntos(n);
 }

 function siguiente() {
   actual++;
   if(actual > 7) {
     actual = 0;
   }
   mostrar(actual);
 }

 function anterior() {
   actual--;
   if(actual < 0) {
     actual = 7;
   }
   mostrar(actual);
 }
