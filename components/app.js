import { productos } from "../data/productos.js";

let contenedorDestacados = document.querySelector("#content-destacados");

const cargarProducto = () => {
  productos.map((producto, index) => {
    let col = document.createElement("div");
    col.classList = "col";

    let tarjeta = `<div class="card h100">
    <img src="${producto.imagen}" class="card-img-top-destacados" alt="${producto.nombre}" style="max-width: 100%; max-height: 200px;">
    <div class="card-body-desctacados">
    </div> <span class="badge rounded-8"><i class="fal fa-long-arrow-down"></i> 29%</span> </div>
        <a href='/pages/detalle.html?posicion=${index}' class="nav-link">
            <h6 class="card-title">${producto.nombre}</h6>
        </a>
    </div>
</div>`;
    col.innerHTML = tarjeta;
    contenedorDestacados.append(col);

  });
};

cargarProducto();