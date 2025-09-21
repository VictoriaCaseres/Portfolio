// Espera que la página cargue completamente.
document.addEventListener('DOMContentLoaded', function() {
     // Referencia al formulario de contacto
    const form = document.getElementById('contact-form');
    //con este lo mismo pero con el mensaje
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
// mesaje del estado
        formMessage.style.display = 'block';

         // esconde el mensaje despues de 5 seg
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
});