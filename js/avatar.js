let contenedorBlog=document.querySelector("#content-blog")
let sectionInicioSesion = document.querySelector("#linkInicioSesion");
let auth=JSON.parse(localStorage.getItem("auth")) || null


if (auth) {
  // Limpiar el contenido anterior
  sectionInicioSesion.innerHTML = "";
  // Crear un elemento de imagen para el avatar
  let img = document.createElement("img");
  img.src = auth.avatar;
  img.alt = auth.user;
  img.classList = "bg-light user-avatar";

  // Crear un enlace y configurar el atributo href
  let hipervinculo = document.createElement("a");
  hipervinculo.href = "../pages/admin.html";
  

  // Agregar la imagen al enlace
  hipervinculo.appendChild(img);
  // Agregar el enlace al elemento con id "linkInicioSesion"
  sectionInicioSesion.append(hipervinculo);
}