AOS.init();

        function copyEmail() {
            navigator.clipboard.writeText('karolfatima3105@gmail.com').then(() => {
                alert('Correo electrónico copiado al portapapeles');
            });
        }
        // Función para copiar el email al portapapeles
function copyEmail() {
    navigator.clipboard.writeText("karolfatima3105@gmail.com")
      .then(() => {
        const button = document.querySelector('.btn-outline-secondary');
        const originalText = button.textContent;
        button.textContent = '¡Copiado!'; // Cambia el texto del botón
        button.classList.add('btn-success'); // Añade clase de éxito
        setTimeout(() => {
          button.textContent = originalText; // Restaura el texto original
          button.classList.remove('btn-success'); // Elimina clase de éxito
        }, 2000); // Restaura después de 2 segundos
      })
      .catch(err => console.error('Error al copiar el email: ', err)); // Maneja errores
  }