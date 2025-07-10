function bienvenida(nombre, edad){
    return"Bienvenido"  +  nombre  +  "tu edad es:"  +  edad;
}

console.log(bienvenida("Carlos", 32));

const multiplicacion = (n1,edad) => n1*edad;
console.log(multiplicacion(5,32));

function saludo() {
    alert("Bienvenido a mi sitio web, me llamo Carlos Franco y soy de ISAT!");
}

function compra() {
    alert("Gracias por tu compra 😊 Esperamos que disfrutes tu nuevo vinilo y que la música llene tu espacio de buenas vibras."); 
}

function iralcarrito(){
    window.location.href ="carrito_compras.html"
}


function activarmusica() {
    document.getElementById("musicafondo").play();
}

document.addEventListener("DOMContentLoaded", function() {
  const formulario = document.querySelector("form");

  formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    // Validacion a textos

    if (nombre === "") {
      alert("Ingresar el nombre");
      return;
    }

    if (apellido === "") {
      alert("Ingresa los apellidos");
      return;
    }

    // Validacion a correo

    const regexEmail = /^[\w.-]+@[\w.-]+\.\w+$/;
    if (!regexEmail.test(correo)) {
      alert("Ingrese un correo válido");
      return;
    }

    // Validacion a telefono

    const regexTelefono = /^9\d{8}$/;
    if (!regexTelefono.test(telefono)) {
      alert("El teléfono debe tener 9 dígitos y comenzar con 9");
      return;
    }

    alert("Formulario válido");
    formulario.reset();
  });
});
