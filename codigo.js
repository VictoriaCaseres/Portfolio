// Espera que la página cargue completamente.
document.addEventListener('DOMContentLoaded', function() {
    // Referencia al formulario de contacto
    const form = document.getElementById('contact-form');

    //Lo mismo pero para el mesaje de estado del formulario
    const formMessage = document.getElementById('form-message');

  // Escucha el evento 'submit' (enviar) del formulario.
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const isSuccess = true;

        if (isSuccess) {
            formMessage.textContent = '¡Mensaje enviado con éxito!';
            formMessage.className = 'success';
            form.reset();
        } else {
            formMessage.textContent = 'Hubo un error al enviar el mensaje. Intenta de nuevo más tarde.';
            formMessage.className = 'error';
        }
  // Muestra el mensaje de estado.
        formMessage.style.display = 'block';
        setTimeout(() => {
            formMessage.style.display = 'none'; // esconde el mensaje después de 5 segundos.
        }, 5000);
    });
});