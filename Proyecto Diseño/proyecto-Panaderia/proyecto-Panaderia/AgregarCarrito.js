let productos=[];
// let obj = {Nombreproducto:"Dona de chocolate", cantidad: 10, precio: 3.00}

const abrir1 = document.querySelector("#carrito");
const cerrar1 = document.querySelector("#cerrarcarrito");
const desplegar=document.querySelector("#cont-carrito");
const abrir2=document.querySelector("#logocarrito");
const add=document.querySelectorAll(".add");//orque es una clase

abrir1.addEventListener("click", () => {
    desplegar.classList.toggle("desaparecer");
    // body.style.overflowY = "hidden"; // Bloquea el desplazamiento vertical del cuerpo
});
cerrar1.addEventListener("click", () => {
    desplegar.classList.add("desaparecer");
    // body.style.overflowY = ""; // Restaura el desplazamiento vertical del cuerpo
});
abrir2.addEventListener("click", () => {
    desplegar.classList.toggle("desaparecer");
    // body.style.overflowY = "hidden"; // Bloquea el desplazamiento vertical del cuerpo
});
function añadirproductos(){

    desplegar.innerHTML="";
    productos.forEach((producto)=>{
        
        const divproducto=document.createElement("div");
        divproducto.classList.add("productos-carrito");

        const imagenproducto=document.createElement("img");
        imagenproducto.src=producto.imagen
        divproducto.appendChild(imagenproducto)

        const divinf=document.createElement("div");
        divinf.classList.add("inf-carrito");

        const name1=document.createElement("p");
        name1.innerText=producto.nombrepan;
        divinf.appendChild(name1)
        

        const price=document.createElement("p");
        price.innerText=producto.preciopan
        divinf.appendChild(price)
        
        divproducto.appendChild(divinf);
        desplegar.appendChild(divproducto);


    })
}

function elemento(obj_producto){
   //primero verificar si un producto ya existe
        productos.push(obj_producto)
        console.log(productos.length);  
        añadirproductos();
    
}
//click para agg a carrito
//el codigo debe de asegurarse no se encuentre si no que incremete si es que ya esta en el carrito
console.log(add);   //todos los botones que hay en la pagina
//funcion anonima
//estraer informacion de lo que tiene el boton de agregar a carrito segun lo que tenga
add.forEach((pan)=>{
    pan.addEventListener("click",(event)=>{
        event.preventDefault();
        //console.log(event.target.parentNode);//verificar si se añadio
        const obj_producto={
            imagen:event.target.parentNode.children[2].src,
            nombrepan:event.target.parentNode.children[3].children[0].innerText,
            preciopan:event.target.parentNode.children[3].children[1].innerText
        }
        console.log(obj_producto);
        elemento(obj_producto)
    })
})