document.addEventListener('DOMContentLoaded', function() {
  // Selecciona todas las imágenes
  var images = document.querySelectorAll('.result img');

  // Añade un evento de clic a cada imagen
  images.forEach(function(image) {
    image.addEventListener('click', function() {
      // Oculta todos los iconos de agrandar
      var allEnlargeIcons = document.querySelectorAll('.enlarge-icon');
      allEnlargeIcons.forEach(function(icon) {
        icon.style.display = 'none';
      });

      // Muestra el icono de agrandar para esta imagen
      var enlargeIcon = this.parentNode.nextElementSibling;
      enlargeIcon.style.display = 'block';
    });
  });

  // Selecciona todos los iconos de agrandar
  var enlargeIcons = document.querySelectorAll('.enlarge-icon');

  // Añade un evento de clic a cada icono
  enlargeIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
      // Muestra el modal con la imagen a tamaño completo
      var modal = document.getElementById('myModal');
      var modalImg = document.getElementById('img01');
      modal.style.display = 'block';
      modalImg.src = this.previousElementSibling.children[0].src;
    });
  });

  // Cuando se hace clic en el botón de cierre (x), cierra el modal
  var span = document.getElementsByClassName('close')[0];
  span.onclick = function() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
});