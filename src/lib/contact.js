document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Mostrar estado de carga en el botón
    const submitButton = this.querySelector('button[type="submit"]');
    const originalContent = submitButton.innerHTML;
    submitButton.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="ml-2">Enviando...</span>
    `;
    submitButton.disabled = true;

    try {
        // Simular envío con delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Aquí deberías implementar tu lógica de envío real
        console.log('Datos del formulario:', formData);
        
        // Mostrar mensaje de éxito
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 translate-x-full';
        successMessage.innerHTML = `
            <div class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>¡Mensaje enviado con éxito!</span>
            </div>
        `;
        document.body.appendChild(successMessage);
        
        // Animar entrada del mensaje
        requestAnimationFrame(() => {
            successMessage.style.transform = 'translateX(0)';
        });

        // Remover mensaje después de 3 segundos
        setTimeout(() => {
            successMessage.style.transform = 'translateX(full)';
            setTimeout(() => successMessage.remove(), 500);
        }, 3000);

        // Limpiar formulario
        this.reset();
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
        // Restaurar botón
        submitButton.innerHTML = originalContent;
        submitButton.disabled = false;
    }
});