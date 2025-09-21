document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

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

        formMessage.style.display = 'block';
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
});