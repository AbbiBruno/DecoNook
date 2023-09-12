import { productos } from "../data/productos.js";

let contenedorDestacados = document.querySelector("#content-destacados");

const cargarProducto = () => {
  productos.map((producto, index) => {
    let col = document.createElement("div");
    col.classList = "col";

    let tarjeta = `<div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="object-fit: cover; width: 100%; height: 300px;> >        
        <div class="card-body">
        <a href='/pages/detalle.html?posicion=${index}' class="nav-link">
        <h6 class="card-title text-white" style="font-size: 30px; text-align: center; background-color: #183D3D; font-size: 16px;">${producto.nombre}</h6>
        </a>
        <p class="card-text text-white" style="font-size: 20px;">${producto.descripcion}</p>
        </div>
        </div>`;
    col.innerHTML = tarjeta;
    contenedorDestacados.append(col);
  });
};
cargarProducto();
