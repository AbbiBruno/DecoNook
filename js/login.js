const userAdmin={
    username: "Admin",
    email:"admin@Deconook.com",
    password:"12345678",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
}

const logIn = (event)=>{
    event.preventDefault();

    let correo = document.querySelector("#correo").value;
    let pass = document.querySelector("#pass").value;
  
    if (correo == userAdmin.email && pass == userAdmin.password) {
      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: userAdmin.username,
          email: userAdmin.email,
          avatar: userAdmin.avatar,
        })
      );
  
      location.replace("/pages/admin.html");
    } else {
      alert("El correo o la contraseña no son correctos");
    }
  };
  
  
  document.querySelector("form").addEventListener("submit", logIn);  

