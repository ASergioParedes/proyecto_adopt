(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {
        //menu responsive
        const menu = document.querySelector("#barra");
        const abrir = document.querySelector("#abrir-menu");
        const cerrar = document.querySelector("#cerrar-menu");

        abrir.addEventListener("click", () => {
            menu.classList.add("visible");
        });

        cerrar.addEventListener("click", () => {
            menu.classList.remove("visible");
        });

    }); //DOM CONTENT LOADED

})();