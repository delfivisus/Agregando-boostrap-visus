(async () => {
    const {value: localidad} = await Swal.fire({
});

if(localidad){
    Swal.fire({
        title:`seleccionaste ${localidad}`
        });
    }
})()


Swal.fire({
    title: 'Bienvenido',
    html: 'Por el momento realizamos envios solo en Capital federal, elija su localidad:',
    icon:'info',
    confirmButtonText: 'Seleccionar',
    footer: 'seguir navegando sin compartir ubicación',
    backdrop: true,
    timer: 10000,
    timerProgressBar: true, 
    allowOutsideClick: true,
    input: 'select',
    inputPlaceHOlder: 'localidad',
    inputOptions: {
        COMUNA1:'COMUNA 1',    
        COMUNA2:'COMUNA 2',
        COMUNA3:'COMUNA 3', 
        COMUNA4:'COMUNA 4', 
        COMUNA5:'COMUNA 5', 
        COMUNA6:'COMUNA 6', 
        COMUNA7:'COMUNA 7', 
        COMUNA8:'COMUNA 8', 
        COMUNA9:'COMUNA 9', 
        COMUNA11:'COMUNA 11', 
        COMUNA12:'COMUNA 12',
        COMUNA13:'COMUNA 13',
        COMUNA14:'COMUNA 14',
        COMUNA15:'COMUNA 15', 
    }

})


const traerProductos = async () => {
    const listado = document.getElementById("listado");
    const response = await fetch("./data.json");
    const data = await response.json();
    
    data.forEach((producto) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>${producto.precio}</p>
        <p>${producto.id}</p>
        <hr/>
    `;
        listado.append(li);
    });
};

traerProductos();

const div = document.getElementById("div")
const boton =document.getElementById("boton")
let productos = [
    {
        id= 1,
        articulo:"Bolsa Pedigree",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_813120-MLA49656683084_042022-V.jpg",
        precio: 8500,

    }
    {
        id= 2,
        articulo:"Bolsa Dogchow",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_793926-MLA43229058650_082020-O.webp",
        precio: 10500,
    } 
]

let carrito = []


productos.forEach(producto => {
    let productoRenderizado = document.createElement("div")
    productoRenderizado.innerHTML = 
    <h3>articulo:${producto.articulo}</h3>
    <img src= "${producto.imagen}">
    <span>precio: $${producto.precio}</span>
    <button id=${producto.id}>Comprar</button>
    
    const boton = document.getElementById(producto.id)
    div.append(productoRenderizado)
    boton.addEventListener("click", () => comprarProducto(producto))
});

const comprarProducto = (producto) => {
    let productoExiste = carrito.find(item => item.id === producto.id)
    if(productoExiste === undefined){
        carrito.push({
            id: producto.id,
            articulo: producto.articulo,
            imagen: producto.imagen,
            precio: producto.precio,
            cantidad: 1
        })
    }else{
        productoExiste.precio = productoExiste.precio + producto.precio
        productoExiste.cantidad = productoExiste,cantidad + 1
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
}
localStorage.setItem("registro", JSON.stringify(usuarios))
let returnCarrito = JSON.parse(localStorage.getItem("carrito"))

boton.addEventListener("click", () => console.log(carrito))
 */</img>