document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones de favoritos
    const favButtons = document.querySelectorAll('.fav');
    const favFillButtons = document.querySelectorAll('.fav1');

    // Selecciona elementos de la ventana de favoritos
    const abrirFavoritos = document.querySelector('.opcion[href="favoritos.html"]');
    const cerrarFavoritos = document.querySelector('#cerrarfavoritos');
    const contFavoritos = document.querySelector('#cont-favoritos');

    // Recuperar productos favoritos del localStorage
    let productosFavoritos = JSON.parse(localStorage.getItem('productosFavoritos')) || [];

    // Inicializar el estado de los botones de favoritos
    productosFavoritos.forEach(producto => {
        const index = producto.index;
        if (favButtons[index] && favFillButtons[index]) {
            favButtons[index].classList.add('hidden');
            favFillButtons[index].classList.remove('hidden');
        }
    });

    // Añade un event listener a cada botón de favorito
    favButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            toggleFavorite(button, favFillButtons[index], index);
        });
    });

    favFillButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            toggleFavorite(favButtons[index], button, index);
        });
    });

    // Función para alternar el estado de los botones de favoritos
    function toggleFavorite(buttonEmpty, buttonFill, index) {
        buttonEmpty.classList.toggle('hidden');
        buttonFill.classList.toggle('hidden');

        const productInfo = getProductInfo(buttonEmpty.closest('div'), index);
        if (buttonFill.classList.contains('hidden')) {
            removeFromFavorites(productInfo);
        } else {
            addToFavorites(productInfo);
        }

        // Guardar productos favoritos en localStorage
        localStorage.setItem('productosFavoritos', JSON.stringify(productosFavoritos));

        // Actualizar la lista de favoritos en tiempo real
        displayFavorites();
    }

    function getProductInfo(productElement, index) {
        const imgSrc = productElement.querySelector('.photo').src;
        const name = productElement.querySelector('.etiqueta1 p:nth-child(1)').innerText;
        const price = productElement.querySelector('.etiqueta1 p:nth-child(2)').innerText;
        return { imgSrc, name, price, index };
    }

    function addToFavorites(productInfo) {
        productosFavoritos.push(productInfo);
    }

    function removeFromFavorites(productInfo) {
        const index = productosFavoritos.findIndex(p => p.name === productInfo.name);
        if (index !== -1) {
            productosFavoritos.splice(index, 1);
        }
    }

    function displayFavorites() {
        contFavoritos.innerHTML = ''; // Limpiar contenedor de favoritos
        const cerrarBtn = document.createElement('button');
        cerrarBtn.classList.add('cerrar-menu');
        cerrarBtn.id = 'cerrarfavoritos';
        cerrarBtn.innerHTML = '<i class="bi bi-x"></i>';
        cerrarBtn.addEventListener('click', () => {
            contFavoritos.classList.add('desaparecer');
        });
        contFavoritos.appendChild(cerrarBtn);

        if (productosFavoritos.length === 0) {
            const mensajeVacio = document.createElement('p');
            mensajeVacio.innerText = 'No hay productos agregados';
            mensajeVacio.classList.add('mensaje-vacio');
            contFavoritos.appendChild(mensajeVacio);
        } else {
            productosFavoritos.forEach(producto => {
                const divProducto = document.createElement('div');
                divProducto.classList.add('productos-favoritos');

                const imgProducto = document.createElement('img');
                imgProducto.src = producto.imgSrc;
                divProducto.appendChild(imgProducto);

                const divInfo = document.createElement('div');
                divInfo.classList.add('inf-favoritos');

                const name = document.createElement('p');
                name.innerText = producto.name;
                divInfo.appendChild(name);

                const price = document.createElement('p');
                price.innerText = producto.price;
                divInfo.appendChild(price);

                divProducto.appendChild(divInfo);
                contFavoritos.appendChild(divProducto);
            });
        }
    }

    abrirFavoritos.addEventListener('click', (event) => {
        event.preventDefault();
        contFavoritos.classList.toggle('desaparecer');
        displayFavorites();
    });

    cerrarFavoritos.addEventListener('click', () => {
        contFavoritos.classList.add('desaparecer');
    });

    // Mostrar favoritos al cargar la página
    displayFavorites();
});
