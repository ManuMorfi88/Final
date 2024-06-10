document.addEventListener('DOMContentLoaded', function () {
    const favButtons = document.querySelectorAll('.fav');
    const favFillButtons = document.querySelectorAll('.fav-fill');
    const listaFavoritos = document.getElementById('lista-favoritos');
    const contenedorFavoritos = document.getElementById('contenedor-favoritos');
    const logofavoritos = document.getElementById('logofavoritos');

    logofavoritos.addEventListener('click', function () {
        contenedorFavoritos.style.display = contenedorFavoritos.style.display === 'block' ? 'none' : 'block';
    });

    favButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            const fillButton = document.querySelector(`.fav-fill[data-id="${productId}"]`);

            this.style.display = 'none';
            fillButton.style.display = 'inline-block';

            const productName = this.getAttribute('data-nombre');
            const productPrice = this.getAttribute('data-precio');
            const productImage = this.getAttribute('data-imagen');

            const favorito = document.createElement('div');
            favorito.classList.add('producto-favorito');
            favorito.setAttribute('data-id', productId);
            favorito.innerHTML = `
                <img src="${productImage}" alt="${productName}">
                <div class="info">
                    <p>${productName}</p>
                    <p>$${productPrice} MXN</p>
                </div>
            `;
            listaFavoritos.appendChild(favorito);
        });
    });

    favFillButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            const emptyButton = document.querySelector(`.fav[data-id="${productId}"]`);

            this.style.display = 'none';
            emptyButton.style.display = 'inline-block';

            const favorito = listaFavoritos.querySelector(`.producto-favorito[data-id="${productId}"]`);
            listaFavoritos.removeChild(favorito);
        });
    });
});
