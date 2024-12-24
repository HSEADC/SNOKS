import '../styleguide.css';

document.addEventListener("DOMContentLoaded", (e) => {

    window.onload = function() { 
        setTimeout( () => {
            document.getElementById("preloader").style.opacity="0";
            document.getElementById("preloader").style.pointerEvents="none"
        }
        , 1200)
      };
})