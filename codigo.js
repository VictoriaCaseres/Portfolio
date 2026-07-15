document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const submitBtn = form.querySelector('.btn-submit');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                formMessage.textContent = '¡Tu mensaje se envió con éxito! Te responderé pronto.';
                formMessage.className = 'success';
                form.reset();
            } else {
                formMessage.textContent = 'Hubo un error al enviar. Intenta más tarde.';
                formMessage.className = 'error';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            formMessage.textContent = 'Error de conexión. Revisa tu internet.';
            formMessage.className = 'error';
        })
        .finally(() => {
            submitBtn.textContent = 'Enviar';
            submitBtn.disabled = false;
            
            formMessage.classList.remove('hidden');
            
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 6000);
        });
    });

});