let productos = [];

const abrir1 = document.querySelector("#carrito");
const cerrar1 = document.querySelector("#cerrarcarrito");
const desplegar = document.querySelector("#cont-carrito");
const abrir2 = document.querySelector("#logocarrito");
const add = document.querySelectorAll(".add");

abrir1.addEventListener("click", () => {
    desplegar.classList.toggle("desaparecer");
});
cerrar1.addEventListener("click", () => {
    desplegar.classList.add("desaparecer");
});
abrir2.addEventListener("click", () => {
    desplegar.classList.toggle("desaparecer");
});

function añadirproductos() {
    // Mantener el botón "cerrar carrito" siempre presente
    const cerrarBtn = document.querySelector("#cerrarcarrito");
    desplegar.innerHTML = ""; // Limpiar el contenedor del carrito
    desplegar.appendChild(cerrarBtn); // Reagregar el botón "cerrar carrito"

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
        cantidad.innerText = `Cantidad: ${producto.cantidad}`;
        divinf.appendChild(cantidad);

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

add.forEach((pan) => {
    pan.addEventListener("click", (event) => {
        event.preventDefault();
        const obj_producto = {
            imagen: event.target.parentNode.children[2].src,
            nombrepan: event.target.parentNode.children[3].children[0].innerText,
            preciopan: event.target.parentNode.children[3].children[1].innerText
        };
        console.log(obj_producto);
        elemento(obj_producto);
    });
});
