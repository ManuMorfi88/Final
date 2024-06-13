// Selecciona los elementos
const abrirMenuBtn = document.getElementById('abrir');
const cerrarMenuBtn = document.getElementById('cerrar');
const contenedorNav = document.getElementById('nav');
const cerrarFavoritosBtn = document.getElementById('cerrarfavoritos');
const contFavoritos = document.getElementById('cont-favoritos');


// Función para abrir el menú de navegación
abrirMenuBtn.addEventListener('click', () => {
    contenedorNav.classList.add('visible');
});

// Función para cerrar el menú de navegación
cerrarMenuBtn.addEventListener('click', () => {
    contenedorNav.classList.remove('visible');
});

abrirMenuBtn.addEventListener('click', () => {
    cerrarFavoritosBtn.classList.remove('visible');
    contFavoritos.classList.remove('visible');

});

// Función para cerrar la sección de favoritos
cerrarFavoritosBtn.addEventListener('click', () => {
    contFavoritos.classList.add('desaparecer');
});
