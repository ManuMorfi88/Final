let productos = JSON.parse(localStorage.getItem("productos")) || [];

const abrir1 = document.querySelector("#carrito");
const cerrar1 = document.querySelector("#cerrarcarrito");
const desplegar = document.querySelector("#cont-carrito");
const abrir2 = document.querySelector("#logocarrito");
const add = document.querySelectorAll(".add");

abrir1.addEventListener("click", () => {
    desplegar.classList.toggle("desaparecer");
    mostrarMensajeSiCarritoVacio(); // Mostrar mensaje si el carrito está vacío
});
cerrar1.addEventListener("click", () => {
    desplegar.classList.add("desaparecer");
});
abrir2.addEventListener("click", () => {
    desplegar.classList.toggle("desaparecer");
    mostrarMensajeSiCarritoVacio(); // Mostrar mensaje si el carrito está vacío
});

function añadirproductos() {
    // Mantener el botón "cerrar carrito" siempre presente
    const cerrarBtn = document.querySelector("#cerrarcarrito");
    desplegar.innerHTML = ""; // Limpiar el contenedor del carrito
    desplegar.appendChild(cerrarBtn); // Reagregar el botón "cerrar carrito"

    if (productos.length === 0) {
        // Mostrar mensaje si no hay productos en el carrito
        mostrarMensajeSiCarritoVacio();
    } else {
        productos.forEach((producto, index) => {
            const divproducto = document.createElement("div");
            divproducto.classList.add("productos-carrito");

            const imagenproducto = document.createElement("img");
            imagenproducto.src = producto.imagen;
            divproducto.appendChild(imagenproducto);

            const divinf = document.createElement("div");
            divinf.classList.add("inf-carrito");

            const name1 = document.createElement("p");
            name1.innerText = producto.nombrepan;
            divinf.appendChild(name1);

            const price = document.createElement("p");
            price.innerText = producto.preciopan;
            divinf.appendChild(price);

            const cantidad = document.createElement("p");
            cantidad.innerText = "Cantidad: ";
            divinf.appendChild(cantidad);

            const inputCantidad = document.createElement("input");
            inputCantidad.type = "number";
            inputCantidad.value = producto.cantidad;
            inputCantidad.min = 1;
            inputCantidad.classList.add("input-cantidad");
            inputCantidad.addEventListener("change", (event) => {
                cambiarCantidad(index, event.target.value);
            });
            divinf.appendChild(inputCantidad);

            // Contenedor de botones de cantidad
            const botonesCantidad = document.createElement("div");
            botonesCantidad.classList.add("botones-cantidad");

            // Botones para incrementar y decrementar cantidad
            const btnIncrementar = document.createElement("button");
            btnIncrementar.innerText = "+";
            btnIncrementar.classList.add("btn-quantity");
            btnIncrementar.addEventListener("click", () => {
                incrementarCantidad(index);
            });
            botonesCantidad.appendChild(btnIncrementar);

            const btnDecrementar = document.createElement("button");
            btnDecrementar.innerText = "-";
            btnDecrementar.classList.add("btn-quantity");
            btnDecrementar.addEventListener("click", () => {
                decrementarCantidad(index);
            });
            botonesCantidad.appendChild(btnDecrementar);

            divinf.appendChild(botonesCantidad);

            divproducto.appendChild(divinf);
            desplegar.appendChild(divproducto);
        });

        // Crear y añadir el botón "Comprar ahora" si hay productos en el carrito
        if (productos.length > 0) {
            const btnComprar = document.createElement("button");
            btnComprar.innerText = "Comprar ahora";
            btnComprar.classList.add("buy-now");
            btnComprar.addEventListener("click", () => {
                alert("Proceso de compra iniciado");
            });
            desplegar.appendChild(btnComprar);

            // Crear y añadir el botón "Vaciar carrito"
            const btnVaciarCarrito = document.createElement("button");
            btnVaciarCarrito.innerText = "Vaciar carrito";
            btnVaciarCarrito.classList.add("vaciar-carrito");
            btnVaciarCarrito.addEventListener("click", () => {
                vaciarCarrito();
            });
            desplegar.appendChild(btnVaciarCarrito);
        }
    }
    localStorage.setItem("productos", JSON.stringify(productos));
}

function mostrarMensajeSiCarritoVacio() {
    // Remover cualquier mensaje existente
    const mensajeExistente = desplegar.querySelector(".mensaje-vacio");
    if (mensajeExistente) {
        mensajeExistente.remove();
    }

    if (productos.length === 0) {
        const mensajeVacio = document.createElement("p");
        mensajeVacio.innerText = "No hay productos agregados";
        mensajeVacio.classList.add("mensaje-vacio");
        desplegar.appendChild(mensajeVacio);
    }
}

function elemento(obj_producto) {
    // Verificar si el producto ya existe en el carrito
    const productoExistente = productos.find(producto => producto.nombrepan === obj_producto.nombrepan);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        obj_producto.cantidad = 1;
        productos.push(obj_producto);
    }
    console.log(productos.length);
    añadirproductos();
}

function eliminarProducto(index) {
    productos.splice(index, 1);
    añadirproductos();
}

function incrementarCantidad(index) {
    productos[index].cantidad++;
    añadirproductos();
}

function decrementarCantidad(index) {
    if (productos[index].cantidad > 1) {
        productos[index].cantidad--;
    } else {
        if (confirm("¿Deseas eliminar el producto?")) {
            eliminarProducto(index);
        }
    }
    añadirproductos();
}

function cambiarCantidad(index, nuevaCantidad) {
    const cantidad = parseInt(nuevaCantidad, 10);
    if (cantidad > 0) {
        productos[index].cantidad = cantidad;
    } else {
        if (confirm("¿Deseas eliminar el producto?")) {
            eliminarProducto(index);
        }
    }
    añadirproductos();
}

function vaciarCarrito() {
    if (confirm("¿Estás seguro de que deseas vaciar el carrito?")) {
        productos = [];
        añadirproductos();
    }
}

// Función para manejar la animación del botón
function animateButton(button) {
    button.classList.add("active");
    setTimeout(() => {
        button.classList.remove("active");
    }, 1000);
}

add.forEach((pan) => {
    pan.addEventListener("click", (event) => {
        event.preventDefault();
        const button = event.target;
        const obj_producto = {
            imagen: button.parentNode.children[2].src,
            nombrepan: button.parentNode.children[3].children[0].innerText,
            preciopan: button.parentNode.children[3].children[1].innerText
        };
        console.log(obj_producto);
        elemento(obj_producto);
        
        // Llamada a la función de animación
        animateButton(button);
    });
});

// Inicializar el carrito con los productos almacenados en localStorage
añadirproductos();
