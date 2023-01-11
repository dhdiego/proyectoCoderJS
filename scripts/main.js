const productos = [
    // vinilos
    {
        id: 'vinilo-01',
        titulo: 'Vinilo: The Doors - Strange Days',
        imagen: './img/vinilos/The Doors – Strange Days.jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'vinilos',
        },
        precio: 13500,
    },

    {
        id: 'vinilo-02',
        titulo: 'Vinilo: The Babasonicos - Infame',
        imagen: './img/vinilos/Babasonicos – Infame.jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'vinilos',
        },
        precio: 9900,
    },

    {
        id: 'vinilo-03',
        titulo: 'Vinilo: Iron Maiden - The Number of the beast',
        imagen: './img/vinilos/Iron Maiden – The Number Of The Beast.jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'vinilos',
        },
        precio: 10500,
    },

    {
        id: 'vinilo-04',
        titulo: 'Vinilo: The Rolling Stones - Tatto You',
        imagen: './img/vinilos/Rolling Stones – Tattoo You.jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'Vinilos',
        },
        precio: 13500,
    },

    {
        id: 'vinilo-05',
        titulo: 'Vinilo: Thelonious Monk – Genius Of Modern Music',
        imagen: './img/vinilos/Thelonious Monk – Genius Of Modern Music (Volume One).jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'vinilos',
        },
        precio: 16800,
    },
    {
        id: 'vinilo-06',
        titulo: 'Vinilo: Led Zeppelin - Led Zeppelin I',
        imagen: './img/vinilos/Led Zeppelin – Led Zeppelin.jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'vinilos',
        },
        precio: 14000,
    },

    // productos CD´s
    {
        id: 'cd-01',
        titulo: 'Cd Ac/dc - The Razor Edge ',
        imagen: './img/cds/acdcrazor.jpg',
        categoria: {
            nombre: 'cds',
            id: 'cds',
        },
        precio: 990,
    },

    {
        id: 'cd-02',
        titulo: 'Cd Depeche Mode - Violator ',
        imagen: './img/cds/Depeche Mode – Violator.jpg',
        categoria: {
            nombre: 'cds',
            id: 'cds',
        },
        precio: 1200,
    },

    {
        id: 'cd-03',
        titulo: 'Cd Escalandrum - Vertigo ',
        imagen: './img/cds/Escalandrum – vertigo.jpg',
        categoria: {
            nombre: 'cds',
            id: 'cds',
        },
        precio: 1500,
    },
    {
        id: 'cd-04',
        titulo: 'Cd Pharoah Sanders – Karma',
        imagen: './img/cds/Pharoah Sanders – Karma.jpg',
        categoria: {
            nombre: 'cds',
            id: 'cds',
        },
        precio: 13500,
    },
    {
        id: 'cd-05',
        titulo: 'Cd Pink Floyd – The Piper At The Gates Of Dawn ',
        imagen: './img/cds/Pink Floyd – The Piper At The Gates Of Dawn.jpg',
        categoria: {
            nombre: 'cds',
            id: 'cds',
        },
        precio: 1500,
    },

    {
        id: 'cd-06',
        titulo: 'Cd Prince – Prince',
        imagen: './img/cds/Prince – Prince.jpg',
        categoria: {
            nombre: 'cds',
            id: 'cds',
        },
        precio: 2000,
    },

    //productos Cassettes

    {
        id: 'cass-01',
        titulo: 'cassette: Artic Monkeys - Whatever',
        imagen: './img/cass/Arctic Monkeys – Whatever.jpg',
        categoria: {
            nombre: 'cassettes',
            id: 'cassettes',
        },
        precio: 1200,
    },

    {
        id: 'cass-02',
        titulo: 'cassette: Sumo - Dividos por la felicidad',
        imagen: './img/cass/Sumo  – Divididos Por La Felicidad.jpg',
        categoria: {
            nombre: 'cassettes',
            id: 'cassettes',
        },
        precio: 15000,
    },
    
    {
        id: 'cass-03',
        titulo: 'cassette: Patricio Rey - Oktubre',
        imagen: './img/cass/pr – Oktubre.jpg',
        categoria: {
            nombre: 'cassettes',
            id: 'cassettes',
        },
        precio: 15000,
    },
    
    


];

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



