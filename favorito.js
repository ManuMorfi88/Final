document.addEventListener('DOMContentLoaded', function () {
    const favButtons = document.querySelectorAll('.fav');
    const listaFavoritos = document.getElementById('lista-favoritos');
    const contenedorFavoritos = document.getElementById('contenedor-favoritos');
    const logofavoritos = document.getElementById('logofavoritos');

    logofavoritos.addEventListener('click', function () {
        contenedorFavoritos.style.display = contenedorFavoritos.style.display === 'block' ? 'none' : 'block';
    });

    favButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');

            const productId = this.getAttribute('data-id');
            const productName = this.getAttribute('data-nombre');
            const productPrice = this.getAttribute('data-precio');
            const productImage = this.getAttribute('data-imagen');

            if (this.classList.contains('active')) {
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
            } else {
                const favorito = listaFavoritos.querySelector(`.producto-favorito[data-id="${productId}"]`);
                listaFavoritos.removeChild(favorito);
            }
        });
    });
});
