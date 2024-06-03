const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const body = document.querySelector("body");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    body.style.overflowY = "hidden"; // Bloquea el desplazamiento vertical del cuerpo
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    body.style.overflowY = ""; // Restaura el desplazamiento vertical del cuerpo
});