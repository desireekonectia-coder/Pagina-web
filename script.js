// Seleccionamos el formulario del HTML
const formulario = document.getElementById('registroForm');

// Escuchamos cuando el usuario hace clic en el botón de enviar
formulario.addEventListener('submit', function(evento) {
    // Evitamos que la página se recargue automáticamente
    evento.preventDefault();

    // Obtenemos los valores escritos por el usuario
    const nombreUsuario = document.getElementById('nombre').value;
    const correoUsuario = document.getElementById('correo').value;

    // Guardamos los datos en la memoria del navegador (localStorage)
    // localStorage.setItem("clave", "valor")
    localStorage.setItem('nombreGuardado', nombreUsuario);
    localStorage.setItem('correoGuardado', correoUsuario);

    // Redirigimos a la página de perfil
    window.location.href = "usuario.html";
});