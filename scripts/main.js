let productos = [];

fetch("./scripts/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.btn-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numeroCarrito = document.querySelector('#numero-carrito');


function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = '';
  

    productosElegidos.forEach(producto => {
    

        const div = document.createElement('div');

        div.classList.add('producto');
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">Precio: $${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>`;

        contenedorProductos.append(div);
       

    })

    actualizarBotonesAgregar();
    
   

}

cargarProductos(productos);
botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove('active'));

        e.currentTarget.classList.add('active');

        if (e.currentTarget.id != 'todos') {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

        cargarProductos(productosBoton);

        } else {
            tituloPrincipal.innerText = 'Todos Los Productos';
            cargarProductos(productos);
        }
        

    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll('.producto-agregar');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    })

}


/* const productosEnCarritoLS = []; */

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem('productos-en-carrito');

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
     /* productosEnCarrito = productosEnCarritoLS; */
     actualizarContador(); 
}else { 
    productosEnCarrito = [];
}



    function agregarAlCarrito(e) {

        Toastify({
            text: "Agregado al Carrito",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            
            background: "linear-gradient(to right, #fadd34, #111007)",
            borderRadius: '2rem',
            textTransform: 'uppercase',
            fontSize: '1.5rem',
            },
            onClick: function(){} // Callback after click
          }).showToast();


        const idBoton = e.currentTarget.id;
        const productoAgregado = productos.find(producto => producto.id === idBoton);
    
        if(productosEnCarrito.some(producto => producto.id === idBoton)) {
            const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
            productosEnCarrito[index].cantidad++;
        } else {
            productoAgregado.cantidad = 1;
            productosEnCarrito.push(productoAgregado);
        }

    actualizarContador(); 

    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));

}




function actualizarContador() {
    let nuevoContador = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numeroCarrito.innerText = nuevoContador;
}


