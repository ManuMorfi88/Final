const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const nav = document.querySelector("#nav");
const body = document.querySelector("body");
const hearts = document.querySelectorAll(".fav, .fav1");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    body.style.overflowY = "hidden"; // Bloquea el desplazamiento vertical del cuerpo
    hearts.forEach(heart => heart.classList.add("hidden-hearts")); // Oculta los corazones
    
    // Oculta todos los elementos dentro del body excepto el contenedor de navegación
    Array.from(body.children).forEach(child => {
        if (child !== nav) {
            child.classList.add("hidden-content");
        }
    });
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    body.style.overflowY = ""; // Restaura el desplazamiento vertical del cuerpo
    hearts.forEach(heart => heart.classList.remove("hidden-hearts")); // Muestra los corazones
    
    // Muestra todos los elementos dentro del body
    Array.from(body.children).forEach(child => {
        if (child !== nav) {
            child.classList.remove("hidden-content");
        }
    });
});
