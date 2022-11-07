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