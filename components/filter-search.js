import { productos } from "../data/productos";
document.addEventListener("keyup", (e) => {

  if (e.target.matches("#content-destacados .productos")) {
    document.querySelectorAll("productos").forEach((producto) => {
      producto.textContent.toLocaleLowerCase().includes(e.target.value)

      ? producto.classList.remove(".results-list")

      : productos.classList.add(".results-list");

    });
  }
});