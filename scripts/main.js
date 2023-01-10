const productos = [
    // vinilos
    {
        id: 'vinilo-01',
        titulo: 'Vinilo: The Doors - Strange Days',
        imagen: './img/vinilos/The Doors – Strange Days.jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'vinilo'
        },
        precio: 13500,
    },

    {
        id: 'vinilo-02',
        titulo: 'Vinilo: The Babasonicos - Infame',
        imagen: './img/vinilos/Babasonicos – Infame.jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'vinilo'
        },
        precio: 9900,
    },

    {
        id: 'vinilo-03',
        titulo: 'Vinilo: Iron Maiden - The Number of the beast',
        imagen: './img/vinilos/Iron Maiden – The Number Of The Beast.jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'vinilo'
        },
        precio: 10500,
    },

    {
        id: 'vinilo-04',
        titulo: 'Vinilo: The Rolling Stones - Tatto You',
        imagen: './img/vinilos/Rolling Stones – Tattoo You.jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'vinilo'
        },
        precio: 13500,
    },

    {
        id: 'vinilo-05',
        titulo: 'Vinilo: Thelonious Monk – Genius Of Modern Music',
        imagen: './img/vinilos/Thelonious Monk – Genius Of Modern Music (Volume One).jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'vinilo'
        },
        precio: 16800,
    },
    {
        id: 'vinilo-06',
        titulo: 'Vinilo: Led Zeppelin - Led Zeppelin I',
        imagen: './img/vinilos/Led Zeppelin – Led Zeppelin.jpg',
        categoria: {
            nombre: 'vinilos',
            id: 'vinilo'
        },
        precio: 14000,
    },

    


];

const contenedorProductos = document.querySelector('#contenedor-productos');

function cargarProductos(productosElegidos) {

  

    productos.forEach(producto => {
        const div = document.createElement('div');

        div.classList.add('producto');
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo} </h3>
            <p class="producto-precio">Precio: $${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>`;

        contenedorProductos.append(div);

    })

}

cargarProductos();


/* const productosArray = [
    {
    id: 'vinilo-01',
    titulo: 'Vinilo: The Doors - Strange Days',
    imagen: './img/vinilos/The Doors – Strange Days.jpg',
    categoria: {
        nombre: 'vinilos',
        id: 'vinilo'
    },
    precio: 13500,


}
] */

